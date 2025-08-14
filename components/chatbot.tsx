"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, Bot } from "lucide-react"

const careerAspirations = [
  "I want to be an artist",
  "I want to be a programmer",
  "I want to be a designer",
  "I want to be a game designer",
  "I want to be a musician",
  "I want to be an Ethical Hacker",
  "I want to be a Philosopher",
]

const availableCourses = {
  artist: ["Digital Art", "Painting", "Paper Art Craft"],
  programmer: ["Web Technology", "Programming Languages", "Game Creation"],
  designer: ["3D Modeling", "Architecture", "Digital Design"],
  "game designer": ["Game Creation", "3D Modeling", "Programming Languages"],
  musician: ["Composing", "Singing", "Music Writing"],
  "ethical hacker": ["Cybersecurity", "Programming Languages", "Web Technology"],
  philosopher: ["Literature", "Poetry", "Critical Thinking"],
}

export function ChatBot() {
  const [currentText, setCurrentText] = useState(0)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "bot"; content: string }>>([])
  const [isLoading, setIsLoading] = useState(false)

  // Loop through career aspirations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % careerAspirations.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const userMessage = message.trim()
    setMessage("")
    setChatHistory((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          availableCourses,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI response")
      }

      const data = await response.json()
      setChatHistory((prev) => [...prev, { role: "bot", content: data.message }])
    } catch (error) {
      // Fallback to rule-based responses
      const lowerMessage = userMessage.toLowerCase()
      let botResponse = ""

      const matchedCourses = Object.entries(availableCourses).find(
        ([career]) => lowerMessage.includes(career) || lowerMessage.includes(career.split(" ")[0]),
      )

      if (matchedCourses) {
        const [career, courses] = matchedCourses
        botResponse = `Great! We offer courses for aspiring ${career}s. Here are our available programs:\n\n${courses.map((course) => `• ${course}`).join("\n")}\n\nWould you like to explore any of these areas? Visit our Explore section to try interactive demos!`
      } else if (lowerMessage.includes("course") || lowerMessage.includes("learn") || lowerMessage.includes("study")) {
        botResponse = `We offer courses in these exciting fields:\n\n🎨 Art: Digital Art, Painting, Paper Art Craft\n💻 Technology: Web Development, Programming, Game Creation\n🎵 Music: Composing, Singing, Music Writing\n🔒 Cybersecurity: Ethical Hacking, Security\n🏗️ Design: 3D Modeling, Architecture\n📚 Literature: Poetry, Novels, Journalism\n\nWhat interests you most?`
      } else {
        botResponse = `Hello! I'm here to help you discover your career path. We offer hands-on demos and courses in various fields including art, programming, music, design, and more. What career are you interested in exploring?`
      }

      setChatHistory((prev) => [...prev, { role: "bot", content: botResponse }])
    }

    setIsLoading(false)
  }

  return (
    <Card className="bg-gray-800 border-gray-700 p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">AI Career Assistant</h3>
          <p className="text-sm text-gray-400">Ask me about our courses and career paths</p>
        </div>
      </div>

      {/* Looping Career Aspirations */}
      <div className="bg-gray-700 rounded-lg p-4 mb-6 text-center">
        <p className="text-blue-400 text-lg font-medium transition-all duration-500">
          {careerAspirations[currentText]}
        </p>
      </div>

      {/* Chat History */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                chat.role === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-100"
              }`}
            >
              <p className="text-sm whitespace-pre-line">{chat.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg">
              <p className="text-sm">Thinking...</p>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about careers, courses, or your interests..."
          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button onClick={handleSendMessage} className="bg-blue-500 hover:bg-blue-600" disabled={isLoading}>
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  )
}
