const VERSION_REGEX = /(\d+\.\d+\.\d+)/;

export function readVersion(contents) {
  const match = contents.match(VERSION_REGEX);
  if (!match) throw new Error("No version found in theme header");
  return match[1];
}

export function writeVersion(contents, version) {
  const updated = contents.replace(VERSION_REGEX, version).trimEnd();
  return `${updated}\n`;
}
