// All UI is static; no hooks needed
import { aboutMe, credlyBadgeUrl, credlyPage, experience, portraitUrl, projects, research } from './content'

type LinkProps = { href: string; label: string }

const Pill = ({ children }: { children: string }) => (
  <span className="rounded-full bg-slate-800/70 border border-slate-700 px-3 py-1 text-sm text-slate-100">
    {children}
  </span>
)

const BadgeEmbed = () => {
  return (
    <div className="mt-4">
      <div className="max-w-[240px] rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-slate-900/20">
        <a
          href={credlyPage}
          target="_blank"
          rel="noreferrer"
          className="block rounded-lg border border-slate-800/70 bg-black/60 p-2 hover:border-cyan-500/50 transition"
        >
          <img
            src={credlyBadgeUrl}
            alt="Credly badge"
            className="w-full h-auto object-contain"
          />
        </a>
      </div>
    </div>
  )
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <div className="h-[2px] w-10 bg-gradient-to-r from-cyan-400 to-blue-500" />
      <h2 className="text-2xl font-semibold text-slate-100 tracking-tight">{title}</h2>
    </div>
    <div className="space-y-6 text-slate-200 text-[15px] leading-relaxed">{children}</div>
  </section>
)

const LinkRow = ({ links }: { links: LinkProps[] }) => (
  <div className="flex flex-wrap gap-3">
    {links.map((l) => (
      <a
        key={l.href}
        href={l.href}
        className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs uppercase tracking-wide text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition"
        target="_blank"
        rel="noreferrer"
      >
        {l.label}
      </a>
    ))}
  </div>
)

