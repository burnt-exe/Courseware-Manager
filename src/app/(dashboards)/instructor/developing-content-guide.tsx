export function DevelopingContentGuide() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-card-foreground/90">
      <h2 className="font-headline">Developing Content</h2>
      <p>
        Open the course repository in VS Code and work on the course content. The
        courseware tool chain will automatically build the course and make it
        available for review each time you commit and push your changes. Please
        use logical commit messages that describe the changes you made.
      </p>
      <p>
        Make sure to follow the courseware standards and guidelines when creating
        your course content. You can find detailed information on how to
        structure and write your course content in the courseware standards and
        guidelines.
      </p>

      <h3 className="font-headline">Review the Asciidoc Preview</h3>
      <p>
        Each time you commit and push your changes, the courseware tool chain will
        automatically build the course and make it available for review. You can
        view the Asciidoc preview from the course repository by doing the
        following:
      </p>
      <ol>
        <li>Open the course repository in GitLab.</li>
        <li>
          Navigate to <strong>Build &gt; Artifacts</strong> using the sidebar.
        </li>
        <li>
          Click the <strong>Browse</strong> link for the{' '}
          <strong>Asciidoc-Preview</strong> job.
        </li>
      </ol>

      <h3 className="font-headline">Important Standards</h3>
      <p>
        The complete courseware standards and guidelines can be found in the
        courseware standards and guidelines. Here are a few key points to keep in
        mind:
      </p>
      <ul>
        <li>
          Each chapter and lab should be standalone and self-contained. This
          means:
          <ul>
            <li>Do not reference labs from chapters.</li>
            <li>Do not reference chapters from labs.</li>
            <li>Do not reference labs from other labs.</li>
            <li>Do not reference chapters from other chapters.</li>
          </ul>
        </li>
        <li>Do not include course codes or titles in the content.</li>
        <li>
          Each chapter must be in its own folder with its own subfolder of
          assets. For instance:
          <pre>
            <code className="font-code text-xs">
{`presentations/my-chapter/
    assets/
        openai-logo.svg
    code/
        api-access.py
    my-chapter.adoc`}
            </code>
          </pre>
        </li>
        <li>
          Each lab must be in its own folder with its own subfolder of assets.
          Solutions are included in a separate subfolder. For instance:
          <pre>
            <code className="font-code text-xs">
{`supporting/
    labs/
    my-lab/
        files/
        assets/
            image-for-notebook.png
        solutions/
            api-access.ipynb
        api-access.ipynb
        data.csv
        assets/
        image-for-adoc.svg
        my-lab.adoc`}
            </code>
          </pre>
        </li>
        <li>
          Do not include numbers in the folder or file names. The courseware tool
          chain will automatically number the chapters and labs for you.
        </li>
        <li>
          Commit and push your changes to the repository frequently. Each time you
          do, the courseware tool chain will automatically build the course and
          make it available for review. Please use logical commit messages that
          describe the changes you made.
        </li>
      </ul>
      <p>
        We recommend you commit and push your changes at least once a day. This
        will help you avoid losing your work if something goes wrong!
      </p>
    </div>
  );
}
