import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const courses = [
  {
    id: '1',
    title: 'Advanced Kubernetes',
    description: 'Master advanced concepts of Kubernetes including networking, security, and scaling.',
    progress: 65,
    imageId: 'course-1',
  },
  {
    id: '2',
    title: 'Developing on Google Cloud',
    description: 'Learn to build and deploy applications on Google Cloud Platform using various services.',
    progress: 30,
    imageId: 'course-2',
  },
  {
    id: '3',
    title: 'Data Engineering on GCP',
    description: 'A deep dive into building data pipelines and processing big data on GCP.',
    progress: 80,
    imageId: 'course-3',
  },
  {
    id: '4',
    title: 'Cloud Architecture Design',
    description: 'Design and plan a cloud solution architecture. Learn about best practices and patterns.',
    progress: 15,
    imageId: 'course-4',
  },
];

export default function StudentPage() {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 font-headline">My Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course) => {
          const image = getImage(course.imageId);
          return (
            <Card key={course.id} className="flex flex-col">
              {image && (
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover aspect-[3/2] transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} aria-label={`${course.progress}% complete`} />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
