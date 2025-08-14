import FixtureCard from "@/components/fixture/fixture-card";
import { fetchSeasonFixtures } from "@/data/get-fixtures";

export default async function Home() {
  const data = (await fetchSeasonFixtures(104)) as Fixture[];

  const matches = groupFixtures(data);

  // console.log(data);
  // console.log(matches);

  return (
    <main className="my-4 space-y-4">
      {Object.entries(matches).map(([round, fixtures], idx) => (
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
