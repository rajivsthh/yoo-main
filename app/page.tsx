"use client"
import { AuthDialog } from "@/components/auth-dialog"
import { ChatBot } from "@/components/chatbot"
import { LogoSection } from "@/components/logo-section"
import Link from "next/link"

export default function HomePage() {  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-gray-800">
        <div className="text-2xl font-bold text-blue-400">सिकNEPAL</div>
        <div className="flex items-center gap-6">
          <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
            Explore
          </Link>
          <a href="/mentor-marketplace.html" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            Mentor Marketplace
          </a>
          <a href="https://updatenewmew.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            Portfolio
          </a>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/vision" className="text-gray-300 hover:text-white transition-colors">
            Vision
          </Link>
          <AuthDialog />
        </div>
      </nav>

      <LogoSection />

      {/* Chatbot Section */}
      <section className="px-6 py-8 max-w-4xl mx-auto">
        <ChatBot />
      </section>
    </div>
  )
}
