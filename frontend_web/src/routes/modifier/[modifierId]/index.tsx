import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import type { ChallengeModifier, ModifierOption } from "~/types";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const modifierId = +useLocation().params.modifierId;

  const challengeModifierResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const userData = await serverFetcher(`modifier`, "GET");
    const modifiersString = JSON.stringify(userData);
    const modifiersData = JSON.parse(modifiersString);
    const modifiers: ChallengeModifier[] = [];
    modifiersData.forEach((modifier: ChallengeModifier) => {
      modifiers.push(modifier);
    });
    const challengeModifier = modifiers.find(
      (modifier) => modifier.id === modifierId
    );
    return challengeModifier ? challengeModifier : "None";
  });

  return (
    <article>
      <Resource
        value={challengeModifierResource}
        onPending={() => {
          return <h1>Challenge Modifier</h1>;
        }}
        onResolved={(challengeModifier) => {
          return (
            <>
              <h1>Challenge Modifier</h1>
              <p>{challengeModifier.name}</p>
              <p>
                You must write a program to complete this challenge{" "}
                {challengeModifier.text}
              </p>
              <p>{challengeModifier.explanatoryUrl}</p>
              <h2>Modifier Options:</h2>
              <ul>
                {challengeModifier.hasOptions
                  ? challengeModifier.ModifierOption.map(
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
                    )
                  : "None"}
              </ul>
            </>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Challenge Modifiers",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
