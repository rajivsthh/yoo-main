import { ExploreAndDemoSection } from "@/components/explore-and-demo-section"
import Link from "next/link"
import { AuthDialog } from "@/components/auth-dialog"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-gray-800">
        <div className="text-2xl font-bold text-blue-400">सिकNEPAL</div>
        <div className="flex items-center gap-6">
          <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
            Explore
          </Link>
          <Link href="/Mentor" className="text-gray-300 hover:text-white transition-colors">
            Mentor Marketplace
          </Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/vision" className="text-gray-300 hover:text-white transition-colors">
            Vision
          </Link>
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <AuthDialog />
        </div>
      </nav>

      {/* Explore Content */}
      <div className="px-6 py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Explore Interests with Demo</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          The only way to do great work is to love what you do.
        </p>
      </div>

      <ExploreAndDemoSection />
    </div>
  )
}
