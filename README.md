# AI Business Solutions — portfolio site

Static single-page site. No build step, no dependencies.

    index.html
    assets/
      style.css      layout + components
      fonts.css      @font-face (self-hosted Archivo + JetBrains Mono)
      app.js         hero call demo, work filter, hover preview, case modal
      fonts/         woff2 files
      img/           interface screenshots (webp)

## Local preview

    python3 -m http.server 8000

## Deploy (GitHub Pages)

Push to a repo, then Settings > Pages > Source: `main` / root.

## Editing

- Case content lives in the `D` array at the top of `assets/app.js`.
- Hero demo scripts live in the `SC` object in the same file.
- Contact address is the `mailto:` link in `index.html`.
