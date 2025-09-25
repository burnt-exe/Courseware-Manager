
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BarChart, BarChart2, DollarSign, Search, TrendingDown, TrendingUp, Users } from "lucide-react";

const trendingTopics = [
    { name: "AI Agent Development", trend: <TrendingUp className="text-success" /> },
    { name: "Next.js 15", trend: <TrendingUp className="text-success" /> },
    { name: "React Native Advanced", trend: <TrendingUp className="text-success" /> },
    { name: "Angular Basics", trend: <TrendingDown className="text-destructive" /> },
]

export default function MarketplaceInsightsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <BarChart2 className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Marketplace Insights</h1>
      </div>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Validate your course topic ideas by exploring student demand and marketplace trends. See what's popular, what's missing, and where you can make an impact.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Topic Search Tool</CardTitle>
          <CardDescription>Enter a topic to see its demand, existing competition, and average monthly revenue.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex gap-2">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="e.g., 'Python for Data Science'" className="pl-10" />
                </div>
                <Button>Search Topics</Button>
            </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                    Student Demand
                    <Users className="h-5 w-5 text-muted-foreground" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold">High</p>
                <p className="text-sm text-muted-foreground">for 'Python for Data Science'</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                    Number of Courses
                    <BarChart className="h-5 w-5 text-muted-foreground" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold">High</p>
                <p className="text-sm text-muted-foreground">High competition</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                    Top Monthly Revenue
                     <DollarSign className="h-5 w-5 text-muted-foreground" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold">$15,000</p>
                <p className="text-sm text-muted-foreground">Opportunity exists for high-quality content</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Trending Topics</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm">
                    {trendingTopics.map(topic => (
                        <li key={topic.name} className="flex items-center justify-between">
                            <span>{topic.name}</span>
                            {topic.trend}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      </div>

    </div>
  )
}