function App() {
  const basePath = import.meta.env.BASE_URL
  const demoUrl = `${basePath}demo/index.html`

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Hero */}
        <header className="border border-slate-800 rounded-2xl bg-slate-900/40 p-6 sm:p-8 shadow-lg shadow-slate-900/30">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-cyan-500/40 shadow-md shadow-cyan-500/20">
                  <img src={portraitUrl} alt="Kritik Sharma" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">AI/ML engineer & backend</p>
                  <h1 className="text-3xl md:text-4xl font-bold mt-2">Kritik Sharma</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <a className="hover:text-cyan-300" href="mailto:kritik.sharma00000@gmail.com">kritik.sharma00000@gmail.com</a>
              <span className="text-slate-500">|</span>
              <a className="hover:text-cyan-300" href="https://github.com/hulkbusterks" target="_blank" rel="noreferrer">github.com/hulkbusterks</a>
              <span className="text-slate-500">|</span>
              <a className="hover:text-cyan-300" href="https://www.linkedin.com/in/kritik-sharma-ai/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-200">
              <Pill>LangChain / LangGraph</Pill>
              <Pill>FastAPI</Pill>
              <Pill>RAG</Pill>
              <Pill>Python</Pill>
              <Pill>Go services</Pill>
              <Pill>LLM tool calling</Pill>
            </div>
          </div>
        </header>

        {/* About Me */}
        <Section title="About Me">
          <p className="text-slate-200 text-[15px] leading-relaxed bg-slate-900/50 border border-slate-800 rounded-xl p-5">
            {aboutMe}
          </p>
        </Section>

        
        {/* Skills */}
        <Section title="Skills">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-cyan-200 uppercase">Languages</h3>
              <p className="text-slate-200">Main: Python, Go</p>
              <p className="text-slate-400">Familiar: C, TypeScript, Java, C#</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-cyan-200 uppercase">Frameworks / Tools</h3>
              <p className="text-slate-200">FastAPI, LangChain, LangGraph, TensorFlow, Keras</p>
              <p className="text-slate-200">Docker, Git, Grafana</p>
              <p className="text-slate-200">Databases: MS SQL, PostgreSQL, MongoDB, SQLite, DynamoDB</p>
              <p className="text-slate-200">Vector stores: FAISS, Pinecone</p>
              <p className="text-slate-200">Frontend: React, React Router, HTML/CSS (basic)</p>
              <p className="text-slate-200">Cloud: AWS (Lambda, DynamoDB), Azure (VMs), DigitalOcean, GCP</p>
            </div>
          </div>
        </Section>

        {/* Featured Demo */}
        <Section title="Why Go? (Wasm performance demo)">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 shadow-lg shadow-slate-900/20 flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex-1 space-y-3">
              <p className="text-slate-100 font-semibold">Go vs Python, fully in-browser</p>
              <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                <li>Go compiled to WebAssembly (WASM) and Python running via Pyodide (CPython in WASM) on the same compute-heavy workload a simulation-style matrix multiplication using pure nested loops.</li>
                <li>Fair Comparison: Both languages run inside the same WASM sandbox, eliminating native OS advantages.</li>
                <li>Matrix multiplication is common in simulations, ML preprocessing, and numerical computing.</li>
                <li>Insight: Go’s compiled nature and lean runtime outperform Python’s interpreted execution—even when Python is embedded via Pyodide.</li>
              </ul>
              <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                <Pill>Go (Wasm)</Pill>
                <Pill>Pyodide</Pill>
                <Pill>Web Workers</Pill>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-4 py-2 rounded-lg border border-cyan-500 text-cyan-100 bg-cyan-500/10 hover:bg-cyan-500/20 transition"
                >
                  Open full demo
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-xl border border-slate-800 bg-black overflow-hidden aspect-video shadow-inner">
                <iframe
                  src={demoUrl}
                  title="Go vs Python Demo"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Section>


        {/* Experience */}
        <Section title="Experience">
          <div className="grid md:grid-cols-2 gap-5">
            {experience.map((job) => (
              <div key={job.role} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/30 transition transform">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <p className="font-semibold">{job.role}</p>
                  <p className="text-slate-400 text-xs">{job.time}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-full border border-slate-700 bg-slate-800/80 px-2 py-1 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/30 transition transform">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-cyan-200">{p.title}</h3>
                    <a className="text-xs text-slate-400 hover:text-cyan-200" href={p.link} target="_blank" rel="noreferrer">{p.link}</a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-full border border-slate-700 bg-slate-800/80 px-2 py-1 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Research */}
        <Section title="Research">
          <div className="grid md:grid-cols-2 gap-5">
            {research.map((paper) => (
              <div key={paper.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/30 transition transform">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <p className="text-sm font-semibold text-cyan-200">{paper.title}</p>
                    <p className="text-xs text-slate-400">{paper.year} · {paper.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {paper.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-full border border-slate-700 bg-slate-800/80 px-2 py-1 text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">{paper.summary}</p>
                {paper.link ? (
                  <div className="mt-3">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-cyan-500 text-cyan-100 bg-cyan-500/10 px-3 py-2 text-xs hover:bg-cyan-500/20 transition"
                    >
                      View paper
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        {/* Education & Certs */}
        <Section title="Education & Certifications">
          <div className="space-y-3">
            <div>
              <p className="font-semibold">GGSIP University — B.Tech AI & ML (2025)</p>
              <p className="text-slate-400 text-sm">GPA: 8.90</p>
            </div>
            <div>
              <p className="font-semibold">GCP Associate Data Engineer </p>
              <p className="text-slate-400 text-xs">Dec 2025 - Dec 2028</p>
              <BadgeEmbed />
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section title="Contact">
          <div className="flex flex-col gap-3 text-sm text-slate-200">
            <p>Focused on AI/ML systems (LangChain/LangGraph, RAG), REST APIs, and performance-minded services in Python/Go.</p>
            <LinkRow
              links={[
                { href: 'mailto:kritik.sharma00000@gmail.com', label: 'Email' },
                { href: 'https://github.com/hulkbusterks', label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/kritik-sharma-ai/', label: 'LinkedIn' },
              ]}
            />
          </div>
        </Section>

      </div>
    </main>
  )
}

export default App
