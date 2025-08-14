import Image from "next/image";

import FixtureCard from "@/components/fixture/fixture-card";
import ScoresTable from "@/components/fixture/scores-table";
import { fetchSeasonFixtures, fetchSeasonScorers } from "@/data/get-fixtures";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Home() {
  const [data, scorers] = await Promise.all([
    fetchSeasonFixtures(104),
    fetchSeasonScorers(104),
  ]);

  const groupData = groupFixtures(
    data.filter((fixture) => fixture.game_date === "2025-08-02")
  );
  const knockoutData = groupFixtures(
    data.filter((fixture) => fixture.game_date === "2025-08-03")
  );

  console.log(data);
  // console.log(matches);

  return (
    <main className="">
      <Tabs defaultValue="group" className="relative">
        <div className="w-full fixed top-0 left-0 z-50">
          <nav className="max-w-5xl mx-auto bg-gray-50 shadow-lg rounded-lg text-black">
            <header className="">
              <div className="container mx-auto px-4 pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="hidden sm:block  p-2 rounded-full">
                      <Image
                        src={"/christie7s.webp"}
                        alt="christie"
                        height={50}
                        width={50}
                      />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold tracking-tight">
                        Christie 7s
                      </h1>
                      <p className="text-gray-500 text-sm">
                        Real-time rugby scores & updates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full">
                    <h4 className="hidden md:block">Powered by</h4>
                    <Image
                      src={"/tisini.png"}
                      alt="tisini"
                      height={50}
                      width={90}
                    />
                  </div>
                </div>
              </div>
            </header>

            <div className="bg-gray-200 w-full">
              <TabsList>
                <TabsTrigger value="knockout">Knockout</TabsTrigger>
                <TabsTrigger value="group">Groups</TabsTrigger>
                <TabsTrigger value="scorers">Top Points</TabsTrigger>
              </TabsList>
            </div>
          </nav>
        </div>

        <section className="pt-32 pb-5">
          <TabsContent value="group" className="space-y-4 p-2">
            {data.length <= 0 ? (
              <div className="flex h-svh justify-center items-center font-mono bg-gray-200 m-2 rounded-3xl">
                No fixture data yet!
              </div>
            ) : (
              <>
                {Object.entries(groupData).map(([round, fixtures], idx) => (
                  <div className="border rounded-lg overflow-hidden" key={idx}>
                    {/* Group/Pool Header */}
                    <div className="bg-secondary/30 px-4 py-2 border-b">
                      <h3 className="font-medium text-sm flex items-center gap-2">
                        <span className="font-bold text-primary">{round}</span>
                        {/* <span className="text-muted-foreground">|</span>
              <span>Pool A</span> */}
                      </h3>
                    </div>

                    {/* Fixtures List */}
                    <div className="divide-y  md:px-4">
                      {fixtures.map((match) => (
                        <FixtureCard key={match.fixture} fixture={match} />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </TabsContent>

          <TabsContent value="knockout" className="space-y-4 p-2">
            {data.length <= 0 ? (
              <div className="flex h-svh justify-center items-center font-mono bg-gray-200 m-2 rounded-3xl">
                No fixture data yet!
              </div>
            ) : (
              <>
                {Object.entries(knockoutData).map(([round, fixtures], idx) => (
                  <div className="border rounded-lg overflow-hidden" key={idx}>
                    {/* Group/Pool Header */}
                    <div className="bg-secondary/30 px-4 py-2 border-b">
                      <h3 className="font-medium text-sm flex items-center gap-2">
                        <span className="font-bold text-primary">{round}</span>
                        {/* <span className="text-muted-foreground">|</span>
              <span>Pool A</span> */}
                      </h3>
                    </div>

                    {/* Fixtures List */}
                    <div className="divide-y  md:px-4">
                      {fixtures.map((match) => (
                        <FixtureCard key={match.fixture} fixture={match} />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </TabsContent>

          <TabsContent value="scorers">
            {data.length <= 0 ? (
              <div className="flex h-svh justify-center items-center font-mono bg-gray-200 m-2 rounded-3xl">
                No scorers data yet!
              </div>
            ) : (
              <ScoresTable data={scorers} />
            )}
          </TabsContent>
        </section>
      </Tabs>
    </main>
  );
}

const groupFixtures = (fixtures: Fixture[]) => {
  const grouped: { [round: string]: Fixture[] } = {};

  fixtures.forEach((fixture) => {
    const { matchday: round } = fixture;

    if (!grouped[round]) {
      grouped[round] = [];
    }

    grouped[round].push(fixture);
  });

  // Sort the dates in descending order (latest first)
  // const sortedGrouped: typeof grouped = {};
  // Object.keys(grouped)
  //   .sort((a, b) => {
  //     const numA = parseInt(a.replace(/\D/g, ""), 10);
  //     const numB = parseInt(b.replace(/\D/g, ""), 10);
  //     return numA - numB;
  //   })
  //   .forEach((round) => {
  //     sortedGrouped[round] = grouped[round];
  //   });

  // return sortedGrouped;
  return grouped;
};
