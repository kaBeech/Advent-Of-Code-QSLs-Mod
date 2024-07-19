import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import type { ChallengeModifier, ModifierOption } from "~/types";
import constructChallengeModifierFullText from "~/util/constructChallengeModifierFullText";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const modifierId = +useLocation().params.modifierId;

  const challengeModifierResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const userData = await serverFetcher(`modifier/${modifierId}`, "GET");
    const modifierString = JSON.stringify(userData);
    const challengeModifier = JSON.parse(modifierString);
    return challengeModifier ? challengeModifier : "None";
  });

  return (
    <article>
      <Resource
        value={challengeModifierResource}
        onPending={() => {
          return <h1 class={`fontLarger`}>Challenge Modifier</h1>;
        }}
        onResolved={(challengeModifier) => {
          return (
            <>
              <h1 class={`fontLarger`}>Challenge Modifier</h1>
              <br />
              <p>{challengeModifier.name}</p>
              <p>
                {constructChallengeModifierFullText(challengeModifier.text)}
              </p>
              {challengeModifier.explanatoryUrl && (
                <p>
                  See this{" "}
                  <a
                    href={challengeModifier.explanatoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    external link
                  </a>{" "}
                  for more info
                </p>
              )}
              <h2>Modifier Options:</h2>
              {challengeModifier.hasOptions ? (
                <ul>
                  {challengeModifier.ModifierOption.map(
                    (modifierOption: ModifierOption, index: number) => {
                      return (
                        <li key={`option-${modifierOption.id}`}>
                          <a
                            href={`option/${modifierOption.id}`}
                            class={index % 2 !== 0 && "textGreen"}
                          >
                            °{modifierOption.name}°
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              ) : (
                <div>"None"</div>
              )}
            </>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Challenge Modifier Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
