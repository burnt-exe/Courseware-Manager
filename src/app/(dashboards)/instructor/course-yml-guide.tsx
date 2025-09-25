export function CourseYmlGuide() {
  const exampleCode = `code: WA1234`;
  const exampleName = `name: Introduction to AI/ML for Executives`;
  const exampleChapters = `
chapters:
  # Chapter in the course repository (directory format)
  - file: presentation/intro-to-react

  # Chapter in the course repository (file format)
  - file: presentation/advanced-react/advanced-react.adoc

  # Chapter in the shared repository (directory format)
  - repo: shared/modules/web
    file: html/accessible-html
`.trim();
  const exampleInstructor = `
instructor:
  - file: instructor/agenda.adoc
  - file: instructor/notes.adoc
`.trim();
  const exampleLabs = `
lab_guide:
  - file: supporting/labs/android-hello-world
  - file: supporting/labs/android-calculator-app
`.trim();
  const exampleSetup = `
setup_guide:
  - repo: shared/setup/mobile
    file: android/android-studio
  - file: supporting/setup/vscode-setup.adoc
  - repo: shared/setups/general
    file: summary
`.trim();

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-card-foreground/90">
      <p>
        The <code className="font-code text-xs">course.yml</code> file is the primary configuration file for a course. It contains
        metadata about the course, such as the course code, title, and contents.
      </p>
      <p>
        The file is written in YAML format and read by the build tools to generate the course content. It is located in the root directory of the course repository.
      </p>
      <h3 className="font-headline">Keys</h3>
      <p>The <code className="font-code text-xs">course.yml</code> file supports the following keys.</p>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Key</th>
            <th className="text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="font-code text-xs">code</code></td>
            <td>The course code.</td>
          </tr>
          <tr>
            <td><code className="font-code text-xs">name</code></td>
            <td>The course name.</td>
          </tr>
          <tr>
            <td><code className="font-code text-xs">chapters</code></td>
            <td>A list of chapters in the course, used for the presentation and lecture book.</td>
          </tr>
          <tr>
            <td><code className="font-code text-xs">labs</code></td>
            <td>A list of labs in the course.</td>
          </tr>
          <tr>
            <td><code className="font-code text-xs">setup_guide</code></td>
            <td>A list of setup instructions for the course.</td>
          </tr>
           <tr>
            <td><code className="font-code text-xs">software</code></td>
            <td>A list of software requirements for the course.</td>
          </tr>
          <tr>
            <td><code className="font-code text-xs">config</code></td>
            <td>A list of configuration options for the course build.</td>
          </tr>
        </tbody>
      </table>
      
      <h4 className="font-headline">code</h4>
      <p>The <code className="font-code text-xs">code</code> key specifies the course code, which is a unique identifier for the course. It is typically in the format WA####.</p>
      <p>Example Course Code</p>
      <pre><code className="font-code text-xs">{exampleCode}</code></pre>
      
      <h4 className="font-headline">name</h4>
      <p>The <code className="font-code text-xs">name</code> key specifies the course name, which is the title of the course. The course name is set by the courseware team and should not be changed without approval. The course name supports the use of special characters.</p>
      <p>Example Course Name</p>
      <pre><code className="font-code text-xs">{exampleName}</code></pre>

      <h4 className="font-headline">chapters</h4>
      <p>The <code className="font-code text-xs">chapters</code> key specifies a list of chapters/modules in the course. Each chapter is a separate directory in the course repository that contains the content for that chapter.</p>
      <p>Chapters can be stored in the course repository or in the shared group. The shared group contains separate repositories for shared content that is used across multiple courses.</p>
      <p>Each chapter directory should contain a file with the same name as the directory. For example, the <code className="font-code text-xs">intro-to-react</code> chapter should contain an <code className="font-code text-xs">intro-to-react.adoc</code> file. You may either specify the full path to the chapter file or simply the path to the chapter directory.</p>
      <p>Example Chapters</p>
      <pre><code className="font-code text-xs">{exampleChapters}</code></pre>

      <h4 className="font-headline">instructor</h4>
      <p>The <code className="font-code text-xs">instructor</code> key specifies the files that contain the instructor notes for the course. At a minimum, this should include the <code className="font-code text-xs">instructor/agenda.adoc</code> and <code className="font-code text-xs">instructor/notes.adoc</code> files. However, you can add additional files as needed.</p>
      <p>The <code className="font-code text-xs">instructor</code> key follows the same format as the <code className="font-code text-xs">chapters</code> key.</p>
      <p>Example Instructor Notes</p>
      <pre><code className="font-code text-xs">{exampleInstructor}</code></pre>

      <h4 className="font-headline">labs</h4>
      <p>The <code className="font-code text-xs">labs</code> key specifies a list of labs in the course. Each lab is a separate directory in the course repository that contains the lab content. The labs key follows the same format as the <code className="font-code text-xs">chapters</code> key.</p>
      <p>For legacy purposes <code className="font-code text-xs">lab_guide</code> is also supported as a key for labs.</p>
      <p>Example Labs</p>
      <pre><code className="font-code text-xs">{exampleLabs}</code></pre>

      <h4 className="font-headline">setup_guide</h4>
      <p>The <code className="font-code textxs">setup_guide</code> key specifies a list of setup instructions for the course. The setup instructions are stored in the <code className="font-code text-xs">supporting/setup</code> directory in the course repository. Some setup instructions may be shared across multiple courses and stored in the shared group. All setups should end with the summary setup.</p>
      <p>The <code className="font-code text-xs">setup_guide</code> key follows the same format as the <code className="font-code text-xs">chapters</code> key.</p>
      <p>Example Setup Guide</p>
      <pre><code className="font-code text-xs">{exampleSetup}</code></pre>

      <h4 className="font-headline">config</h4>
      <p>The <code className="font-code text-xs">config</code> key specifies a list of configuration options for the course build. The configuration options are used to customize the course content and build process. These options are set by the courseware team and should not be changed without approval.</p>
      <p>List of Configuration Options</p>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Option</th>
            <th className="text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="font-code text-xs">header_title</code></td>
            <td>The title of the course to use in the header.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
