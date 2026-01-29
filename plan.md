# Angular Apprentice: Book Completion Plan

## Vision

| Aspect               | Decision                                           |
| -------------------- | -------------------------------------------------- |
| **Target Version**   | Angular 21.x (currently 21.1.2)                    |
| **Audience**         | HTML-literate beginners curious about Angular      |
| **Demo App**         | Ends-Well (TV series discovery)                    |
| **Tone**             | Short, practical, appetite-whetting—not exhaustive |
| **Estimated Length** | ~30-35K words                                      |

---

## Strategy: App First, Then Chapters

**Why app-first:**

1. Know exactly what code to teach—no guessing or revising later
2. The app becomes the "working reference" for each chapter
3. Easier to identify the natural teaching progression
4. Catch any Angular 21/22 breaking changes before writing prose

**Workflow:**

1. Finalize ends-well architecture and features (mock data)
2. Add TMDb API integration
3. Write chapters that walk through building it step-by-step
4. Each chapter's code should match a git commit/tag for readers

---

## Book Structure

### Part 1: Foundations (Chapters 1-7)

These are app-agnostic and mostly solid. Light updates needed.

| Chapter | File                                    | Status  | Work Needed                                 |
| ------- | --------------------------------------- | ------- | ------------------------------------------- |
| 01      | `01-Introduction.md`                    | ✅ Keep | Update version history for Angular 20/21/22 |
| 02      | `02-Typescript.md`                      | ✅ Keep | Minor review, already good                  |
| 03      | `03-Getting-Started.md`                 | ✅ Keep | Verify CLI commands for v21+                |
| 04      | `04-Gentle-Introduction-to-Angular-.md` | ✅ Keep | Good as-is                                  |
| 05      | `05-angular-cli.md`                     | ✅ Keep | Update any deprecated flags                 |
| 06      | `06-Your-First-Angular-App.md`          | ✅ Keep | Verify with latest CLI                      |
| 07      | `07-Project-Structure.md`               | ✅ Keep | Update for any v21 changes                  |

### Part 2: Building Ends-Well (Chapters 8-18)

**Complete rewrite** using the TV series app instead of A10Dance.

| Chapter | Topic                    | Key Concepts                                             |
| ------- | ------------------------ | -------------------------------------------------------- |
| 08      | Introducing Ends-Well    | App overview, what we'll build, design principles intro  |
| 09      | Creating the Project     | `ng new`, adding Material, theme selection, a11y intro   |
| 10      | The Home Page            | Hero section, featured shows, Material Cards             |
| 11      | Series List Page         | Grid layout, responsive cards, routing                   |
| 12      | Search & Filtering       | Form inputs, signals for reactive state                  |
| 13      | Sorting & Pagination     | Material Paginator, computed signals                     |
| 14      | Series Detail Page       | Route parameters, detail layout, metadata display        |
| 15      | User Ratings             | "Ended Well?" toggle, star ratings, RatingsService       |
| 16      | Persisting Data          | localStorage, loading/saving state, JSON serialization   |
| 17      | Services & Mock Data     | TvSeries interface, SeriesService, mock data             |
| 17a     | Getting a TMDb API Key   | Sign up at themoviedb.org, create API key, environment config |
| 18      | Connecting to TMDb       | HttpClient, Observable patterns, API integration, error handling |
| 19      | Navigation & Layout      | Toolbar, shared components, active routes                |

### Part 3: Finishing Touches (Chapters 20-21)

| Chapter | Topic               | Key Concepts                                     |
| ------- | ------------------- | ------------------------------------------------ |
| 20      | Form Validation     | Validators, error display, Material error states |
| 21      | Polish & Next Steps | Loading states, snackbars, where to learn more   |

### Appendix (Optional Bonus Content)

| Topic         | Source                        | Notes                               |
| ------------- | ----------------------------- | ----------------------------------- |
| Camera/WebRTC | `19-camera-implementation.md` | Optional bonus for advanced readers |

---

## Ends-Well App: Work Needed

The app is already in good shape (Angular 20, signals, Material). Here's what needs attention:

| Task                        | Priority | Notes                                                |
| --------------------------- | -------- | ---------------------------------------------------- |
| Upgrade to Angular 21+      | High     | When available, or note 20→21 path                   |
| Wire up TMDb API fully      | High     | Currently stubbed; needs API key config              |
| Simplify for teaching       | Medium   | Remove over-engineering, keep code beginner-readable |
| Add loading/error states    | Medium   | Good teaching moments                                |
| Ensure mock data fallback   | Medium   | For chapters before API integration                  |
| Create git tags per chapter | Low      | Nice-to-have for readers                             |

---

## Cleanup: Files and Folders to Remove

The following items are no longer needed and should be removed:

### Folders to Delete

