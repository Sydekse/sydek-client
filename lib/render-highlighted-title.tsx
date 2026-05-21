import React from "react";

/**
 * Mirrors careers hero: inserts `highlightedWord` segments with gradient between split parts.
 */
export function renderHighlightedSegments(
  title: string,
  highlightedWord: string,
  gradientClassName: string
): React.ReactNode {
  const parts = title.split(highlightedWord);
  if (parts.length === 1) {
    return title;
  }

  return parts.map((part, i) =>
    i === 0 ? (
      <span key={`part-${i}`}>{part}</span>
    ) : (
      <React.Fragment key={`fragment-${i}`}>
        <span className={gradientClassName}>{highlightedWord}</span>
        <span>{part}</span>
      </React.Fragment>
    )
  );
}
