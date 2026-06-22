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