// The portfolio moved to GitHub Pages (kashyap-001.github.io) because
// *.workers.dev is blocklisted by several large platforms — Gmail flagged a
// CV PDF containing the link as a virus, and LinkedIn refused to fetch it at
// all. This Worker no longer serves the site; it only forwards the old URL so
// links already out in the world (CV PDFs sent to recruiters, older profile
// links) keep working.
//
// 301 rather than 302: the move is permanent, and it tells search engines to
// transfer ranking to the new URL instead of treating the two as duplicates.

const TARGET = 'https://kashyap-001.github.io'

export default {
  fetch(request) {
    const { pathname, search } = new URL(request.url)
    return Response.redirect(TARGET + pathname + search, 301)
  },
}
