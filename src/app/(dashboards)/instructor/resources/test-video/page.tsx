
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, Video } from "lucide-react";

export default function TestVideoPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <Video className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Test Video</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Get Feedback on Your Video and Audio</CardTitle>
          <CardDescription>
            Upload a 2-5 minute sample video to get free, personalized feedback on your video quality, audio quality, and delivery. Our team will review your submission and provide expert advice to help you create a professional and engaging course.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Submission Guidelines</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Your video should be between 2 and 5 minutes long.</li>
              <li>Use the same equipment and setup you plan to use for your course.</li>
              <li>Record in your actual teaching environment to get relevant feedback.</li>
              <li>The content can be a short excerpt from your planned course.</li>
            </ul>
          </div>
          <form className="space-y-4">
             <div>
                <label htmlFor="video-file" className="block text-sm font-medium mb-2">Upload your video file</label>
                <div className="flex items-center gap-4">
                    <Input id="video-file" type="file" className="flex-1" />
                    <Button variant="outline"><UploadCloud className="mr-2" /> Upload</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Accepted formats: .mp4, .mov, .avi. Max file size: 500MB.</p>
            </div>
            <div>
                <label htmlFor="video-link" className="block text-sm font-medium mb-2">Or paste a link to your video</label>
                <Input id="video-link" type="url" placeholder="https://www.youtube.com/watch?v=..." />
            </div>
             <div>
                <label htmlFor="comments" className="block text-sm font-medium mb-2">Specific Questions or Concerns</label>
                <Textarea id="comments" placeholder="Is my audio clear enough? Is the lighting okay? Let us know what you want feedback on." />
            </div>
            <Button type="submit" size="lg">Submit for Review</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