| Folder             | Reason                                                     |
| ------------------ | ---------------------------------------------------------- |
| `a10dance/`        | Old demo app, replaced by ends-well                        |
| `a10dance-server/` | Backend for old demo app, no longer needed                 |
| `_rejected/`       | Contains rejected content (`naming-conventions-atomic.md`) |

### Chapter Files to Archive

Moved to `_archive/a10dance-chapters/` for reference when writing new chapters:

| File                                                        | Reference Value                         |
| ----------------------------------------------------------- | --------------------------------------- |
| `08-A10Dance--The-Demo-App.md`                              | App intro structure                     |
| `09-Creating-the-New-Project-.md`                           | Project setup patterns                  |
| `10-Modifying-the-Home-Page.md`                             | Home page with Material Cards           |
| `11-Custom-Students-Service.md`                             | Service patterns, Faker.js usage        |
| `12-Adding-the-Roster-Page.md`                              | List page setup                         |
| `13-Implementing-a-Student-Roster.md`                       | Material table, responsive patterns     |
| `14-Adding-Functionality-to-the-Student-Roster.md`          | CRUD, dialogs, snackbars                |
| `15-Adding-Student-Details.md`                              | Signals explanation                     |
| `16-Basic-Navigation-Menu.md`                               | Sidenav, toolbar, navigation            |
| `17-Adding-Page-Titles.md`                                  | Custom TitleStrategy                    |
| `18-Creating-the-Student-Details-Page.md`                   | Forms with Material                     |
| `20-roster-avatars.md`                                      | Avatar/image handling                   |

### Chapter Files to Remove

| File                           | Reason                                                      |
| ------------------------------ | ----------------------------------------------------------- |
| `chapters/01a-angular-20.md`   | Placeholder with no content; merge relevant notes into Ch 1 |

### Chapter Files to Relocate

| File                               | Destination  | Reason                 |
| ---------------------------------- | ------------ | ---------------------- |
| `chapters/19-camera-implementation.md` | `appendix/`  | Optional bonus content |

### Files to Keep in Place

| File                                           | Reason                                       |****
| ---------------------------------------------- | -------------------------------------------- |
| `chapters/19-Understanding-Form-Validators.md` | Content is app-agnostic, adapt for ends-well |

---

## Execution Phases

### Phase 1: Cleanup

- [x] Create this plan document
- [x] Remove deprecated folders (`a10dance/`, `a10dance-server/`, `_rejected/`)
- [x] Archive A10Dance chapter files (8-18, 20) to `_archive/a10dance-chapters/`
- [x] Move camera chapter to `appendix/`
- [x] Remove placeholder `01a-angular-20.md`

### Phase 2: App Prep

