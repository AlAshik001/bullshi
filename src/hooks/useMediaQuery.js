import { useState, useEffect } from "react";

/**
 * A custom React hook to detect if the screen size matches a media query.
 * @param query - The media query string (e.g., '(max-width: 768px)').
 * @returns boolean - True if the query matches, false otherwise.
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;