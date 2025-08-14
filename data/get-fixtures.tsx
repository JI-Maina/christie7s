import "server-only";

const token = process.env.NEXT_PUBLIC_TOKEN;
const baseURL = process.env.NEXT_PUBLIC_API_HOST;

// get user tournaments
export const fetchTournaments = async () => {
  const res = await fetch(`${baseURL}?gettoken=${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "usertournament" }),
  });

  if (!res.ok) throw new Error("Failed to fetch user tournaments");

  return res.json();
};

// get user tournaments
export const fetchTournamentSeries = async () => {
  const res = await fetch(`${baseURL}?gettoken=${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "tournamentseries", tournamentid: 199 }),
  });

  if (!res.ok) throw new Error("Failed to fetch user tournaments");

  return res.json();
};

// fetch season fixtures
export const fetchSeasonFixtures = async (id: number): Promise<Fixture[]> => {
  const res = await fetch(`${baseURL}?gettoken=${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "fixtures", seasonid: id }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch fixtures");

  return res.json();
};

// fetch season top scorers
export const fetchSeasonScorers = async (id: number): Promise<TopScorer[]> => {
  const res = await fetch(`${baseURL}?gettoken=${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "topPointRefData",
      fixturetype: "rugby7",
      seriesid: id,
    }),
    next: { revalidate: 60 },
  });

  // console.log(res.body);
  if (!res.ok) throw new Error("Failed to fetch tournament scorers");

  return res.json();
};

// fetch season top scorers
export const fetchSeasonStandings = async (): Promise<TournStanding[]> => {
  const url = process.env.NEXT_PUBLIC_DJANGO_API;

  const res = await fetch(`${url}/api/tournament-standings/${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch user tournaments");

  return res.json();
};
