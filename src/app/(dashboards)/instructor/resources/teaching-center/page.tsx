
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, Film, Lightbulb, Mic, Target } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Planning Your Course",
    description: "Define your target audience and learning objectives to create a course that resonates.",
    category: "Course Creation",
    href: "#",
  },
  {
    icon: <Film className="h-6 w-6" />,
    title: "Filming Your Video",
    description: "Best practices for setting up your camera, lighting, and background for professional-quality video.",
    category: "Video & Audio",
    href: "#",
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Recording Clean Audio",
    description: "Learn how to choose the right microphone and recording environment to eliminate echo and background noise.",
    category: "Video & Audio",
    href: "#",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Engaging Your Students",
    description: "Techniques for creating interactive lectures, quizzes, and projects that keep students motivated.",
    category: "Teaching",
    href: "#",
  },
  {
    icon: <BookText className="h-6 w-6" />,
    title: "Creating Practice Activities",
    description: "Design effective exercises, case studies, and capstone projects that reinforce learning.",
    category: "Course Creation",
    href: "#",
  },
  {
    title: "Building Your Audience Before Launch",
    description: "Strategies for using social media and email lists to create buzz for your upcoming course.",
    category: "Marketing",
    href: "#",
    icon: <Users className="h-6 w-6" />,
  }
]

export default function TeachingCenterPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <BookText className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Teaching Center</h1>
      </div>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        A collection of articles, guides, and best practices to help you create, manage, and market a successful online course.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link href={article.href} key={article.title} className="block group">
            <Card className="h-full flex flex-col hover:border-primary transition-colors">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    {article.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{article.category}</p>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{article.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
