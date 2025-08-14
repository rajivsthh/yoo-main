import Link from "next/link"

export default function EthicalHackingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8 max-w-3xl mx-auto">
      <nav className="mb-8 flex gap-4">
        <Link href="/explore" className="text-blue-400 hover:underline">← Back to Explore</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Ethical Hacking Roadmap & Demos</h1>
      <p className="mb-6 text-gray-300">Start your journey in ethical hacking with these beginner-friendly demos and a step-by-step roadmap.</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Roadmap</h2>
        <ol className="list-decimal list-inside text-gray-200 space-y-1">
          <li>Learn basic networking concepts</li>
          <li>Understand security fundamentals and ethics</li>
          <li>Set up a virtual lab (Kali Linux, VirtualBox)</li>
          <li>Practice reconnaissance and information gathering</li>
          <li>Explore vulnerability scanning and exploitation basics</li>
          <li>Study reporting and responsible disclosure</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Demos</h2>
        <ul className="space-y-4">
          <li className="bg-gray-800 p-4 rounded">
            <h3 className="font-bold text-lg">Introduction to Ethical Hacking</h3>
            <p className="text-gray-300">Understand the basics of ethical hacking, rules, and responsibilities.</p>
          </li>
          <li className="bg-gray-800 p-4 rounded">
            <h3 className="font-bold text-lg">Reconnaissance Techniques</h3>
            <p className="text-gray-300">Learn how to gather information about a target ethically.</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
