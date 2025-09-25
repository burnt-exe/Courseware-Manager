
export function CourseRepositoryGuide() {
    return (
      <div className="prose prose-sm dark:prose-invert max-w-none text-card-foreground/90">
        <dl>
            <dt className="font-headline">instructor/</dt>
            <dd className="pl-4 mb-2">
                <p>Instructor notes and agenda</p>
            </dd>
            <dt className="font-headline">presentation/</dt>
            <dd className="pl-4 mb-2">
                <p>Chapter/module content</p>
            </dd>
            <dt className="font-headline">supporting/labs</dt>
            <dd className="pl-4 mb-2">
                <p>Lab content</p>
            </dd>
            <dt className="font-headline">supporting/resources</dt>
            <dd className="pl-4 mb-2">
                <p>Student resources</p>
            </dd>
            <dt className="font-headline">supporting/setup</dt>
            <dd className="pl-4 mb-2">
                <p>Setup instructions</p>
            </dd>
            <dt className="font-headline">course.yml</dt>
            <dd className="pl-4 mb-2">
                <p>Course configuration</p>
            </dd>
        </dl>
      </div>
    );
  }
  