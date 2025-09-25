
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HelpCircle, LifeBuoy, MessageSquare, Search } from "lucide-react";

const faqs = [
    {
        question: "How do I get paid?",
        answer: "Payouts are made monthly via PayPal or Payoneer. You can set up your payment method in the 'Payout Settings' section of your profile."
    },
    {
        question: "What are the minimum requirements for a course?",
        answer: "Your course must have at least 30 minutes of video content and 5 lectures. All content must adhere to our quality standards and community guidelines."
    },
    {
        question: "Can I use copyrighted material in my course?",
        answer: "No, you must own the copyright or have explicit permission to use any material in your course, including images, music, and code."
    },
    {
        question: "How does the review process work?",
        answer: "Once you submit your course, our review team will check it against our quality standards. This process typically takes 2-3 business days. You will be notified via email of the outcome."
    }
]

export default function HelpAndSupportPage() {
  return (
    <div className="container py-8">
       <div className="flex items-center gap-4 mb-6">
        <HelpCircle className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Help and Support</h1>
      </div>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Find answers to your questions, browse our knowledge base, or contact our dedicated support team.
      </p>

      <Card className="mb-8">
        <CardContent className="p-6">
            <div className="flex gap-2">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search for articles and answers..." className="pl-10" />
                </div>
                <Button>Search</Button>
            </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map(faq => (
                    <Card key={faq.question}>
                        <CardHeader>
                            <CardTitle className="text-lg">{faq.question}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Can't Find an Answer?</CardTitle>
                    <CardDescription>Our support team is here to help you 24/7.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button className="w-full justify-start gap-2" variant="outline">
                        <MessageSquare className="h-5 w-5" />
                        Live Chat
                    </Button>
                     <Button className="w-full justify-start gap-2" variant="outline">
                        <LifeBuoy className="h-5 w-5" />
                        Submit a Support Ticket
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>

    </div>
  )
}
