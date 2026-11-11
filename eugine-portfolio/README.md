# Eugine Lucky | Portfolio

A responsive, static personal portfolio built with HTML, CSS and vanilla JavaScript. It is designed to work on GitHub Pages without a build step or backend.

## Files

```text
portfolio/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        ├── main.js
        ├── projects.js
        └── learning.js
```

## Before publishing

Search the project for these placeholders and replace them:

- `YOUR_EMAIL@example.com` in `index.html`
- `YOUR_LINKEDIN_URL` in `index.html`
- `YOUR_FACEBOOK_URL` in `index.html`

The GitHub profile and EduHub repository links are prefilled. Confirm the EduHub repository URL is correct before publishing.

## Update projects

Edit `assets/js/projects.js`. Add another object to `window.PORTFOLIO_PROJECTS`:

```js
{
  title: "Project name",
  description: "What the project does and what problem it solves.",
  status: "Completed", // or "In development"
  icon: "</>",
  technologies: ["HTML", "CSS", "JavaScript"],
  url: "https://github.com/your-username/project"
}
```

Use an empty string for `url` if there is no public link yet.

## Update learning topics

Edit `assets/js/learning.js`. Each entry has a title, a short description and a status. Keep statuses accurate, for example:

- Actively learning
- Applying in projects
- Exploring
- Planned

There are deliberately no fake progress percentages.

## Run locally

Open `index.html` in a browser. For a better development experience, use the VS Code Live Server extension.

## Publish with GitHub Pages

1. Push the files to the root of your `portfolio` repository.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your default branch (usually `main`) and the `/ (root)` folder.
6. Save and wait for GitHub Pages to publish.

Your expected URL will be:

`https://euginelucky204-debug.github.io/portfolio/`

It will only become live after Pages is enabled and the deployment completes.

## Notes

- No frameworks, build tools, database or API keys are required.
- The theme preference is saved in the browser's local storage.
- External Google Fonts are optional; system fallback fonts will be used if they cannot load.
