import Link from "next/link"

export default function LinuxBasicsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8 max-w-3xl mx-auto">
      <nav className="mb-8 flex gap-4">
        <Link href="/explore" className="text-blue-400 hover:underline">← Back to Explore</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Linux Basics Demo</h1>
      <p className="mb-6 text-gray-300">Get started with Linux! This demo covers the most essential commands and concepts for beginners.</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What You'll Learn</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>What is Linux and why use it?</li>
          <li>How to open and use the terminal</li>
          <li>Basic navigation: <code>ls</code>, <code>cd</code>, <code>pwd</code></li>
          <li>File management: <code>touch</code>, <code>mkdir</code>, <code>rm</code>, <code>cp</code>, <code>mv</code></li>
          <li>Viewing files: <code>cat</code>, <code>less</code>, <code>head</code>, <code>tail</code></li>
          <li>Getting help: <code>man</code>, <code>--help</code></li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Quick Demo</h2>
        <div className="bg-gray-800 p-4 rounded mb-4">
          <p className="mb-2 text-blue-300 font-mono">$ pwd</p>
          <p className="mb-2 text-gray-300">Shows your current directory</p>
          <p className="mb-2 text-blue-300 font-mono">$ ls</p>
          <p className="mb-2 text-gray-300">Lists files and folders</p>
          <p className="mb-2 text-blue-300 font-mono">$ cd Documents</p>
          <p className="mb-2 text-gray-300">Moves into the Documents folder</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <p className="mb-2 text-blue-300 font-mono">$ touch hello.txt</p>
          <p className="mb-2 text-gray-300">Creates a new file called hello.txt</p>
          <p className="mb-2 text-blue-300 font-mono">$ mkdir myfolder</p>
          <p className="mb-2 text-gray-300">Creates a new directory called myfolder</p>
        </div>
      </section>
    </div>
  )
}
