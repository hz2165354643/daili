export const SOURCE_ORIGIN = "https://cheapproxy.net";

const LOCAL_PATHS = new Set(["/tgapi"]);

export function sourceHref(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${SOURCE_ORIGIN}${path}`;
}

export function isLocalPath(path: string): boolean {
  return LOCAL_PATHS.has(path);
}
