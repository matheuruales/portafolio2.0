"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useTheme } from "next-themes";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 400, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: 0, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  about: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  experience: {
    desktop: {
      scale: { x: 0.38, y: 0.38, z: 0.38 },
      position: { x: 120, y: -55, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 9,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -35, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 7,
        z: 0,
      },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
  services: {
    desktop: {
      scale: { x: 0.32, y: 0.32, z: 0.32 },
      position: { x: -220, y: -70, z: 0 },
      rotation: {
        x: Math.PI * 0.9,
        y: Math.PI / 2.8,
        z: Math.PI * 0.85,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: 120, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 2.8,
        z: Math.PI,
      },
    },
  },
  testimonials: {
    desktop: {
      scale: { x: 0.31, y: 0.31, z: 0.31 },
      position: { x: 240, y: -80, z: 0 },
      rotation: {
        x: Math.PI * 0.95,
        y: Math.PI / 2.4,
        z: Math.PI * 0.9,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: 120, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 2.4,
        z: Math.PI,
      },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 500, y: -250, z: 0 },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
};

type Section =
  | "hero"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "services"
  | "testimonials"
  | "contact";

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [bongoAnimation, setBongoAnimation] = useState<{
    start: () => void;
    stop: () => void;
  }>();
  const [keycapAnimtations, setKeycapAnimtations] = useState<{
    start: () => void;
    stop: () => void;
  }>();

  const applySkillVisualTheme = () => {
    if (!splineApp) return;

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("anonymous");
    const sceneVariables = splineApp.getVariables();
    const variableUpdates: Record<string, string | number | boolean> = {};

    const applyColor = (root: any, color: string) => {
      const applyToMaterial = (material: any) => {
        if (material?.color?.set) {
          material.color.set(color);
          material.needsUpdate = true;
        }
      };

      const walk = (node: any) => {
        if (!node) return;
        if (Array.isArray(node.material)) {
          node.material.forEach(applyToMaterial);
        } else {
          applyToMaterial(node.material);
        }
        if (Array.isArray(node.children)) {
          node.children.forEach(walk);
        }
      };

      walk(root);
    };

    const applyIconTexture = (root: any, iconUrl: string) => {
      textureLoader.load(
        iconUrl,
        (texture) => {
          const walk = (node: any) => {
            if (!node) return;
            const replaceMap = (material: any) => {
              if (!material) return;
              if ("map" in material) {
                material.map = texture;
                material.transparent = true;
                material.needsUpdate = true;
              }
            };

            if (Array.isArray(node.material)) {
              node.material.forEach(replaceMap);
            } else {
              replaceMap(node.material);
            }

            if (Array.isArray(node.children)) {
              node.children.forEach(walk);
            }
          };

          walk(root);
        },
        undefined,
        () => {}
      );
    };

    Object.values(SKILLS).forEach((skill) => {
      const keyObj = splineApp.findObjectByName(skill.name) as any;
      if (!keyObj) return;
      applyColor(keyObj, skill.color);

      // If the key mesh has a texture slot, replace it with the stack icon.
      applyIconTexture(keyObj, skill.icon);

      // Also update Spline variables when the scene exposes per-key icon/color controls.
      Object.keys(sceneVariables).forEach((varName) => {
        const normalized = varName.toLowerCase();
        if (!normalized.includes(skill.name.toLowerCase())) return;
        if (normalized.includes("color")) {
          variableUpdates[varName] = skill.color;
        } else if (
          normalized.includes("icon") ||
          normalized.includes("img") ||
          normalized.includes("logo") ||
          normalized.includes("texture")
        ) {
          variableUpdates[varName] = skill.icon;
        }
      });
    });

    if (Object.keys(variableUpdates).length > 0) {
      splineApp.setVariables(variableUpdates);
    }
  };

  const keyboardStates = (section: Section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  };

  const getSplineHeading = (label: string) => {
    // Keep this short in Spline to avoid overlapping the keyboard text block.
    if (label === "LangGraph + LangChain") return "Langgrap";
    return label;
  };

  const getSplineDescription = () => {
    return "";
  };

  const setSplineSkillText = (skill: Skill) => {
    if (!splineApp) return;
    const heading = getSplineHeading(skill.label);
    const desc = getSplineDescription();
    splineApp.setVariable("heading", heading);
    splineApp.setVariable("desc", desc);
  };

  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || selectedSkill?.name === e.target.name) return;

    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    } else {
      if (!selectedSkill || selectedSkill.name !== e.target.name) {
        const skill = SKILLS[e.target.name as SkillNames];
        setSelectedSkill(skill);
      }
    }
  };

  // handle keyboard press interaction
  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    setSplineSkillText(selectedSkill);
  }, [selectedSkill]);

  // handle keyboard heading and desc visibility
  useEffect(() => {
    if (!splineApp) return;
    const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileDark = splineApp.findObjectByName("text-mobile-dark");
    const textMobileLight = splineApp.findObjectByName("text-mobile");
    if (
      !textDesktopDark ||
      !textDesktopLight ||
      !textMobileDark ||
      !textMobileLight
    )
      return;
    if (activeSection !== "skills") {
      textDesktopDark.visible = false;
      textDesktopLight.visible = false;
      textMobileDark.visible = false;
      textMobileLight.visible = false;
      return;
    }
    if (theme === "dark" && !isMobile) {
      textDesktopDark.visible = false;
      textDesktopLight.visible = true;
      textMobileDark.visible = false;
      textMobileLight.visible = false;
    } else if (theme === "dark" && isMobile) {
      textDesktopDark.visible = false;
      textDesktopLight.visible = false;
      textMobileDark.visible = false;
      textMobileLight.visible = true;
    } else if (theme === "light" && !isMobile) {
      textDesktopDark.visible = true;
      textDesktopLight.visible = false;
      textMobileDark.visible = false;
      textMobileLight.visible = false;
    } else {
      textDesktopDark.visible = false;
      textDesktopLight.visible = false;
      textMobileDark.visible = true;
      textMobileLight.visible = false;
    }
  }, [theme, splineApp, isMobile, activeSection]);

  // initialize gsap animations
  useEffect(() => {
    if (!splineApp) return;
    applySkillVisualTheme();
    const cleanupInteractions = handleSplineInteractions();
    const cleanupGsap = handleGsapAnimations();
    setBongoAnimation(getBongoAnimation());
    setKeycapAnimtations(getKeycapsAnimation());

    return () => {
      cleanupInteractions?.();
      cleanupGsap?.();
    };
  }, [splineApp]);

  useEffect(() => {
    if (!splineApp) return;
    if (activeSection !== "skills") {
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    }
  }, [activeSection, splineApp]);

  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  //reveal keycaps
  useEffect(() => {
    if (!splineApp || isLoading || keyboardRevealed) return;
    revealKeyCaps();
  }, [splineApp, isLoading, keyboardRevealed]);
  const revealKeyCaps = async () => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;
    await sleep(400);
    setKeyboardRevealed(true);
    // Fijar escala inicial pequeña para la animación de aparición en skills
    gsap.set(kbd.scale, { x: 0.01, y: 0.01, z: 0.01 });
    // }

    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");
    await sleep(900);
    if (isMobile) {
      const mobileKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-mobile"
      );
      mobileKeyCaps.forEach((keycap, idx) => {
        keycap.visible = true;
      });
    } else {
      const desktopKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-desktop"
      );
      desktopKeyCaps.forEach(async (keycap, idx) => {
        await sleep(idx * 70);
        keycap.visible = true;
      });
    }
    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 70);
      keycap.visible = true;
      gsap.fromTo(
        keycap.position,
        { y: 200 },
        { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };
  const handleSplineInteractions = () => {
    if (!splineApp) return;
    const onKeyUp = (e: SplineEvent) => {
      if (!splineApp) return;
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    };
    const onKeyDown = (e: SplineEvent) => {
      if (!splineApp) return;
      const skill = SKILLS[e.target.name as SkillNames];
      if (!skill) return;
      setSelectedSkill(skill);
      setSplineSkillText(skill);
    };
    const onMouseHover = (e: SplineEvent) => handleMouseHover(e);

    splineApp.addEventListener("keyUp", onKeyUp);
    splineApp.addEventListener("keyDown", onKeyDown);
    splineApp.addEventListener("mouseHover", onMouseHover);

    return () => {
      if (!splineApp) return;
      splineApp.removeEventListener("keyUp", onKeyUp);
      splineApp.removeEventListener("keyDown", onKeyDown);
      splineApp.removeEventListener("mouseHover", onMouseHover);
    };
  };
  const handleGsapAnimations = () => {
    if (!splineApp) return;
    const kbd: SPEObject | undefined = splineApp.findObjectByName("keyboard");
    if (!kbd || !splineContainer.current) return;
    const timelines: gsap.core.Timeline[] = [];

    // Empezar oculto — solo aparece en la sección de habilidades
    kbd.visible = false;

    const skillsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top 60%",
        scrub: false,
        onEnter: () => {
          setActiveSection("skills");
          kbd.visible = true;
          gsap.to(kbd.scale, { ...keyboardStates("skills").scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates("skills").position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates("skills").rotation, duration: 1 });
        },
        onEnterBack: () => {
          setActiveSection("skills");
          kbd.visible = true;
          gsap.to(kbd.scale, { ...keyboardStates("skills").scale, duration: 0.9 });
          gsap.to(kbd.position, { ...keyboardStates("skills").position, duration: 0.9 });
          gsap.to(kbd.rotation, { ...keyboardStates("skills").rotation, duration: 0.9 });
        },
        onLeave: () => {
          setActiveSection("projects");
          gsap.to(kbd.scale, {
            x: 0.01, y: 0.01, z: 0.01, duration: 0.5,
            onComplete: () => { kbd.visible = false; },
          });
        },
        onLeaveBack: () => {
          setActiveSection("experience");
          gsap.to(kbd.scale, {
            x: 0.01, y: 0.01, z: 0.01, duration: 0.5,
            onComplete: () => { kbd.visible = false; },
          });
        },
      },
    });
    timelines.push(skillsTimeline);

    return () => {
      timelines.forEach((tl) => tl.kill());
    };
  };
  const getBongoAnimation = () => {
    const framesParent = splineApp?.findObjectByName("bongo-cat");
    const frame1 = splineApp?.findObjectByName("frame-1");
    const frame2 = splineApp?.findObjectByName("frame-2");
    if (!frame1 || !frame2 || !framesParent)
      return { start: () => {}, stop: () => {} };

    let interval: NodeJS.Timeout;
    const start = () => {
      let i = 0;
      framesParent.visible = true;
      interval = setInterval(() => {
        if (i % 2) {
          frame1.visible = false;
          frame2.visible = true;
        } else {
          frame1.visible = true;
          frame2.visible = false;
        }
        i++;
      }, 100);
    };
    const stop = () => {
      clearInterval(interval);
      framesParent.visible = false;
      frame1.visible = false;
      frame2.visible = false;
    };
    return { start, stop };
  };
  const getKeycapsAnimation = () => {
    if (!splineApp) return { start: () => {}, stop: () => {} };

    let tweens: gsap.core.Tween[] = [];
    const start = () => {
      removePrevTweens();
      Object.values(SKILLS)
        .sort(() => Math.random() - 0.5)
        .forEach((skill, idx) => {
          const keycap = splineApp.findObjectByName(skill.name);
          if (!keycap) return;
          const t = gsap.to(keycap?.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1,0.3)",
          });
          tweens.push(t);
        });
    };
    const stop = () => {
      removePrevTweens();
      Object.values(SKILLS).forEach((skill) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (!keycap) return;
        const t = gsap.to(keycap?.position, {
          y: 0,
          duration: 4,
          repeat: 1,
          ease: "elastic.out(1,0.8)",
        });
        tweens.push(t);
      });
      setTimeout(removePrevTweens, 1000);
    };
    const removePrevTweens = () => {
      tweens.forEach((t) => t.kill());
    };
    return { start, stop };
  };
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Spline
          ref={splineContainer}
          onLoad={(app: Application) => {
            const kbd = app.findObjectByName("keyboard");
            if (kbd) kbd.visible = false;
            setSplineApp(app);
            bypassLoading();
          }}
          scene="/assets/skills-keyboard.spline"
        />
      </Suspense>
    </>
  );
};

export default AnimatedBackground;
