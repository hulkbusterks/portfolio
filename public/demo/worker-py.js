// Imports and setup handled by the worker loader
importScripts("https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js");

async function loadPyodideAndRun() {
    self.pyodide = await loadPyodide();
    
    // Define the Python Class
    await self.pyodide.runPythonAsync(`
import json
import time
import random
import sys

# Increase N
COMPLEXITY_N = 1000  # Pyodide is slower than native Python, so we lower this slightly to match pacing or keep high? 
# Actually, keep it fair. But Pyodide might choke on 3000. Let's try 1500 for Wasm Python.
COMPLEXITY_N = 1500

class Solution:
    def maxDotProduct(self, nums1, nums2):
        if nums1[0] > nums2[0]:
            nums2, nums1 = nums1, nums2
        if max(nums1) < 0 and min(nums2) > 0:
            return max(nums1) * min(nums2)
        m, n = len(nums1), len(nums2)
        d = [0] * (n + 1)
        
        for i in range(m):
            for j in range(n - 1, -1, -1):
                v = nums1[i] * nums2[j] + d[j]
                if v > d[j+1]:
                    d[j+1] = v
            for j in range(n):
                if d[j+1] < d[j]:
                    d[j+1] = d[j]
        return d[n]

def generate_input():
    return [random.randint(-50, 50) for _ in range(COMPLEXITY_N)], [random.randint(-50, 50) for _ in range(COMPLEXITY_N)]

def run_loop(js_post_message):
    sol = Solution()
    while True:
        nums1, nums2 = generate_input()
        
        start = time.time_ns()
        res = sol.maxDotProduct(nums1, nums2)
        end = time.time_ns()

        # Approximate memory from Pyodide linear memory (bytes -> MB)
        try:
            import js
            heap_bytes = js.pyodide._module.HEAP8.buffer.byteLength
            memory_mb = float(heap_bytes) / 1024.0 / 1024.0
        except Exception:
            memory_mb = 0.0
        
        # Memory in Pyodide is tricky, sending 0 for now
        payload = {
            "lang": "python",
            "durationNs": end - start,
            "result": res,
            "memoryMB": memory_mb
        }
        
        js_post_message(json.dumps(payload))
    `);

    // Bridge JS function to Python by attaching to global `js`
    self.js_post_message = (jsonStr) => {
        self.postMessage(jsonStr);
    };

    // Start the loop; Python will import it from the js module
    await self.pyodide.runPythonAsync(`
from js import js_post_message
run_loop(js_post_message)
    `);

}

loadPyodideAndRun();
