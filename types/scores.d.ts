type Tournament = {
  tournament_id: string;
  tournament: string;
  date_created: string;
  date_updated: string;
  position: string;
  status: string;
  fixturetype: string;
  season: Season[];
};

type Season = {
  id: string;
  name: string;
  ranker: string;
  tournament: string;
  date_created: string;
  date_updated: string;
  created_by: string;
  date_from: string;
  date_to: string;
  status: string;
};

type Scores = {
  Home: string;
  Away: string;
};

type RefData = {
  id: string;
  fixture_id: string;
  event_id: string;
  event_name: string;
  sub_event_id: string;
  sub_event_name: string;
  team_id: string;
  team_name: string;
  player_id: string;
  player_name: string;
  sub_player_id: string;
  sub_player_name: string;
  minute: string;
  date_created: string;
  date_updated: string;
  status: string;
  created_by: string;
};

type Fixture = {
  fixture: string;
  team1_id: string;
  team1_logo: string | null;
  team2_id: string;
  team2_logo: string | null;
  game_date: string;
  team1_name: string;
  team2_name: string;
  status: string;
  game_status: string;
  minute: string;
  second: string;
  game_moment: string;
  league: string;
  matchday: string;
  fixture_type: string;
  series: string;
  matchtime: string;
  away_score: string;
  home_score: string;
  matchplay_status: string;
  tisiniscores: Scores;
  refdata: RefData[];
};

type GroupedFix = {
  [date: string]: {
    [round: string]: Fixture[];
  };
};

type TopScorer = {
  playerid: string;
  seasonid: string;
  eventid: string;
  subeventid: string;
  teamid: string;
  trys: string;
  conversion: number;
  penalty: number;
  dropgoal: number;
  totalpoints: string;
  playername: string;
  teamname: string;
};

type Standing = {
  team: string;
  P: number;
  W: number;
  D: number;
  L: number;
  GF: number;
  GA: number;
  GD: number;
  Pts: number;
};

type TournSerie = {
  id: string;
  name: string;
  ranker: string;
  tournament: string;
  date_created: string;
  date_updated: string;
  created_by: string;
  date_from: string;
  date_to: string;
  status: string;
  standings: Standing[];
};

type TournStanding = {
  tournament_id: string;
  tournament: string;
  date_created: string;
  date_updated: string;
  position: string;
  status: string;
  fixturetype: string;
  leaguelogo: null | string;
  is_competitive: string;
  fixture_type: string;
  series: TournSerie[];
};
