
export function CompletingDevelopmentGuide() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-card-foreground/90">
      <h2 className="font-headline">Completing Development</h2>

      <h3 className="font-headline">Complete the setup guide</h3>
      <p>
        The setup guide is located in{' '}
        <code className="font-code text-xs">supporting/setup/setup-guide.adoc</code>. The
        courseware development team has dedicated personnel to help you with this. The
        setup guide should include all the information needed to set up the
        course environment. This includes any software, tools, or services that
        are required to complete the course. Contact the courseware development
        team if you need help with this.
      </p>

      <h3 className="font-headline">Complete the instructor agenda</h3>
      <p>
        The instructor agenda is located in{' '}
        <code className="font-code text-xs">instructor/agenda.adoc</code>. This
        document should include the suggested ordering of chapters and labs for
        each day.
      </p>

      <h3 className="font-headline">Complete the instructor notes</h3>
      <p>
        Add any notes or instructions for the course in{' '}
        <code className="font-code text-xs">instructor/notes.adoc</code>. These
        notes should include any additional information that instructors need to
        know to deliver the course effectively. This should be information that is
        relevant to the entirety of the course, not just a specific chapter or
        lab. Information that is specific to a chapter or lab should be
        included in the chapter or lab itself, using the notes block.
      </p>

      <h3 className="font-headline">Ensure course.yml is up to date</h3>
      <p>
        Update <code className="font-code text-xs">course.yml</code> to include
        all chapters and labs.
      </p>
      <ul>
        <li>
          Labs only need to be listed if the lab instructions are in Asciidoc. If
          the lab instructions are in a Jupyter notebook, you do not need to
          list the lab in <code className="font-code text-xs">course.yml</code> as
          the courseware tool chain will automatically include the files.
        </li>
      </ul>

      <h3 className="font-headline">Notify the courseware development team</h3>
      <p>If you have access to Monday.com:</p>
      <ul>
        <li>
          Update the status of the course development task from "In Development"
          to "Ready for QC".
        </li>
        <li>
          Review the QC Due Date and let us know if that date cannot be met.
        </li>
      </ul>
      <p>
        Otherwise, let the courseware development team know that you have
        completed development.
      </p>
    </div>
  );
}
