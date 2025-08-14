import React from "react";
import Image from "next/image";

import PercentBar from "@/components/charts/percent-bar";
import ComparisonBar from "@/components/charts/comparison-bar";
import HorizontalBar from "@/components/charts/horizontal-bar";

const SingleFixturePage = () => {
  return (
    <main className="space-y-4 mt-4">
      <section className="border rounded-lg bg-card overflow-hidden shadow-sm">
        {/* League Header */}
        <div className="bg-secondary px-3 py-2 flex justify-between items-center">
          <p className="text-sm font-mono text-white truncate">{"league"}</p>
          <p className="text-xs font-mono text-white">Round: {"5"}</p>
        </div>

        {/* Match Content */}
        <div className="p-3">
          <div className="grid grid-cols-12 items-center gap-2">
            {/* Home Team */}
            <div className="col-span-5 flex items-center justify-end gap-2">
              <div className="text-right">
                <p className="text-sm md:text-base font-semibold text-foreground">
                  {"team1_name"}
                </p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                <Image
                  src="/homeLogo.png"
                  alt={"team1_name"}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Score */}
            <div className="col-span-2 flex flex-col items-center">
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-bold text-foreground">
                  {5}
                </span>
                <span className="text-muted-foreground">:</span>
                <span className="text-xl md:text-2xl font-bold text-foreground">
                  {6}
                </span>
              </div>
              <p className="text-xs text-muted-foreground capitalize">
                2nd Half 76&apos;
              </p>
            </div>

            {/* Away Team */}
            <div className="col-span-5 flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                <Image
                  src="/awayLogo.png"
                  alt={"team2_name"}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm md:text-base font-semibold text-foreground">
                  {"team2_name"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Footer
        <div className="border-t px-3 py-1 bg-secondary/10">
          <p className="text-xs text-muted-foreground font-mono text-center">
            Kenya Cup • KRU Championship
          </p>
        </div> */}
      </section>

      <section className="border rounded-lg bg-card p-4 space-y-4">
        <PercentBar hValue={"36"} aValue={"64"} stat={"Posession"} />

        <HorizontalBar hValue={"6"} aValue={"29"} stat={"Carries"} />

        <ComparisonBar
          hValue={25}
          hTotal={26}
          aValue={44}
          aTotal={44}
          stat={"Complete passes"}
        />

        <ComparisonBar
          hValue={25}
          hTotal={26}
          aValue={34}
          aTotal={44}
          stat={"Successful tackles"}
        />

        <HorizontalBar hValue={"4"} aValue={"4"} stat={"Penalties Conceded"} />

        <HorizontalBar hValue={"3"} aValue={"2"} stat={"Yellow Cards"} />
      </section>
    </main>
  );
};

export default SingleFixturePage;
