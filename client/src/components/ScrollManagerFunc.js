import { useEffect } from "react";
import requestAnimationFrame from "raf";
import { useLocation } from "react-router";

export const memoryStore = {
  _data: new Map(),
  get(key) {
    if (!key) {
      return null;
    }

    return this._data.get(key) || null;
  },
  set(key, data) {
    if (!key) {
      return;
    }
    return this._data.set(key, data);
  },
};

const scroll = (target, x, y) => {
  console.log(x, y);
  if (target instanceof window.Window) {
    target.scrollTo(x, y);
  } else {
    // target.scrollTo(x, y);
    target.scrollLeft = x;
    target.scrollTop = y;
  }
};

const getScrollPosition = (target) => {
  // if (target instanceof window.Window) {
  return { x: target.scrollX, y: target.scrollY };
  // }

  // return { x: target.scrollLeft, y: target.scrollTop };
};

const ScrollPositionManager = ({ scrollStore = memoryStore, scrollKey, children, target = { window } }) => {
  console.log(target);
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    restoreScrollPosition();

    return () => saveScrollPosition();
  }, []);

  useEffect(() => {
    restoreScrollPosition();

    return () => saveScrollPosition();
  }, [pathname, search, hash]);

  const restoreScrollPosition = (pos) => {
    pos = pos || scrollStore.get(scrollKey);
    if (target && pos) {
      requestAnimationFrame(() => {
        scroll(target, pos.x, pos.y);
      });
    }
  };

  const saveScrollPosition = (key) => {
    if (target) {
      const pos = getScrollPosition(target);
      key = key || scrollKey;
      scrollStore.set(key, pos);
    }
  };

  return children;
};

export default ScrollPositionManager;
