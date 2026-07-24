import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"

export default (() => {
  const FoldNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    // FoldNav renders on every page type at every depth (homepage at
    // "index", static pages at "about", note pages at "sources/some-note",
    // kind/mode/grid pages at "kind/xyz" etc.) — a single hardcoded "./"
    // only ever resolves correctly at the root. This computes how many
    // "../" hops are needed to get back to root from wherever this page
    // actually lives, same idea as the "../" already used by hand in
    // KindModeContent.tsx and NoteHeader.tsx, just derived instead of
    // fixed, so it's correct at every depth automatically.
    const slug = fileData.slug ?? ""
    const depth = slug.split("/").length - 1
    const prefix = depth > 0 ? "../".repeat(depth) : "./"

    return (
      <div class="fold-nav-wrap">
        <input type="checkbox" id="fold-nav-toggle" class="fold-nav-toggle" />
        <label for="fold-nav-toggle" class="fold-nav-button" aria-label="Menu">
          <span class="fold-nav-z">z</span>
        </label>
        <nav class="fold-nav-panel">
          <img src={`${prefix}static/fold-nav-banana.png`} class="fold-nav-banana" alt="" />
          <a href={prefix} class="fold-nav-link fold-nav-link-1">Home</a>
          <a href={`${prefix}sources`} class="fold-nav-link fold-nav-link-2">Sources</a>
          <a href={`${prefix}ideas`} class="fold-nav-link fold-nav-link-3">Ideas</a>
          <a href={`${prefix}publications`} class="fold-nav-link fold-nav-link-4">Publications</a>
          <a href={`${prefix}bibliography`} class="fold-nav-link fold-nav-link-5">Bibliography</a>
          <a href={`${prefix}map`} class="fold-nav-link fold-nav-link-6">Map</a>
          <a href={`${prefix}about`} class="fold-nav-link fold-nav-link-7">About</a>
        </nav>
      </div>
    )
  }
  return FoldNav
}) satisfies QuartzComponentConstructor
