function importAll(r) {
  const fileRegex = new RegExp(/^pages\/articles\//);
  const keys = r.keys();
  const result = keys.filter((fileName) =>!fileRegex.test(fileName));

  return result.map((fileName) => { return {
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName)
  }});
}

export const posts = importAll(
  require.context("pages/articles", true, /\.mdx$/)
);
