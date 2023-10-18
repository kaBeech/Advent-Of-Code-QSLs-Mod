import { Resource, component$, useResource$ } from "@builder.io/qwik";
import {
  useLocation,
  type DocumentHead,
  type RequestHandler,
} from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../../plugin@auth";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
import type { Session } from "@auth/core/types";
import DayLink from "~/components/game/dayLink/dayLink";

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/login`);
  }
};

export default component$(() => {
  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);
  const gameNumber = useLocation().params.gameNumber;

  const gameDataResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const gameData = await serverFetcher(
      `gamedata/${gameNumber}`,
      "GET",
      userId
    );
    return {
      game: gameData,
    };
  });

  return (
    <div>
      <div>
        <br />
        <Resource
          value={gameDataResource}
          onPending={() => {
            const pendingDays = [];
            for (let i = 1; i <= 25; i++) {
              pendingDays.push({ number: i });
            }
            return (
              <>
                {pendingDays.map((day: { number: number }) => (
                  <DayLink
                    key={`pendingDay-${day.number}`}
                    dayNumber={day.number}
                  />
                ))}
              </>
            );
          }}
          onResolved={(gameData) => {
            if (gameData.game.currentDay === undefined) {
              const dummyDays = [];
              for (let i = 25; i > 0; i--) {
                dummyDays.push({ number: i });
              }
              return (
                <>
                  {dummyDays.map((day: { number: number }) => (
                    <DayLink
                      key={`lockedDay-${day.number}`}
                      dayNumber={day.number}
                    />
                  ))}
                  <br />
                  <a href="/new">[Start a New Game!]</a>
                </>
              );
            }
            const lockedDays = [];
            for (let i = 25; i > gameData.game.currentDay; i--) {
              lockedDays.push({ number: i });
            }
            const sortedDays = gameData.game.Day.sort(
              (a: { number: number }, b: { number: number }) => {
                return b.number - a.number;
              }
            );
            return (
              <>
                {lockedDays.map((day: { number: number }) => (
                  <DayLink
                    key={`lockedDay-${day.number}`}
                    dayNumber={day.number}
                  />
                ))}
                {sortedDays.map(
                  (day: {
                    number: number;
                    challengeModifierId: string;
                    modifierOptionId: string;
                    part1Completed: string | null;
                    part2Completed: string | null;
                    challengeModifierRerollsUsed: number;
                    modifierOptionRerollsUsed: number;
                    ChallengeModifier?: {
                      name: string;
                    };
                    ModifierOption?: {
                      name: string;
                    };
                    netScore: number;
                  }) => (
                    <DayLink
                      key={`unlockedDay-${day.number}`}
                      dayNumber={day.number}
                      dayLinkData={{
                        challengeModifierId: day.challengeModifierId,
                        modifierOptionId: day.modifierOptionId,
                        part1Completed: day.part1Completed,
                        part2Completed: day.part2Completed,
                        challengeModifierRerollsUsed:
                          day.challengeModifierRerollsUsed,
                        modifierOptionRerollsUsed:
                          day.modifierOptionRerollsUsed,
                        ChallengeModifier: day.ChallengeModifier,
                        ModifierOption: day.ModifierOption,
                        netScore: day.netScore,
                      }}
                    />
                  )
                )}
              </>
            );
          }}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Game Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
