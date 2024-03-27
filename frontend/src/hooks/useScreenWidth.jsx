import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { widthAtom } from "../store";

function useScreenWidth() {
  const setScreenWidth = useSetRecoilState(widthAtom);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setScreenWidth]);
}

export default useScreenWidth;
