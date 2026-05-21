/**
 * Node.js can expose experimental/global `localStorage` (e.g.
 * `--localstorage-file` without a valid path) where `getItem` is missing.
 * Bare `localStorage.getItem(...)` references then crash SSR and Next internals.
 */

function createMemoryStorage(): Storage {
  const mem = new Map<string, string>();
  return {
    get length() {
      return mem.size;
    },
    clear() {
      mem.clear();
    },
    getItem(key: string) {
      return mem.has(key) ? mem.get(key)! : null;
    },
    key(index: number) {
      const keys = [...mem.keys()];
      return keys[index] ?? null;
    },
    removeItem(key: string) {
      mem.delete(key);
    },
    setItem(key: string, value: string) {
      mem.set(key, String(value));
    },
  };
}

export function storageNeedsShim(candidate: unknown): boolean {
  if (candidate === null || candidate === undefined) return true;
  if (typeof candidate !== "object") return true;
  return typeof (candidate as Storage).getItem !== "function";
}

export function installLocalStorageShimOn(
  target: typeof globalThis & { localStorage?: Storage }
): void {
  try {
    if (!storageNeedsShim(target.localStorage)) return;
  } catch {
    /* malformed accessor */
  }

  Object.defineProperty(target, "localStorage", {
    value: createMemoryStorage(),
    writable: true,
    configurable: true,
  });
}

if (typeof globalThis !== "undefined") {
  installLocalStorageShimOn(
    globalThis as typeof globalThis & { localStorage?: Storage }
  );
}
