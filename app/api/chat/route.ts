import { generateText } from "ai"
import { google } from "@ai-sdk/google"

export async function POST(req: Request) {
  try {
    const { message, availableCourses } = await req.json()

    const { text } = await generateText({
      model: google("gemini-2.0-flash"),
      system: `You are a career guidance assistant for SeekhNepal, an educational platform. 
      
      Available courses: ${JSON.stringify(availableCourses)}
      
      Your role:
      1. Help users discover career paths
      2. Recommend relevant courses from our available programs
      3. Be encouraging and supportive
      4. Always mention our "Explore" section for hands-on demos
      5. Keep responses concise but helpful
      6. If a user asks about a career or interest that is not available in our courses, politely inform them and suggest they contact us via the About Us section email for further assistance or to request new topics.
      
      If users ask about careers we offer, match them to our available courses and encourage them to try our interactive demos.`,
      prompt: message,
    })

    return Response.json({ message: text })
  } catch (error) {
    console.error("AI Chat Error:", error)
    return Response.json({
      message:
        "I'm here to help you explore career opportunities at SeekhNepal! Try asking about our courses in Art, Programming, Music, or other fields. Check out our Explore section for hands-on demos!",
    })
  }
}
