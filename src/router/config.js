
const routes = [];
const context = require.context("@/views", true, /\.vue$/, "lazy");
context.keys().forEach((path) => {
  // console.log('path', path)
  const componentName = path.replace(/.*\/([^\\.\\/]*)\.vue$/, "$1");
  routes.push({
    path: `/${componentName.toLowerCase()}/:id?`,
    name: componentName,
    component: () => context(path),
    meta: {
      isLink: true,
    },
  });
  // console.log('routes', routes)
});

export default routes;
