// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-jsx": preferDefault(require("/Users/wellhairy/Desktop/GitHub/site/src/pages/index.jsx")),
  "component---src-pages-my-files-jsx": preferDefault(require("/Users/wellhairy/Desktop/GitHub/site/src/pages/my-files.jsx"))
}

