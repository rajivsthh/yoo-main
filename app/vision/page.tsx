import Link from "next/link"

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          SeekNepal
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
        </div>
      </nav>

      {/* Vision Content */}
      <div className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h1>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p>
            To empower every individual in Nepal to discover their true potential and pursue their dream career through
            innovative, hands-on learning experiences.
          </p>

          <p>
            We believe that everyone deserves the opportunity to explore different career paths before making
            life-changing decisions. Our platform bridges the gap between curiosity and career clarity.
          </p>

          <p>
            By providing interactive demos and real-world simulations, we help people make informed choices about their
            future, reducing career uncertainty and increasing professional satisfaction.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-colors"
          >
            Explore Our Programs
          </Link>
        </div>
      </div>
    </div>
  )
}
