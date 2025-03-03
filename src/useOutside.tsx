import { useEffect } from "react";

const useOutside = (refs: any, handleAction: any) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.button === 0) {
        let res = [];
        refs.forEach((each: any, i: any) => {
          res.push(each.current && !each.current.contains(event.target));
          if (i === refs.length - 1 && !res.some((e) => e === false)) {
            handleAction(false);
          }
        });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, handleAction]);
};
export default useOutside;
