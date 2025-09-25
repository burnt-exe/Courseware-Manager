
export function SlideAnatomyGuide() {
  const sampleChapter = `
= Sample Chapter

[.objectives]
--
* Objectives for the chapter go in this list.
--


== Slide 1

Slide 1 content goes here

[.notes]
--
* Slide 1 notes go here
--


== Slide 2

Slide 2 content goes here

[.notes]
--
* Slide 2 notes go here
--
`.trim();

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-card-foreground/90">
        <p>
            Each chapter in a course represents a self-contained unit of content which is used for the lecture / instructional component of the course. Each chapter is made up of a number of slides, each of which can be used to present a different topic or concept. The slides are organized in a logical order, with each slide building on the previous one. In Asciidoc, chapters are represented by a single file with slides being the individual sections within the file.
        </p>
        <p>
            An example of a chapter with two slides is shown here:
        </p>
        <pre>
            <code className="font-code text-xs">
                {sampleChapter}
            </code>
        </pre>
        <p>
            The chapter template contains examples of many different slides. Use this as a reference when creating your own slides.
        </p>
    </div>
  );
}
