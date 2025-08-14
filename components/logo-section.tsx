"use client"
import { useState } from "react"
import type React from "react"

import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LogoSection() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null)

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setLogoUrl(url)
    }
  }

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <div className="relative group">
          {logoUrl ? (
            <img
              src={logoUrl || "/placeholder.svg"}
              alt="Custom Logo"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
            />
          ) : (
            <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-white">RS</span>
            </div>
          )}

          {/* Upload overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <label htmlFor="logo-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 text-white" />
              <input id="logo-upload" type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
            </label>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-blue-400">Hello Rajiv Shrestha</h1>
        <p className="text-2xl gray-400 mt-2">"आफ्नो रुचि आफै खोजौं।"</p>

        {/* {!logoUrl && (
          <Button
            variant="outline"
            className="mt-4 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
            onClick={() => document.getElementById("logo-upload")?.click()}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Your Logo
          </Button>
        )} */}
      </div>
    </section>
  )
}
