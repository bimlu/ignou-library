import { useState, useEffect } from "react";

export const useScrolling = () => {
  const [scrolling, setScrolling] = useState(false);

  const scrollFunc = () => setScrolling(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);

    const timerId = setInterval(() => {
      scrolling && setScrolling(false);
    }, 80);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
      clearInterval(timerId);
    };
  }, []);

  return scrolling;
};
