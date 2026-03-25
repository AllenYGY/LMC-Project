# Cinema and Digital Change

A Vue 3 + Vite single-page presentation site about how digital technology reshapes the cinema business.

The page is designed for class presentation and project submission. It covers:

- audience data and precision scheduling
- digital film production and virtual workflows
- AI copyright infringement and digital clones
- streaming disruption and the decline of theatrical exclusivity

## Tech Stack

- Vue 3
- Vite
- TypeScript
- Local image assets and locally bundled fonts

## Local Development

If you use `nvm`, the project already includes an [.nvmrc](.nvmrc) file.

```bash
source ~/.nvm/nvm.sh
nvm use
npm ci
npm run dev
```

Open the local Vite URL shown in the terminal.

## Build

```bash
source ~/.nvm/nvm.sh
nvm use
npm run build
```

The production build is generated in [dist](dist).

To preview the build locally:

```bash
npm run preview
```

## Project Structure

- [src/App.vue](src/App.vue): main page layout, sticky side navigation, and section flow
- [src/content/pageContent.ts](src/content/pageContent.ts): all page copy, section data, and source links
- [src/components](src/components): reusable Vue components
- [src/style.css](src/style.css): global visual system and responsive layout
- [images](images): local image assets and SVG illustrations
- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml): GitHub Pages deployment workflow

## Editing Content

To update the actual presentation content, edit:

- [src/content/pageContent.ts](src/content/pageContent.ts)

To adjust layout, colors, spacing, or typography, edit:

- [src/style.css](src/style.css)

To replace or add images, update:

- [images](images)

## GitHub Pages Deployment

This project is configured to deploy with GitHub Actions.

Workflow file:

- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

The workflow runs on pushes to `main` or `master` and publishes the built `dist` folder.

Before the first successful deployment, make sure the repository is configured correctly on GitHub:

1. Open the repository on GitHub.
2. Go to `Settings > Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` or re-run the workflow from the `Actions` tab.

If GitHub Actions shows an error from `actions/configure-pages`, it usually means Pages has not been enabled yet in the repository settings.

## Notes

- The site uses a relative Vite base path, so it is suitable for static hosting.
- The content is written in English for presentation use.
- Source links and image credits are included directly in the page data.
