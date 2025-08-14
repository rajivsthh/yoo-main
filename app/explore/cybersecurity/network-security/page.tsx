import Link from "next/link"

export default function NetworkSecurityPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8 max-w-3xl mx-auto">
      <nav className="mb-8 flex gap-4">
        <Link href="/explore" className="text-blue-400 hover:underline">← Back to Explore</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Network Security: Start Demo</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What is Network Security?</h2>
        <p className="mb-4 text-gray-300">Network security involves protecting computer networks from intruders, whether targeted attackers or opportunistic malware. It includes firewalls, VPNs, encryption, and more.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Roadmap</h2>
        <ol className="list-decimal list-inside text-gray-200 space-y-1">
          <li>Understand basic networking concepts (IP, TCP/UDP, ports)</li>
          <li>Learn about firewalls and how they protect networks</li>
          <li>Explore VPNs and secure remote access</li>
          <li>Study wireless security and encryption</li>
          <li>Practice configuring network security tools</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Beginner Demos</h2>
        <ul className="space-y-4">
          <li className="bg-gray-800 p-4 rounded">
            <h3 className="font-bold text-lg">Firewall Demo</h3>
            <p className="text-gray-300">See how to set up a basic firewall and block unwanted traffic.</p>
          </li>
          <li className="bg-gray-800 p-4 rounded">
            <h3 className="font-bold text-lg">Wi-Fi Encryption Demo</h3>
            <p className="text-gray-300">Learn how to secure a wireless network using WPA2 encryption.</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
