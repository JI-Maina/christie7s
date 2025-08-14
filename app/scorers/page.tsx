import React, { Suspense } from "react";

import { fetchSeasonScorers } from "@/actions/actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopScorersPage = async () => {
  const data = (await fetchSeasonScorers(87)) as TopScorer[];

  const players = data.sort(
    (a, b) => parseInt(b.totalpoints) - parseInt(a.totalpoints)
  );

  // console.log(players);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full p-4">
        {" "}
        {/* Changed container */}
        <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
          {" "}
          {/* Added overflow-hidden */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] font-medium text-foreground">
                  Player
                </TableHead>
                <TableHead className="text-right font-medium text-foreground">
                  Tries
                </TableHead>
                <TableHead className="text-right font-medium text-foreground">
                  Conversions
                </TableHead>
                <TableHead className="hidden sm:table-cell text-right font-medium text-foreground">
                  Penalties
                </TableHead>
                <TableHead className="hidden sm:table-cell text-right font-medium text-foreground">
                  Drop Goals
                </TableHead>
                <TableHead className="text-right font-medium text-destructive">
                  Total Points
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow
                  key={player.playerid}
                  className="hover:bg-secondary/50"
                >
                  <TableCell className="font-medium text-foreground flex gap-2">
                    <Avatar>
                      <AvatarFallback>p</AvatarFallback>
                      <AvatarImage></AvatarImage>
                    </Avatar>
                    <div>
                      <p className="text-sm">{player.playername}</p>
                      <p className="text-muted-foreground text-xs">
                        {player.teamname}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-primary font-bold">
                    {player.trys}
                  </TableCell>
                  <TableCell className="text-right text-secondary-foreground font-bold">
                    {player.conversion}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-right font-bold">
                    {player.penalty}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-right font-bold">
                    {player.dropgoal ?? "-"}
                  </TableCell>
                  <TableCell className="text-right text-destructive font-bold">
                    {player.totalpoints}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Suspense>
  );
};

export default TopScorersPage;
