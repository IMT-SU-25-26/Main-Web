import { useEffect } from "react";

export const usePageRefresh = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasRefreshed = sessionStorage.getItem("aboutPageRefreshed");
      if (!hasRefreshed) {
        sessionStorage.setItem("aboutPageRefreshed", "true");
        window.location.reload();
      }
    }
  }, []);
};
