import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types"

export default (() => {
  const FoldNav: QuartzComponent = () => {
    return (
      <div class="fold-nav-wrap">
        <input type="checkbox" id="fold-nav-toggle" class="fold-nav-toggle" />
        <label for="fold-nav-toggle" class="fold-nav-button" aria-label="Menu">
          <span class="fold-nav-z">z</span>
        </label>
        <nav class="fold-nav-panel">
          <img src="./static/fold-nav-banana.png" class="fold-nav-banana" alt="" />
          <a href="./" class="fold-nav-link fold-nav-link-1">Home</a>
          <a href="./sources" class="fold-nav-link fold-nav-link-2">Sources</a>
          <a href="./ideas" class="fold-nav-link fold-nav-link-3">Ideas</a>
          <a href="./publications" class="fold-nav-link fold-nav-link-4">Publications</a>
          <a href="./bibliography" class="fold-nav-link fold-nav-link-5">Bibliography</a>
          <a href="./map" class="fold-nav-link fold-nav-link-6">Map</a>
          <a href="./about" class="fold-nav-link fold-nav-link-7">About</a>
        </nav>
      </div>
    )
  }
  return FoldNav
}) satisfies QuartzComponentConstructor
