import { useEffect, useState } from "react";

export const useDevToolsOpen = () => {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let isMounted = true;
    let cleanup: (() => void) | undefined;

    const init = async () => {
      const { addListener, launch, stop } = await import("devtools-detector");
      if (!isMounted) return;
      addListener((isOpen: boolean) => {
        if (isOpen) {
          setIsDevToolsOpen(true);
          stop();
        }
      });
      launch();
      cleanup = () => stop();
    };

    init();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, []);
  return { isDevToolsOpen };
};
