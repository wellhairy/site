// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-jsx": () => import("/Users/wellhairy/Desktop/GitHub/site/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-my-files-jsx": () => import("/Users/wellhairy/Desktop/GitHub/site/src/pages/my-files.jsx" /* webpackChunkName: "component---src-pages-my-files-jsx" */)
}

exports.data = () => import("/Users/wellhairy/Desktop/GitHub/site/.cache/data.json")

