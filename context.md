# Site Context

## Current Structure

- Main entry page: `index.html`
- Profile page wrappers: `profile.html` and `profile/index.html`
- Work page wrapper: `work/index.html`
- Main stylesheet: `CSS/main.css`
- New preloader loader script: `JS/codex-preloader.js`
- New preloader component: `components/codex-preloader.html`
- Old GIF loader asset: `Assets/loader.gif`

## Preloader Notes

There are two preloader systems in the repo:

1. Older text/GIF preloader:
   - Markup uses `#preload`, `#introtext`, and `.loader`.
   - Styles are in `CSS/main.css`, `CSS/main.scss`, `CSS/preload.css`, and `CSS/preload.scss`.
   - It is currently commented out on the wrapper pages.

2. New Codex preloader:
   - Wrapper markup is in `index.html`.
   - Component content is loaded from `components/codex-preloader.html`.
   - Loader behavior is handled by `JS/codex-preloader.js`.
   - `index.html` still includes `<script src="/JS/codex-preloader.js" defer></script>`.

## Current Home Page State

In `index.html`, the `#codex-preloader` markup is currently commented out.

The home iframe currently uses:

```html
data-src="https://gauravborra.framer.website"
```

That pattern expects the preloader script to eventually move `data-src` into `src`.

If the preloader is disabled, change it to:

```html
src="https://gauravborra.framer.website"
```

Otherwise the iframe may not load.

## How To Enable The New Preloader

Uncomment the `#codex-preloader` block in `index.html`:

```html
<div
  id="codex-preloader"
  data-component="/components/codex-preloader.html"
  aria-live="polite"
  aria-label="Loading portfolio"
></div>
```

Keep the home iframe using `data-src` so the preloader controls when the Framer site starts loading.

## How To Disable The Preloader

1. Keep the `#codex-preloader` block commented out or remove it.
2. Change the home iframe from `data-src` to `src`.
3. Remove `no-scroll` from the `<body>` if the page should be scrollable immediately.
4. Optionally remove or comment out `<script src="/JS/codex-preloader.js" defer></script>`.

## How To Replace The Preloader

The safest swap is to keep the same wrapper in `index.html` and point `data-component` to a new component:

```html
data-component="/components/my-preloader.html"
```

The replacement component should include its own HTML/CSS and should eventually add:

```js
preloader.classList.add('codex-preloader--hidden');
```

It should also ensure the iframe loads by assigning `frame.src = frame.dataset.src` if the iframe is still using `data-src`.
