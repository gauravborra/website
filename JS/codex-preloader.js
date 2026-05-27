(() => {
  const body = document.body;
  const preloader = document.getElementById('codex-preloader');
  const frame = document.querySelector('.portfolio-frame');
  const fallbackFadeDuration = 160;

  if (!preloader || !frame) {
    return;
  }

  preloader.style.cssText = 'position:fixed;inset:0;z-index:10000;display:grid;place-items:center;background:#0A0A0B;';

  function startSite() {
    if (!frame.src && frame.dataset.src) {
      frame.src = frame.dataset.src;
    }
  }

  function revealSite(fadeDuration = fallbackFadeDuration) {
    preloader.classList.add('codex-preloader--hidden');
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';

    window.setTimeout(() => {
      startSite();
      body.classList.remove('no-scroll');
      preloader.setAttribute('aria-hidden', 'true');
      preloader.style.visibility = 'hidden';
    }, fadeDuration);
  }

  function failOpen() {
    revealSite();
  }

  function runComponentScripts() {
    const scripts = Array.from(preloader.querySelectorAll('script'));

    scripts.forEach((script) => {
      const executableScript = document.createElement('script');

      Array.from(script.attributes).forEach((attribute) => {
        executableScript.setAttribute(attribute.name, attribute.value);
      });

      executableScript.textContent = script.textContent;
      script.replaceWith(executableScript);
    });
  }

  async function loadPreloader() {
    const componentPath = preloader.dataset.component;

    if (!componentPath) {
      failOpen();
      return;
    }

    try {
      const response = await fetch(componentPath, { cache: 'reload' });

      if (!response.ok) {
        throw new Error(`Unable to load preloader component: ${response.status}`);
      }

      preloader.innerHTML = await response.text();
      runComponentScripts();
    } catch (error) {
      console.warn(error);
      failOpen();
    }
  }

  loadPreloader();
})();
