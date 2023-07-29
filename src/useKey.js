import { useEffect } from "react";

export function useKey(keyCode, keyHandler) {
  useEffect(() => {
    const callback = (e) => {
      if (e.code.toLowerCase() === keyCode.toLowerCase()) {
        keyHandler();
      }
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [keyCode, keyHandler]);
}
