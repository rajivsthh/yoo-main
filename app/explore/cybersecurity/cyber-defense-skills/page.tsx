import Link from "next/link"

export default function CyberDefenseSkillsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8 max-w-3xl mx-auto">
      <nav className="mb-8 flex gap-4">
        <Link href="/explore" className="text-blue-400 hover:underline">← Back to Explore</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Cyber Defense Skills: Start Demo</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What are Cyber Defense Skills?</h2>
        <p className="mb-4 text-gray-300">Cyber defense skills help you detect, prevent, and respond to cyber threats. This includes identifying phishing, handling incidents, and protecting sensitive data.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Roadmap</h2>
        <ol className="list-decimal list-inside text-gray-200 space-y-1">
          <li>Learn about common cyber threats (phishing, malware, etc.)</li>
          <li>Understand how to recognize and report phishing attempts</li>
          <li>Study incident response steps</li>
          <li>Practice using security tools and reporting incidents</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Beginner Demos</h2>
        <ul className="space-y-4">
          <li className="bg-gray-800 p-4 rounded">
            <h3 className="font-bold text-lg">Phishing Detection Demo</h3>
            <p className="text-gray-300">Learn how to spot phishing emails and avoid scams.</p>
          </li>
          <li className="bg-gray-800 p-4 rounded">
            <h3 className="font-bold text-lg">Incident Response Demo</h3>
            <p className="text-gray-300">See what steps to take when a security incident occurs.</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
