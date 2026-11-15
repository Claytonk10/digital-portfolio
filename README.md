# Digital Portfolio — GitHub Pages starter

This is a ready-to-publish **static** portfolio. No paid hosting, frameworks, installation, or command-line build is needed. The theme uses charcoal and gold/yellow accents to match the earlier Google Sites design.

## What's included

- 9 linked pages: Home, About Me, CV, Academic Journey, Group Work, Skills & Projects, Application Letter, Email Template and optional Study Tips.
- A responsive desktop/mobile menu, page layouts, readable text and print CSS.
- Buttons that point to documents stored **only in the client's Google Drive**.
- `print-portfolio.html` combines all site pages for printing a **single PDF** to submit (see step 5).

## 1. Upload everything to client's GitHub account

1. Create a [GitHub account](https://github.com/signup) for the appropriate site owner if needed.
2. On GitHub, choose **New repository**. Name it `digital-portfolio` (or another simple name), set **Public**, and create it. Github Pages on the Free plan needs a public repository. **Public means anyone can view code/content in the repo.**
3. Choose **Add file > Upload files**, and upload **all files and folders INSIDE** this starter folder. On some browsers, selecting everything includes the `assets` folder; if nested folders don't upload cleanly, use GitHub Desktop or the web file editor to add them. You can also upload a local directory using drag-and-drop on GitHub's upload page where supported.
4. Click **Commit changes**.
5. Choose repository **Settings > Pages > Build and deployment > Source: Deploy from a branch > Branch: main, /(root) > Save**.
6. After GitHub finishes publishing, the site will be at `https://USERNAME.github.io/digital-portfolio/` (replace USERNAME and repo name). GitHub Pages might take several minutes to appear.

**Alternative simplest root URL:** create repository `USERNAME.github.io`; the site URL becomes `https://USERNAME.github.io/`.

## 2. Put CV in Google Drive (central management)

1. Open **the client's** Google Drive and make a folder e.g. `Digital Portfolio Documents`.
2. Upload the final CV as a PDF, e.g. `Kimberly_Lekgetho_CV.pdf` (use only client-approved, public-safe content).
3. Right-click the PDF > **Share > General access > Anyone with the link > Viewer** > **Copy link > Done**.
4. In the GitHub repo, open `assets/site-config.js` > pencil/Edit. Paste the complete shared URL into the **cv** field, between the quotation marks, e.g.:

   `cv: "https://drive.google.com/file/d/EXAMPLE_FILE_ID/view?usp=sharing",`

5. Save/Commit. This updates **every CV button** on the site without editing the page HTML.
6. Repeat for the application letter, project evidence and optional resources.

**Drive download caveat:** The site's **Download CV** button uses a common Google Drive download endpoint for shared PDF files. Google may occasionally display a confirmation, authentication or preview page rather than immediately downloading. The **View CV in Drive** link is provided as a reliable fallback; in that view, users can click the Google Drive Download icon.

**Update the file without relinking it:** For existing uploaded PDF files, use Drive's **Manage versions > Upload new version** where available, rather than deleting and re-uploading the file. This keeps the same Drive file ID/share link. If you instead upload a new file, you must update `site-config.js`.

**Privacy:** Both the GitHub site and files set to Anyone with the link are accessible to others. Review all CV and hospital project details. Do not publish ID numbers, home address, confidential patient data, or private documents. Sharing a Drive file link may reveal the owner's name and email to visitors.

## 3. Edit the website content

Files are plain HTML and easy to update using GitHub's edit/pencil button. Open a file, change text between HTML tags, then **Commit changes**.

- `index.html`: welcome and profile summary.
- `about.html`: background and interests (personal draft included).
- `cv.html`: education, experience and skills; verify exact qualification and dates.
- `academic-journey.html`: **replace all [bracketed prompts]** with an authentic 300–600 word reflection.
- `group-work.html`: reflect honestly through Tuckman's Forming, Storming, Norming, Performing and Adjourning stages.
- `skills-projects.html`: add evidence for 2–3 genuine skills/projects; replace placeholder examples as needed.
- `application-letter.html`: tailor to a real organisation and remove all bracketed placeholders.
- `email-template.html`: polish the matching application email.
- `study-resources.html`: optional page.
- `assets/styles.css`: theme styling, fonts, colours; editing is optional.
- `assets/site-config.js`: **one place for ALL file/download URLs**.

All example text requires approval and factual verification before submission. No client private contact details are included by default.

## 4. Test the site

- Click every navigation item, including mobile **Menu** and **More**.
- Confirm the Drive CV file is shared as Viewer, and test both the **Download CV** and **View CV in Drive** buttons in a private/incognito window.
- Check all placeholder text is removed, reflections are authentic, projects have evidence and all page links work.
- Confirm mobile layout and spellcheck.

## 5. Submit a PDF of all site pages

1. Visit the published URL with `/print-portfolio.html` at the end, e.g. `https://USERNAME.github.io/digital-portfolio/print-portfolio.html`.
2. Click **Print / Save as PDF** (or press Ctrl+P), select **Save as PDF**, enable background graphics if desired, and save.
3. Review the PDF page-by-page. Linked Drive documents are **not embedded** in this export. The CV page has a typed summary; also provide a CV PDF separately if your lecturer specifically requires it.
4. Submit the published website URL and the PDF per your assignment's current submission instructions. The assignment's original stated date is in 2025; confirm the current deadline independently.

Tip: `print-portfolio.html` loads the other pages on the same website using `fetch()`. It must run from the published site or a local HTTP server; it will **not** load via double-clicking the file (`file://`).

## Quick troubleshooting

- **404:** Check GitHub Pages uses `main` and `/(root)`; ensure `index.html` is at the top level of the repo, not wrapped inside another folder.
- **Unstyled pages:** Check that `assets/styles.css`, `assets/script.js`, and `assets/site-config.js` are in a folder named exactly `assets`.
- **Download button says not linked:** Add the shared Drive link to `assets/site-config.js` and commit.
- **Drive prompts to request access:** Change Google Drive General access to **Anyone with the link > Viewer** (if the owner's organisation allows external sharing).
- **Download opens a viewer instead:** Use the separate **View CV in Drive** button, then click Download in Drive. Public-link download behavior is controlled by Google Drive, not GitHub Pages.
- **Private repo:** On GitHub Free, Pages requires a public repository; keep private/sensitive content out of the public site.

Sources: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site ; https://support.google.com/drive/answer/2494822
