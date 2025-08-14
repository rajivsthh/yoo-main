"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronRight, Palette, Code, Megaphone, Box, Music, BookOpen, Play, Clock ,} from "lucide-react"
import { Shield, Laptop, HeartPulse, Atom } from "lucide-react"
import Link from "next/link"

interface Demo {
  title: string
  description: string
  duration: string
  difficulty: string
  link?: string // Added link property
}

interface Category {
  name: string
  icon: React.ReactNode
  subcategories: {
    name: string
    demos: Demo[]
  }[]
}

const categories: Category[] = [
  {
    name: "Art",
    icon: <Palette className="w-5 h-5" />,
    subcategories: [
      {
        name: "Digital Art",
        demos: [
          {
            title: "Start Demo",
            description: "Explore Digital Art demos and roadmap.",
            duration: "Beginner",
            difficulty: "Beginner",
            link: "/explore/art/digital-art"
          },
          {
            title: "Digital Portrait Basics",
            description: "Learn fundamental digital painting techniques using basic brushes and layers",
            duration: "15 min",
            difficulty: "Beginner",
          },
          {
            title: "Color Theory in Digital Art",
            description: "Understand how colors work together in digital artwork",
            duration: "20 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Painting",
        demos: [
          {
            title: "Start Demo",
            description: "Explore Painting demos and roadmap.",
            duration: "Beginner",
            difficulty: "Beginner",
            link: "/explore/art/painting"
          },
          {
            title: "Watercolor Basics",
            description: "Introduction to watercolor techniques and brush control",
            duration: "25 min",
            difficulty: "Beginner",
          },
          {
            title: "Acrylic Painting Fundamentals",
            description: "Learn basic acrylic painting methods and color mixing",
            duration: "30 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Paper Art Craft",
        demos: [
          {
            title: "Start Demo",
            description: "Explore Paper Art Craft demos and roadmap.",
            duration: "Beginner",
            difficulty: "Beginner",
            link: "/explore/art/paper-art-craft"
          },
          {
            title: "Origami Basics",
            description: "Create simple origami figures with step-by-step guidance",
            duration: "12 min",
            difficulty: "Beginner",
          },
          {
            title: "Paper Quilling Introduction",
            description: "Learn the art of rolling and shaping paper strips",
            duration: "18 min",
            difficulty: "Beginner",
          },
        ],
      },
    ],
  },
  {
    name: "Information Technologies",
    icon: <Code className="w-5 h-5" />,
    subcategories: [
      {
        name: "Web Technology",
        demos: [
          {
            title: "Start Demo",
            description: "Explore Web Technology demos and roadmap.",
            duration: "Beginner",
            difficulty: "Beginner",
            link: "/explore/information-technologies/web-technology"
          },
          {
            title: "HTML & CSS Basics",
            description: "Build your first webpage with HTML and style it with CSS",
            duration: "35 min",
            difficulty: "Beginner",
          },
          {
            title: "JavaScript Fundamentals",
            description: "Add interactivity to web pages with JavaScript",
            duration: "40 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Programming Language",
        demos: [
          {
            title: "Start Demo",
            description: "Explore Programming Language demos and roadmap.",
            duration: "Beginner",
            difficulty: "Beginner",
            link: "/explore/information-technologies/programming-language"
          },
          {
            title: "Python for Beginners",
            description: "Write your first Python program and understand basic syntax",
            duration: "30 min",
            difficulty: "Beginner",
          },
          {
            title: "Java Introduction",
            description: "Learn object-oriented programming concepts with Java",
            duration: "45 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Game Creation",
        demos: [
          {
            title: "Start Demo",
            description: "Explore Game Creation demos and roadmap.",
            duration: "Beginner",
            difficulty: "Beginner",
            link: "/explore/information-technologies/game-creation"
          },
          {
            title: "2D Game Design Basics",
            description: "Create a simple 2D game using visual programming tools",
            duration: "50 min",
            difficulty: "Beginner",
          },
          {
            title: "Game Story Development",
            description: "Learn how to create engaging storylines for games",
            duration: "25 min",
            difficulty: "Beginner",
          },
        ],
      },
    ],
  },
  {
    name: "Marketing",
    icon: <Megaphone className="w-5 h-5" />,
    subcategories: [
      {
        name: "Physical Marketing",
        demos: [
          {
            title: "Start Demo",
            description: "Explore Physical Marketing demos and roadmap.",
            duration: "Beginner",
            difficulty: "Beginner",
            link: "/explore/marketing/physical-marketing"
          },
          {
            title: "Event Planning Basics",
            description: "Learn how to organize and promote physical events",
            duration: "28 min",
            difficulty: "Beginner",
          },
          {
            title: "Print Advertisement Design",
            description: "Create effective flyers and posters for marketing campaigns",
            duration: "22 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Digital Marketing",
        demos: [
          {
            title: "Start Demo",
            description: "Explore Digital Marketing demos and roadmap.",
            duration: "Beginner",
            difficulty: "Beginner",
            link: "/explore/marketing/digital-marketing"
          },
          {
            title: "Social Media Strategy",
            description: "Develop a basic social media marketing plan",
            duration: "32 min",
            difficulty: "Beginner",
          },
          {
            title: "Email Marketing Fundamentals",
            description: "Create and send your first email marketing campaign",
            duration: "26 min",
            difficulty: "Beginner",
          },
        ],
      },
    ],
  },
  {
  name: "Cybersecurity",
  icon: <Shield className="w-5 h-5" />,
  subcategories: [
    {
      name: "Ethical Hacking",
      demos: [
        {
          title: "Introduction to Ethical Hacking",
          description: "Understand the basics of ethical hacking, rules, and responsibilities",
          duration: "30 min",
          difficulty: "Beginner",
        },
        {
          title: "Reconnaissance Techniques",
          description: "Learn how to gather information about a target ethically",
          duration: "40 min",
          difficulty: "Beginner",
        },
        {
          title: "Start Demo",
          description: "Explore Ethical Hacking demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/cybersecurity/ethical-hacking"
        },
      ],
    },
    {
      name: "Network Security",
      demos: [
        {
          title: "Basics of Network Security",
          description: "Understand firewalls, VPNs, and common security protocols",
          duration: "35 min",
          difficulty: "Beginner",
        },
        {
          title: "Wi-Fi Security & Encryption",
          description: "Learn how to secure wireless networks and prevent intrusions",
          duration: "45 min",
          difficulty: "Beginner",
        },
        {
          title: "Start Demo",
          description: "Explore Network Security demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/cybersecurity/network-security"
        },
      ],
    },
    {
      name: "Cyber Defense Skills",
      demos: [
        {
          title: "Phishing Attack Prevention",
          description: "Identify phishing attempts and protect yourself from scams",
          duration: "25 min",
          difficulty: "Beginner",
        },
        {
          title: "Incident Response Basics",
          description: "Learn what to do when a system is compromised",
          duration: "40 min",
          difficulty: "Beginner",
        },
        {
          title: "Start Demo",
          description: "Explore Cyber Defense Skills demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/cybersecurity/cyber-defense-skills"
        },
      ],
    },
  ],
},
{
  name: "Science & Research",
  icon: <Atom className="w-5 h-5" />,
  subcategories: [
    {
      name: "Everyday Science",
      demos: [
        {
          title: "Start Demo",
          description: "Explore Everyday Science demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/science-research/everyday-science"
        },
        {
          title: "Physics in Daily Life",
          description: "Discover how physics explains everyday phenomena like motion and energy",
          duration: "30 min",
          difficulty: "Beginner",
        },
        {
          title: "Fun Science Experiments",
          description: "Perform safe, simple experiments you can do at home",
          duration: "40 min",
          difficulty: "Beginner",
        },
      ],
    },
    {
      name: "Biology Basics",
      demos: [
        {
          title: "Start Demo",
          description: "Explore Biology Basics demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/science-research/biology-basics"
        },
        {
          title: "The Human Body 101",
          description: "Learn about major body systems and their functions",
          duration: "35 min",
          difficulty: "Beginner",
        },
        {
          title: "Introduction to Genetics",
          description: "Understand DNA, genes, and how traits are inherited",
          duration: "45 min",
          difficulty: "Beginner",
        },
      ],
    },
    {
      name: "Astronomy & Space",
      demos: [
        {
          title: "Start Demo",
          description: "Explore Astronomy & Space demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/science-research/astronomy-space"
        },
        {
          title: "The Solar System",
          description: "Explore planets, moons, and other celestial bodies",
          duration: "30 min",
          difficulty: "Beginner",
        },
        {
          title: "Space Exploration History",
          description: "Learn about major milestones in space missions",
          duration: "40 min",
          difficulty: "Beginner",
        },
      ],
    },
  ],
},
{
  name: "Life Skills",
  icon: <Clock className="w-5 h-5" />,
  subcategories: [
    {
      name: "Productivity & Time Management",
      demos: [
        {
          title: "Start Demo",
          description: "Explore Productivity & Time Management demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/life-skills/productivity-time-management"
        },
        {
          title: "Mastering Time Management",
          description: "Learn strategies to prioritize tasks and manage your day efficiently",
          duration: "30 min",
          difficulty: "Beginner",
        },
        {
          title: "Overcoming Procrastination",
          description: "Practical tips to stay motivated and productive",
          duration: "35 min",
          difficulty: "Beginner",
        },
      ],
    },
    {
      name: "Critical Thinking & Problem-Solving",
      demos: [
        {
          title: "Start Demo",
          description: "Explore Critical Thinking & Problem-Solving demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/life-skills/critical-thinking-problem-solving"
        },
        {
          title: "Logical Thinking Basics",
          description: "Understand the foundations of logical reasoning",
          duration: "25 min",
          difficulty: "Beginner",
        },
        {
          title: "Creative Problem-Solving",
          description: "Learn how to approach challenges with innovative solutions",
          duration: "40 min",
          difficulty: "Beginner",
        },
      ],
    },
    {
      name: "Health & Well-being",
      demos: [
        {
          title: "Start Demo",
          description: "Explore Health & Well-being demos and roadmap.",
          duration: "Beginner",
          difficulty: "Beginner",
          link: "/explore/life-skills/health-well-being"
        },
        {
          title: "Healthy Eating Habits",
          description: "Basics of nutrition and building balanced meals",
          duration: "30 min",
          difficulty: "Beginner",
        },
        {
          title: "Stress Management Techniques",
          description: "Simple ways to relax and improve mental health",
          duration: "35 min",
          difficulty: "Beginner",
        },
      ],
    },
  ],
}
,
  {
  name: "Learn Software",
  icon: <Laptop className="w-5 h-5" />,
  subcategories: [
    {
      name: "Blender",
      demos: [
        {
          title: "Blender Interface & Navigation",
          description: "Learn the UI, viewports, and essential shortcuts to move confidently in 3D space",
          duration: "30 min",
          difficulty: "Beginner",
        },
        {
          title: "Model & Render a Simple Object",
          description: "Create a low-poly mug, add materials, lighting, and render your first image",
          duration: "45 min",
          difficulty: "Beginner",
          link : "https://mewnew.vercel.app/"
        },
      ],
    },
    {
      name: "Photoshop",
      demos: [
        {
          title: "Photo Editing Fundamentals",
          description: "Use layers, adjustments, and selection tools to enhance a portrait",
          duration: "35 min",
          difficulty: "Beginner",
          link : "https://newmew1-rajivsth0713-9476s-projects.vercel.app/"
        },
        {
          title: "Social Media Post Design",
          description: "Combine text, shapes, and images to create a clean promo graphic",
          duration: "40 min",
          difficulty: "Beginner",
        },
      ],
    },
    {
      name: "Figma",
      demos: [
        {
          title: "Figma Basics: Frames & Auto Layout",
          description: "Build a responsive card component using frames, constraints, and auto layout",
          duration: "30 min",
          difficulty: "Beginner",
        },
        {
          title: "Mobile UI Prototype",
          description: "Design a simple login flow and add interactive prototyping links",
          duration: "35 min",
          difficulty: "Beginner",
        },
      ],
    },
  ],
},

  {
    name: "Music",
    icon: <Music className="w-5 h-5" />,
    subcategories: [
      {
        name: "Composing",
        demos: [
          {
            title: "Melody Creation Basics",
            description: "Learn how to create simple melodies using music theory",
            duration: "28 min",
            difficulty: "Beginner",
          },
          {
            title: "Rhythm and Beat Making",
            description: "Understand rhythm patterns and create your first beat",
            duration: "24 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Singing",
        demos: [
          {
            title: "Vocal Warm-up Techniques",
            description: "Learn proper vocal exercises and breathing techniques",
            duration: "15 min",
            difficulty: "Beginner",
          },
          {
            title: "Basic Pitch Training",
            description: "Develop your ear for pitch and improve vocal accuracy",
            duration: "22 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Writing",
        demos: [
          {
            title: "Songwriting Fundamentals",
            description: "Learn the basics of writing lyrics and song structure",
            duration: "30 min",
            difficulty: "Beginner",
          },
          {
            title: "Rhyme and Rhythm in Lyrics",
            description: "Master the art of creating catchy and meaningful lyrics",
            duration: "26 min",
            difficulty: "Beginner",
          },
        ],
      },
    ],
  },
  {
    name: "Literature",
    icon: <BookOpen className="w-5 h-5" />,
    subcategories: [
      {
        name: "Poetry",
        demos: [
          {
            title: "Poetry Writing Basics",
            description: "Learn different poetry forms and writing techniques",
            duration: "25 min",
            difficulty: "Beginner",
          },
          {
            title: "Metaphor and Imagery",
            description: "Use literary devices to enhance your poetry",
            duration: "20 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Novels",
        demos: [
          {
            title: "Character Development",
            description: "Create compelling characters for your stories",
            duration: "35 min",
            difficulty: "Beginner",
          },
          {
            title: "Plot Structure Basics",
            description: "Learn how to structure an engaging story plot",
            duration: "32 min",
            difficulty: "Beginner",
          },
        ],
      },
      {
        name: "Journalism",
        demos: [
          {
            title: "News Writing Fundamentals",
            description: "Learn how to write clear and engaging news articles",
            duration: "28 min",
            difficulty: "Beginner",
          },
          {
            title: "Interview Techniques",
            description: "Master the art of conducting effective interviews",
            duration: "24 min",
            difficulty: "Beginner",
          },
        ],
      },
    ],
  },
  {
    name: "Linux",
    icon: <Box className="w-5 h-5" />,
    subcategories: [
      {
        name: "Linux Basics",
        demos: [
          {
            title: "Getting Started with Linux",
            description: "Introduction to Linux operating system, its features, and how to get started.",
            duration: "30 min",
            difficulty: "Beginner",
            link: "/explore/linux-basics"
          },
          {
            title: "Linux File System and Commands",
            description: "Learn the basics of the Linux file system and essential commands for navigation and file management.",
            duration: "40 min",
            difficulty: "Beginner",
            link: "/explore/linux-basics"
          },
        ],
      },
      {
        name: "Shell Scripting",
        demos: [
          {
            title: "Introduction to Shell Scripting",
            description: "Learn the basics of writing shell scripts to automate tasks in Linux.",
            duration: "35 min",
            difficulty: "Beginner",
            link: "/explore/linux-basics"
          },
          {
            title: "Advanced Shell Scripting Techniques",
            description: "Dive deeper into shell scripting: functions, arrays, and error handling.",
            duration: "45 min",
            difficulty: "Beginner",
            link: "/explore/linux-basics"
          },
        ],
      },
      {
        name: "Linux Administration",
        demos: [
          {
            title: "Linux System Administration Basics",
            description: "Introduction to managing users, groups, and permissions in Linux.",
            duration: "30 min",
            difficulty: "Beginner",
            link: "/explore/linux-basics"
          },
          {
            title: "Network Configuration and Security",
            description: "Learn how to configure network settings and secure a Linux system.",
            duration: "40 min",
            difficulty: "Beginner",
            link: "/explore/linux-basics"
          },
        ],
      },
    ],
  },
]

export function ExploreAndDemoSection() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([])

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

  const toggleSubcategory = (subcategoryKey: string) => {
    setExpandedSubcategories((prev) =>
      prev.includes(subcategoryKey) ? prev.filter((key) => key !== subcategoryKey) : [...prev, subcategoryKey],
    )
  }

  const handleDemoClick = (demo: Demo, category: string, subcategory: string) => {
    if (demo.link) {
      // If demo has a link, navigate to the link
      window.location.href = demo.link
    } else {
      // Otherwise, show the demo details in an alert
      alert(
        `Starting demo: ${demo.title}\n\nCategory: ${category} > ${subcategory}\nDuration: ${demo.duration}\nLevel: ${demo.difficulty}\n\n${demo.description}`,
      )
    }
  }

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto bg-gray-800 rounded-lg mx-6 mb-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Explore Interests and Demo</h2>

      <p className="text-center text-gray-300 mb-8">
        Students led Education !!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="bg-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-400">{category.icon}</div>
                <span className="font-semibold">{category.name}</span>
              </div>
              {expandedCategories.includes(category.name) ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedCategories.includes(category.name) && (
              <div className="border-t border-gray-600">
                {category.subcategories.map((subcategory) => {
                  const subcategoryKey = `${category.name}-${subcategory.name}`
                  return (
                    <div key={subcategory.name}>
                      <button
                        onClick={() => toggleSubcategory(subcategoryKey)}
                        className="w-full text-left px-6 py-3 hover:bg-gray-600 transition-colors border-l-4 border-transparent text-gray-300 hover:text-white flex items-center justify-between"
                      >
                        <span className="font-medium">{subcategory.name}</span>
                        {expandedSubcategories.includes(subcategoryKey) ? (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                      </button>

                      {expandedSubcategories.includes(subcategoryKey) && (
                        <div className="bg-gray-800 border-l-4 border-blue-400">
                          {subcategory.demos.map((demo, index) => (
                            <div key={index} className="px-8 py-3 border-b border-gray-600 last:border-b-0">
                              <button
                                onClick={() => handleDemoClick(demo, category.name, subcategory.name)}
                                className="w-full text-left hover:bg-gray-700 p-3 rounded transition-colors group"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <Play className="w-4 h-4 text-blue-400" />
                                      <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                        {demo.title}
                                      </h4>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-2">{demo.description}</p>
                                    <div className="flex items-center gap-4 text-xs">
                                      <span className="flex items-center gap-1 text-blue-400">
                                        <Clock className="w-3 h-3" />
                                        {demo.duration}
                                      </span>
                                      <span className="bg-green-600 text-white px-2 py-1 rounded">
                                        {demo.difficulty}
                                      </span>
                                      {demo.link && (
                                        <Link href={demo.link} legacyBehavior>
                                          <a className="ml-2 px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                                            Start Demo
                                          </a>
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
