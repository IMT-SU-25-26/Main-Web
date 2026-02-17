import { useEffect, useState } from "react";

export const useImageLoading = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  return isReady;
};
