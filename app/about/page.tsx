"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useState } from "react"

// Simple admin check (replace with real auth in production)
const isAdmin = true // Set to false for non-admins

export default function AboutPage() {
  const [logo, setLogo] = useState<string | null>(null)

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setLogo(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          
       <div className="flex justify-end max-w-4xl mx-auto mb-8">
  <img
    src="logo.png"
    alt="Logo"
    className="w-32 h-auto opacity-80 object-contain transition-transform duration-300 hover:scale-110"
  />
</div>

        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
            Explore
          </Link>
          <Link href="/vision" className="text-gray-300 hover:text-white transition-colors">
            Vision
          </Link>
        </div>
      </nav>

      <div className="px-6 py-8 max-w-4xl mx-auto">
        {/* SEEKHNEPAL Logo and Description */}
        <div className="flex flex-col items-center mb-8">
          {logo ? (
            <img src={logo} alt="SEEKHNEPAL Logo" className="w-32 h-32 mb-4 rounded-full border-4 border-blue-400" />
          ) : (
            <img src="/placeholder-logo.png" alt="SEEKHNEPAL Logo" className="w-32 h-32 mb-4 rounded-full border-4 border-blue-400" />
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400">SEEKH NEPAL</h1>
          <p className="text-xl text-gray-300 mb-4 text-center">
            
            "आफ्नो रुचि आफै खोजौं।"
          </p>
          {/* Admin-only logo upload */}
          {isAdmin && (
            <div className="mb-4">
              <input type="file" accept="image/*" onChange={handleLogoUpload} className="block text-sm text-gray-300" />
            </div>
          )}
        </div>

        {/* Add other content below this line */}
        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-400">Get in touch with us</p>
              </div>
            </div>
            <p className="text-blue-400 font-medium">+977</p>
            <p className="text-blue-400 font-medium">+977</p>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-400">Send us a message</p>
              </div>
            </div>
            <p className="text-blue-400 font-medium">@seeknepal.com</p>
            <p className="text-blue-400 font-medium">@seeknepal.com</p>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-800 border-gray-700 p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Based in Nepal, serving students and professionals worldwide with career guidance and skill development
              programs.
            </p>
            <p className="text-blue-400 font-medium">Kathmandu, Nepal</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
