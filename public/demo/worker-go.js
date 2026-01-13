// Import the Go Wasm support file
importScripts("wasm_exec.js");

// Polyfill for Wasm in older environments if needed, but modern browsers are fine.
if (!WebAssembly.instantiateStreaming) { 
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

const go = new Go();

console.log("Go Import Object Keys:", Object.keys(go.importObject));
if (go.importObject.go) {
    console.log("Go Import Object 'go' Keys:", Object.keys(go.importObject.go));
    // Polyfill for main.wasm expecting 'gojs' namespace
    go.importObject.gojs = go.importObject.go;
} else {
    console.error("Critical: go.importObject.go is missing!");
}

// Streaming compilation is faster
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
    // Run the Go program
    go.run(result.instance);
}).catch((err) => {
    console.error("Go Wasm Load Error:", err);
});
