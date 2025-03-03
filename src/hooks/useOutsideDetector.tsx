import { useEffect } from "react";

const useOutsideDetector = (refs: any, handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = refs.every((ref: any) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      if (isOutside) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler]);
};

export default useOutsideDetector;
