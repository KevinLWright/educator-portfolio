# Kevin Wright — Early Childhood Educator

A responsive, accessible starter portfolio for ECDE 2100, organized around the six NAEYC Professional Standards for Early Childhood Educators.

## Publish with GitHub Pages

1. Sign in to GitHub and create a **public** repository, e.g. `educator-portfolio`.
2. Upload **the contents of this folder** (`index.html`, `portfolio-data.json`, `assets/`, `artifacts/`, etc.) to the repository root. Do not upload only the ZIP file.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
5. After deployment, visit `https://YOUR-USERNAME.github.io/educator-portfolio/`.

## Add assignments and justification statements

1. Export your assignment as a PDF. Remove student IDs and any identifiable information about children or families.
2. Put the PDF inside the `artifacts/` folder, for example `artifacts/infant-observation.pdf`.
3. Edit `portfolio-data.json`. Find the assignment by its `id` and set:
   - `file` to `artifacts/infant-observation.pdf`
   - `justification` to your own short statement showing how that assignment demonstrates the assigned standard.
4. Commit the changes. GitHub Pages will publish the updated site.

Example:

```json
{
  "id": "infant-observation",
  "title": "Infant Observation",
  "topic": "Observation",
  "date": "September 24",
  "standard": "3",
  "file": "artifacts/infant-observation.pdf",
  "justification": "This observation demonstrates how I use objective evidence of a child's behavior to compare developmental skills with age-related milestones."
}
```

The example justification above is only illustrative. Write your actual statements from your work and the assigned standard.

## Change the standard for an assignment

Edit its `standard` value in `portfolio-data.json` (a string from `"1"` through `"6"`). The card automatically moves to that standard. Every assignment should have a primary standard; the mapping in this starter is **provisional**, not prescribed by the instructor.

## Important notes

- This is a **starter**, not a completed portfolio. The 12 assignments and justifications are placeholders until you add them.
- The rubric requires 12 weekly writing artifacts, each with a justification statement, organized under standards. It lists 84 points for these and 12 for presentation, while stating a 100-point total; ask the instructor about the discrepancy if necessary.
- The rubric states **December 15, 2026 at 11:59 AM**, and references Niccolls Building 302B. Confirm how an electronic portfolio URL should be submitted.
- Standard descriptions here are **plain-language summaries**, not official NAEYC text. Verify or replace them with the official wording if your instructor expects that.
- The site is publicly accessible. **Never upload names, faces, student IDs, classroom records, or identifying details of children/families without proper authorization.**
- This site uses Google Fonts with browser fallbacks; if fonts cannot load, it remains usable.
- To preview locally with Python: run `python -m http.server 8000` from the folder and visit `http://localhost:8000`.
