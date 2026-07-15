import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types"

export default (() => {
  const FoldNav: QuartzComponent = () => {
    return (
      <div class="fold-nav-wrap">
        <input type="checkbox" id="fold-nav-toggle" class="fold-nav-toggle" />
        <label for="fold-nav-toggle" class="fold-nav-button" aria-label="Menu">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="4" y1="7" x2="20" y2="7"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="17" x2="20" y2="17"></line>
          </svg>
        </label>
        <nav class="fold-nav-panel">
          <a href="./">Home</a>
          <a href="./sources">Sources</a>
          <a href="./ideas">Ideas</a>
          <a href="./publications">Publications</a>
          <a href="./bibliography">Bibliography</a>
          <a href="./map">Map</a>
          <a href="./about">About</a>
        </nav>
      </div>
    )
  }
  return FoldNav
}) satisfies QuartzComponentConstructor