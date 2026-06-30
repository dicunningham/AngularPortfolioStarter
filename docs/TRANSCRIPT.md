## Tutorial Reference

- **Playlist:** [Angular + Firebase Portfolio Tutorial Series](https://www.youtube.com/playlist?list=PLUyMmGjhpzR5EWy8syTZjD_YMBSdXYlgJ)
- **Starter Repo:** [miltonthefirst/portfolio-starter](https://github.com/miltonthefirst/portfolio-starter)

# Tech Exercise Part 3 — AI Conversation Transcript

## Q&A Log

**Q1: Where should I start building Tech Exercise Part 3, given my environment (Ubuntu 24.04, global Angular CLI 22, Node 24.16.0) with the tutorial targeting Angular 20?**

A: Generate the project with `npx @angular/cli@20 new portfolio` (pinning to Angular 20 via npx bypasses the global CLI 22). Choose SCSS, no SSR. Then verify `npm start` works, init Git, and add Bootstrap 5 via npm + `angular.json` entries. This is the correct starting point before touching any component code.

---

## Tutorial Notes

**Prompt used in tutorial to generate initial homepage HTML/CSS:**

> "I need a good homepage for my portfolio page using pure html and css. It should have a header, footer, and some necessary aspects."

*Generated using Google Gemini Canvas 3.1 Pro, free tier. The prompt was also extended to include Google Fonts for a modern look and Font Awesome for icons.*

**Q2: Where do ambient background glow elements belong in an Angular app?**

A: In `app.component.html` above all other components, since they are full-page decorative elements. Their CSS belongs in `styles.scss` (global) rather than any component stylesheet.

**Q3: Should component-level styles go in `styles.scss` or the component's own `.scss` file?**

A: Global styles (body, typography, ambient effects, CSS variables) go in `styles.scss`. Styles specific to a component's own template go in that component's `.scss` file. Google Fonts and Font Awesome `<link>` tags go in `src/index.html`.

## Tutorial Notes
**Prompt used to convert navigation to Bootstrap 5:**

> "Convert this [Header Code] to be compatible nav using bootstrap classes."

*Generated using Google Gemini. After the initial markup was created, I added custom styling to bring the original glassmorphism look—blur effects, rounded shapes, and gradient accents—into Bootstrap’s component system. I repeated the same adjustments across all portfolio pages to keep the design consistent.*

**Q4: What is the recommended way to generate a new component in Angular, and what files does it create?**

A: Use the Angular CLI command ng g c component-name (or ng generate component component-name). This generates four files by default: an HTML template (.component.html), a TypeScript class file (.component.ts), a stylesheet (.component.scss), and a testing file (.component.spec.ts).

**Q5: How do we handle navigation between different views/sections in a modern Angular single-page application?**

A: Instead of using standard HTML href attributes (which cause a full page reload), Angular uses its built-in router. You configure paths in app.routes.ts, add the <router-outlet></router-outlet> directive in your main app.component.html to act as a placeholder, and navigate between sections using the routerLink directive on your anchor tags.

**Q6: What are the best practices for naming, importing, and injecting a custom data service into a standalone component?**

A: The service class and file name should match Angular conventions (e.g., ConfigService in config.service.ts). When importing, ensure both the export class name and the relative file path are exact. For dependency injection in modern Angular, using the inject() function (config = inject(ConfigService);) is preferred over traditional constructor injection.

**Q7: How do you properly reference service properties inside a component's HTML template?**

A: Template expressions cannot directly access properties inside an injected service unless they are explicitly scoped. You must prefix the variables with the class property assigned to the service instance (e.g., using {{ config.myName }} instead of {{ myName }}).

**Q8: How does data binding work when we want to pass data from a TypeScript component file to its HTML template?**

A: Angular uses Interpolation and Property Binding to pass data down to the template. Interpolation uses double curly braces {{ variableName }} to render text dynamically. Property binding uses square brackets [property]="variableName" to bind a TypeScript variable to an HTML element property or component input.

**Q9: What is the purpose of the ngOnInit lifecycle hook in an Angular component?**

A: ngOnInit is a lifecycle hook that runs once after Angular has finished initializing the component's data-bound properties. It is the ideal place to handle initialization logic, such as fetching data from a service, rather than putting that logic inside the constructor.

**Q10: Why is my Firestore service failing to stream data even though my config looks right?**

A: The issue is an instance mismatch. While `provideFirestore()` is initialized in `app.config.ts`, the service isn't "seeing" that instance. We tried to force it by passing `getApp()` to the provider, but the real culprit is an environmental issue: a **version conflict** between `firebase@11` and `firebase@12` that causes the application to load two separate instances of the SDK.

**Q11: How do you diagnose a "Type does not match" error?**

A: The error message—*“Did you pass a reference from a different Firestore SDK?”*—is literal. By running `npm ls firebase`, we discover that two versions are bundled together. The app is trying to pass a Firestore object created by the v11 SDK into a function call being validated by the v12 SDK. Because the two versions use incompatible class definitions, the runtime check fails.

* **Resolution:** We align the entire project to `firebase@11.10.0` to match the `@angular/fire` peer dependencies.

**Q12: Why are my Font Awesome icons not showing up after moving to Firestore?**

A: This is a "side effect" of the dependency conflict. Because the build bundles are unstable, the Font Awesome Kit script fails to initialize correctly. Even after fixing the dependencies, the icons are being injected **asynchronously**—meaning they load *after* the page renders—so the Kit's auto-scanner doesn't see the new `<i>` elements.

* **Resolution:** 
    1. Clean the dependency tree (`rm -rf node_modules`).
    2. Update the HTML to use `[class]` binding for more reliable Angular-to-DOM class application.
    3. Add a manual DOM re-scan trigger to the component's `next` subscription to ensure icons are parsed immediately once the data arrives.

**Q13: What is the final process to get everything stable?**

A: 

* **Dependency Sync:** Hard-pin `firebase` to `11.10.0` in `package.json`.
* **Environment Purge:** Run `rm -rf node_modules package-lock.json` and `npm install` for a clean slate.
* **Cache Clearing:** Delete the `.angular` directory to force a fresh build of the service and component bundles.
* **Refactoring:** Convert the skills-page to use modern Angular `@for` blocks and clean `[class]` property bindings, ensuring the UI accurately reflects the real-time data stream.
