"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/use-media-query";

const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });
const ElasticCursor = dynamic(() => import("@/components/ui/ElasticCursor"), { ssr: false });
const RemoteCursors = dynamic(() => import("@/components/realtime/remote-cursors"), { ssr: false });
const EasterEggs = dynamic(() => import("@/components/easter-eggs"), { ssr: false });

export default function ClientVisuals() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!isMobile && (
        <Particles
          className="fixed inset-0 -z-10 animate-fade-in"
          quantity={60}
        />
      )}
      {!isMobile && <RemoteCursors />}
      <EasterEggs />
      {!isMobile && <ElasticCursor />}
    </>
  );
}