- [x] Audit ends-well for teachability
- [x] Fix duplicate components (app.component.ts vs app.ts, two series-list)
- [x] Standardize on @for/@if syntax (remove *ngFor/*ngIf)
- [x] Use zoneless change detection (default in Angular 21+, works seamlessly with signals)
- [x] Simplify TmdbService (removed custom createResource, use basic HttpClient)
- [x] Consolidate mock data into single file (data/mock-series.ts)
- [x] Update series-list component to use SeriesService
- [x] Ensure mock data works standalone (TypeScript compiles, requires Node.js v20.19+)
- [x] Complete TMDb API integration
- [x] Upgrade to Angular 21 (now on 21.1.2)

### Phase 3: Foundation Updates (Ch 1-7)

- [ ] Update Ch 1 with Angular 20/21/22 version history
- [ ] Review Ch 2 TypeScript content
- [ ] Verify all CLI commands in Ch 3, 5, 6
- [ ] Update Ch 7 for any v21 structural changes

### Phase 4: New Chapters (Ch 8-18)

- [ ] Write chapters in order, building the app progressively
- [ ] Each chapter = one logical feature
- [ ] Include complete code listings
- [ ] Match code to specific git commits/tags

### Phase 5: Final Chapters (Ch 19-20)

- [ ] Adapt form validation content for ends-well
- [ ] Write conclusion/next steps chapter

### Phase 6: Polish

- [ ] Consistent formatting across all chapters
- [ ] Code review all examples
- [ ] Final read-through for voice consistency
- [ ] Prepare appendix content

---

## Reader Code Strategy

**Approach:** Use git tags on the `ends-well/` folder so readers can follow along.

| Tag Format | Example | Description |
| --- | --- | --- |
| `chapter-XX-start` | `chapter-08-start` | State before chapter begins |
| `chapter-XX-end` | `chapter-08-end` | State after chapter is complete |

**Workflow for writing chapters:**
1. Checkout the current end state
2. Make incremental changes as described in the chapter
3. Tag the final state as `chapter-XX-end`
4. That becomes `chapter-(XX+1)-start`

**Alternative:** Could create a separate `ends-well-tutorial/` folder that starts empty and builds up chapter by chapter, keeping `ends-well/` as the finished reference. Decide based on complexity.

---

## Open Questions

- [ ] TMDb API key management: Should readers get their own key, or use a demo key?
- [ ] Angular 21 vs 22: Finalize target version when release dates are clearer
- [ ] Separate tutorial folder vs tags on existing folder?

---

## Sidebar Topics

Throughout the book, use info boxes/sidebars to explain important concepts without derailing the main flow. These are teaching moments that reinforce best practices.

| Topic | Where to Include | Key Points |
| --- | --- | --- |
| **Principle of Least Surprise** | Ch 8 (design decisions) | Users expect apps to behave like other apps they've used. Logo clicks to home, search icon means search, etc. Follow platform conventions—don't reinvent navigation. |
| **Why Signals?** | Ch 12 (first signal usage) | Brief comparison to BehaviorSubject/state management. Signals are simpler, synchronous, and integrate with zoneless. |
| **localStorage Limits** | Ch 16 (persistence) | ~5MB limit, synchronous API, JSON serialization. When to use vs IndexedDB or backend. |
| **Environment Files** | Ch 17a (API keys) | Never commit secrets. Use environment.local.ts pattern, .gitignore it. See "API Keys in Production" section below. |
| **Observable vs Signal** | Ch 18 (HttpClient) | HttpClient returns Observables. When to convert to signals vs use async pipe. |

---

## Accessibility (a11y) & WCAG

**Introduce in Chapter 9** with a brief section explaining:
- What accessibility means and why it matters (legal, ethical, practical)
- WCAG guidelines overview (Perceivable, Operable, Understandable, Robust)
- How Angular Material helps (built-in ARIA, focus management, keyboard support)

**Then reference throughout with callout boxes:**

| Chapter | a11y Callout | Key Point |
| --- | --- | --- |
| Ch 10 | Semantic HTML | Why we use `<a>` for navigation and `<button>` for actions, not `(click)` on `<div>`. Screen readers announce element roles. |
| Ch 11 | Image alt text | Card images need descriptive alt attributes. Decorative images get `alt=""`. |
| Ch 12 | Form labels | Every input needs a `<mat-label>`. Placeholders are not labels. |
| Ch 14 | Focus management | When navigating to detail page, consider where focus should land. |
| Ch 15 | Button states | Disabled buttons need `aria-disabled`. Toggle buttons need `aria-pressed`. |
| Ch 19 | Color contrast | Don't rely on color alone to convey meaning (error states, ratings). |

**Consistent pattern:** Each callout is a small info box titled "Accessibility Note" that explains the decision without interrupting the tutorial flow.

---

## API Keys in Production (Chapter 17a/18 Sidebar)

**Important security topic** to address when teaching API integration:

### The Problem

Angular apps compile to JavaScript that runs in the browser. Any API key in your source code (including `environment.ts`) ends up in the bundled JavaScript, visible to anyone who:
- Views page source
- Opens browser DevTools
- Inspects network requests

### Development vs Production

| Context | Approach | Risk Level |
| --- | --- | --- |
| **Local development** | Token in `environment.development.ts` (gitignored) | Low - only on your machine |
| **Tutorials/demos** | Rate-limited or free-tier API key | Medium - abuse limited |
| **Production apps** | Backend proxy or server-side calls | Required for security |

### Recommended Production Patterns

1. **Backend Proxy (Recommended)**
   - Frontend calls your own backend API
   - Backend adds the API key server-side
   - Key never leaves the server
   - Example: `/api/series/search?q=breaking` → backend calls TMDb with key

2. **Server-Side Rendering (SSR)**
   - Use Angular Universal or Analog
   - API calls happen on the server
   - Token stays server-side

3. **Serverless Functions**
   - Vercel/Netlify/AWS Lambda functions
   - Small backend that holds the key
   - Frontend calls the function

4. **OAuth/User Auth**
   - User authenticates with the API provider
   - User's own token is used
   - Not applicable for TMDb-style APIs

### What We'll Do in This Book

For learning purposes, we use the `environment.development.ts` approach with these safeguards:
- File is gitignored (never committed)
- Token only exists on developer's machine
- Clear warnings in the code about production use
- TMDb free tier has rate limits that reduce abuse impact

**Production Note:** If you deploy this app publicly, implement a backend proxy or use serverless functions to protect your API key.

---

## Notes

- Current word count: ~25K words (will change significantly with rewrite)
- Writing style: Conversational, tutorial-based, practical with info boxes/sidebars
- The ends-well app already uses modern patterns (signals, zoneless, standalone)
- Emphasize accessibility throughout—use semantic HTML elements
