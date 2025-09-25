
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const categories = {
  "Development": [
    { name: "Web Development", sub: ["JavaScript", "React JS", "Angular", "Node.Js", "Next.js", "ASP.NET Core", "Typescript", "CSS"] },
    { name: "Data Science", sub: ["Python", "Machine Learning", "ChatGPT", "Deep Learning"] },
    { name: "Mobile Development", sub: ["Google Flutter", "React Native", "Dart (programming language)", "Android Development", "iOS Development", "Swift", "SwiftUI", "Kotlin", "Mobile App Development"] },
    { name: "Programming Languages", sub: [] },
    { name: "Game Development", sub: ["Unreal Engine", "Unity", "Game Development Fundamentals", "3D Game Development", "C# (programming language)", "Godot", "2D Game Development", "ROBLOX Game Development", "C++ (programming language)"] },
    { name: "Database Design & Development", sub: [] },
    { name: "Software Testing", sub: [] },
    { name: "Software Engineering", sub: [] },
    { name: "Software Development Tools", sub: [] },
    { name: "No-Code Development", sub: [] }
  ],
  "Business": [
    { name: "Entrepreneurship", sub: ["Business Fundamentals", "Entrepreneurship Fundamentals", "Truck Dispatching", "Freelancing", "Online Business", "Business Strategy", "Large Language Models (LLM)", "ChatGPT", "Business Plan"] },
    { name: "Communication", sub: ["Communication Skills", "Presentation Skills", "Public Speaking", "Writing", "PowerPoint"] },
    { name: "Management", sub: [] },
    { name: "Sales", sub: [] },
    { name: "Business Strategy", sub: [] },
    { name: "Operations", sub: [] },
    { name: "Project Management", sub: [] },
    { name: "Business Law", sub: [] },
    { name: "Business Analytics & Intelligence", sub: ["Microsoft Excel", "SQL", "Microsoft Power BI", "Data Analysis", "Business Analysis"] },
    { name: "Human Resources", sub: [] },
    { name: "Industry", sub: [] },
    { name: "E-Commerce", sub: [] },
    { name: "Media", sub: [] },
    { name: "Real Estate", sub: [] },
    { name: "Other Business", sub: [] }
  ],
  "Finance & Accounting": [
    { name: "Accounting & Bookkeeping", sub: [] },
    { name: "Compliance", sub: [] },
    { name: "Cryptocurrency & Blockchain", sub: [] },
    { name: "Economics", sub: [] },
    { name: "Finance", sub: ["Stock Options", "Financial Modeling", "Accounting", "Financial Accounting", "Fintech", "Finance Fundamentals", "Forex Trading"] },
    { name: "Finance Cert & Exam Prep", sub: [] },
    { name: "Financial Modeling & Analysis", sub: [] },
    { name: "Investing & Trading", sub: [] },
    { name: "Money Management Tools", sub: [] },
    { name: "Taxes", sub: [] },
    { name: "Other Finance & Accounting", sub: [] }
  ],
  "IT & Software": [
    { name: "IT Certifications", sub: ["AWS Certified Cloud Practitioner", "AWS Certified Solutions Architect - Associate", "CompTIA Security+", "CompTIA A+", "Amazon AWS", "Cisco Certified Network Associate (CCNA)", "CompTIA Network+", "Information Security", "AWS Certified AI Practitioner", "AZ-900: Microsoft Azure Fundamentals", "Kubernetes"] },
    { name: "Network & Security", sub: [] },
    { name: "Hardware", sub: [] },
    { name: "Operating Systems & Servers", sub: [] },
    { name: "Other IT & Software", sub: [] }
  ],
  "Office Productivity": [
    { name: "Microsoft", sub: [] },
    { name: "Apple", sub: [] },
    { name: "Google", sub: [] },
    { name: "SAP", sub: [] },
    { name: "Oracle", sub: [] },
    { name: "Other Office Productivity", sub: [] }
  ],
  "Personal Development": [
    { name: "Personal Transformation", sub: [] },
    { name: "Personal Productivity", sub: [] },
    { name: "Leadership", sub: [] },
    { name: "Career Development", sub: [] },
    { name: "Parenting & Relationships", sub: [] },
    { name: "Happiness", sub: [] },
    { name: "Esoteric Practices", sub: ["Life Coach Training", "Personal Development", "Neuro-Linguistic Programming (NLP)", "Personal Transformation", "Sound Therapy", "Coaching", "Manifestation and Law of Attraction", "Communication Skills", "Energy Healing"] },
    { name: "Religion & Spirituality", sub: [] },
    { name: "Personal Brand Building", sub: [] },
    { name: "Creativity", sub: [] },
    { name: "Influence", sub: [] },
    { name: "Self Esteem & Confidence", sub: [] },
    { name: "Stress Management", sub: [] },
    { name: "Memory & Study Skills", sub: [] },
    { name: "Motivation", sub: [] },
    { name: "Other Personal Development", sub: [] }
  ],
  "Design": [
    { name: "Web Design", sub: [] },
    { name: "Graphic Design & Illustration", sub: ["Graphic Design", "Drawing", "Adobe Photoshop", "Adobe Illustrator", "Canva Procreate", "Digital Illustration App", "Adobe InDesign", "Digital Painting", "Design Theory"] },
    { name: "Design Tools", sub: [] },
    { name: "User Experience Design", sub: [] },
    { name: "Game Design", sub: [] },
    { name: "3D & Animation", sub: [] },
    { name: "Fashion Design", sub: [] },
    { name: "Architectural Design", sub: [] },
    { name: "Interior Design", sub: [] },
    { name: "Other Design", sub: [] }
  ],
  "Marketing": [
    { name: "Digital Marketing", sub: ["Digital Marketing", "Social Media Marketing", "Marketing Strategy", "Internet Marketing", "ChatGPT", "Google Analytics", "Sales Funnel", "Copywriting", "Facebook Ads"] },
    { name: "Search Engine Optimization", sub: [] },
    { name: "Social Media Marketing", sub: [] },
    { name: "Branding", sub: [] },
    { name: "Marketing Fundamentals", sub: [] },
    { name: "Marketing Analytics & Automation", sub: [] },
    { name: "Public Relations", sub: [] },
    { name: "Paid Advertising", sub: [] },
    { name: "Video & Mobile Marketing", sub: [] },
    { name: "Content Marketing", sub: [] },
    { name: "Growth Hacking", sub: [] },
    { name: "Affiliate Marketing", sub: [] },
    { name: "Product Marketing", sub: [] },
    { name: "Other Marketing", sub: [] }
  ],
  "Lifestyle": [
    { name: "Arts & Crafts", sub: [] },
    { name: "Beauty & Makeup", sub: [] },
    { name: "Esoteric Practices", sub: [] },

    { name: "Food & Beverage", sub: [] },
    { name: "Gaming", sub: [] },
    { name: "Home Improvement & Gardening", sub: [] },
    { name: "Pet Care & Training", sub: [] },
    { name: "Travel", sub: [] },
    { name: "Other Lifestyle", sub: [] }
  ],
  "Photography & Video": [
    { name: "Digital Photography", sub: [] },
    { name: "Photography", sub: [] },
    { name: "Portrait Photography", sub: [] },
    { name: "Photography Tools", sub: [] },
    { name: "Commercial Photography", sub: [] },
    { name: "Video Design", sub: [] },
    { name: "Other Photography & Video", sub: [] }
  ],
  "Health & Fitness": [
    { name: "Fitness", sub: [] },
    { name: "General Health", sub: [] },
    { name: "Sports", sub: [] },
    { name: "Nutrition & Diet", sub: [] },
    { name: "Yoga", sub: [] },
    { name: "Mental Health", sub: [] },
    { name: "Martial Arts & Self Defense", sub: [] },
    { name: "Safety & First Aid", sub: [] },
    { name: "Dance", sub: [] },
    { name: "Meditation", sub: [] },
    { name: "Other Health & Fitness", sub: [] }
  ],
  "Music": [
    { name: "Instruments", sub: [] },
    { name: "Music Production", sub: [] },
    { name: "Music Fundamentals", sub: [] },
    { name: "Vocal", sub: [] },
    { name: "Music Techniques", sub: [] },
    { name: "Music Software", sub: [] },
    { name: "Other Music", sub: [] }
  ],
  "Teaching & Academics": [
    { name: "Engineering", sub: [] },
    { name: "Humanities", sub: [] },
    { name: "Math", sub: [] },
    { name: "Science", sub: [] },
    { name: "Online Education", sub: [] },
    { name: "Social Science", sub: [] },
    { name: "Language Learning", sub: [] },
    { name: "Teacher Training", sub: [] },
    { name: "Test Prep", sub: [] },
    { name: "Other Teaching & Academics", sub: [] }
  ]
};

export function DevelopmentTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([majorCategory, subCategories]) => (
            <div key={majorCategory} className="space-y-4">
              <h3 className="font-bold text-lg font-headline">{majorCategory}</h3>
              <ul className="space-y-2">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <Link href="#" className="text-sm text-accent hover:underline">{category.name}</Link>
                    {category.sub && category.sub.length > 0 && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {category.sub.map(subItem => (
                          <li key={subItem}>
                             <Link href="#" className="text-xs text-muted-foreground hover:underline">{subItem}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
