// Root-relative URL for a file in public/, under the site's basePath.
// next/image (unoptimized) and plain <img> do not add basePath to string srcs, and the './assets/...' paths in
// data.ts only resolve from the home page; this works from any route. Next defines __NEXT_ROUTER_BASEPATH at build
// time from the basePath that actions/configure-pages injects in CI; locally it is unset ('').
export function asset(path: string): string {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH ?? '';
  return `${basePath}/${path.replace(/^\.?\//, '')}`;
}
