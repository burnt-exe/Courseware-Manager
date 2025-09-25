
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, MessageCircle, Search, Star, Users } from "lucide-react";
import Link from "next/link";

const discussions = [
  {
    title: "Best practices for student engagement?",
    author: "Jane Doe",
    replies: 12,
    lastReply: "2 hours ago",
    tags: ["Teaching", "Engagement"],
  },
  {
    title: "What's your go-to microphone for recording lectures?",
    author: "John Smith",
    replies: 28,
    lastReply: "5 hours ago",
    tags: ["Audio", "Equipment"],
  },
  {
    title: "Tips for marketing your first course?",
    author: "Alice Johnson",
    replies: 45,
    lastReply: "1 day ago",
    tags: ["Marketing", "Audience"],
  },
  {
    title: "Struggling with course structure. Any advice?",
    author: "Bob Williams",
    replies: 8,
    lastReply: "3 days ago",
    tags: ["Course Creation", "Planning"],
  }
]

export default function InstructorCommunityPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <Users className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Instructor Community</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
             <CardHeader>
               <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                 <Input placeholder="Search discussions..." className="pl-10" />
               </div>
             </CardHeader>
             <CardContent>
              <h2 className="text-xl font-bold mb-4">Recent Discussions</h2>
               <div className="space-y-4">
                 {discussions.map((d, i) => (
                   <div key={i} className="flex items-start justify-between p-3 rounded-lg hover:bg-muted">
                     <div>
                       <Link href="#" className="font-semibold text-accent hover:underline">{d.title}</Link>
                       <p className="text-sm text-muted-foreground">
                         Started by {d.author}
                       </p>
                       <div className="flex gap-2 mt-1">
                          {d.tags.map(tag => (
                            <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">{tag}</span>
                          ))}
                       </div>
                     </div>
                     <div className="text-right flex-shrink-0 ml-4">
                       <p className="text-sm font-medium flex items-center gap-1"><MessageCircle className="h-4 w-4" /> {d.replies}</p>
                       <p className="text-xs text-muted-foreground">{d.lastReply}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
           <Card>
                <CardHeader>
                    <CardTitle>Welcome to the Community!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Ask questions, share your experience, and connect with instructors from around the world.</p>
                    <Button className="w-full"><MessageCircle className="mr-2" /> Start a New Discussion</Button>
                </CardContent>
           </Card>
           <Card>
                <CardHeader>
                    <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p className="flex items-start gap-2"><Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" /> Be respectful and constructive.</p>
                    <p className="flex items-start gap-2"><Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" /> Share generously and help others.</p>
                    <p className="flex items-start gap-2"><Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" /> No spam or self-promotion outside of designated areas.</p>
                    <Button variant="link" className="p-0 h-auto">Read full guidelines</Button>
                </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
