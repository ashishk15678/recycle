"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [section, setSection] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  gsap.to("#box", {
    x: 500,
    y: 300,
    scrollBehavior: "smooth",
    delay: 0.5,
    scrollTrigger: {
      trigger: "#box",
      // scrub: true,
    },
  });

  return (
    <>
      {mounted && (
        <>
          <Image
            alt="Graffiti painting of David bust"
            src={
              "https://img.freepik.com/premium-photo/graffiti-painting-david-bust-realistic-hyperdetailed-portrait-urban-art-style-pichiavo_929864-241.jpg?w=740"
            }
            layout="fill"
            objectFit="cover"
            style={{ opacity: 0.3 }}
            onLoadingComplete={() => setMounted(true)}
            onError={() => setMounted(false)}
            draggable="false"
            className="absolute z-[-1]"
          />
        </>
      )}
      <body
        className="h-full w-full"
        // style={{
        //   scrollbarWidth: "none",
        // }}

        onScrollCapture={(e) => {
          const scrollTop = e.currentTarget.scrollTop;
          console.log(`Scroll position: ${scrollTop}`);
        }}
      >
        <div
          style={
            {
              // height: "200%",
            }
          }
          className="
          absolute z-1 "
        ></div>
        <div className="w-full h-full box mt-[90vh]" id="box">
          Box
        </div>
      </body>
    </>
  );
}
