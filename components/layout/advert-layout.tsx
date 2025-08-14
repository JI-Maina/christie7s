import Image from "next/image";
import React, { ReactNode } from "react";

import Navbar from "../site/navbar";

interface LayoutProps {
  children: ReactNode;
}

const AdvertLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main container - removed overflow control from here */}
      <div className="mx-auto flex max-w-[1920px]">
        {/* Left Ad (sticky) */}
        <aside className="sticky top-0 hidden h-screen w-[160px] flex-shrink-0 lg:block">
          <div className="h-full py-2 px-2">
            <div className="h-full w-full rounded-lg border bg-card shadow-sm overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/rotated-tanobora.jpg"
                  alt="tanobora"
                  fill
                  className="object-cover"
                  sizes="160px"
                  priority
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Content container - now handles scrolling */}
        <div className="flex-1">
          {/* Top Ad (now properly sticky) */}
          <div className="sticky top-0 z-10 w-full bg-background py-2 shadow-sm">
            <div className="mx-auto w-full px-4">
              <div className="rounded-lg border bg-card text-center">
                {/* <div>Top Ad Banner (728x90 or similar)</div> */}
                {/* <img src="https://i.postimg.cc/GhzxYdYq/tanobora.jpg" alt="" /> */}
                <Image
                  src="/tanobora.jpg"
                  alt="tanobora"
                  height={100}
                  width={500}
                  className="object-cover w-full rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scrollable content area */}
          <main className="overflow-y-auto">
            <div className="mx-auto w-full px-4">
              <Navbar />
              {children}
            </div>
          </main>
        </div>

        {/* Right Ad (sticky) */}
        <aside className="sticky top-0 hidden h-screen w-[160px] flex-shrink-0 lg:block">
          <div className="h-full py-2 px-2">
            <div className="h-full w-full rounded-lg border bg-card p-4 shadow-sm">
              {/* <div className="h-full w-full">Right Ad Space</div> */}
              <Image
                src="/rotated-tanobora.jpg"
                alt="tanobora"
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdvertLayout;
