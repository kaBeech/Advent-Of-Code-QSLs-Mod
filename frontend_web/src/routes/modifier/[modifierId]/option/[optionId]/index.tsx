import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import type { ChallengeModifier } from "~/types";
import constructChallengeModifierFullText from "~/util/constructChallengeModifierFullText";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const modifierId = +useLocation().params.modifierId;
  const optionId = +useLocation().params.optionId;

  const modifierOptionResource = useResource$<any>(async ({ cleanup }) => {
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
    const modifierOption = challengeModifier!.ModifierOption.find(
      (option) => option.id === optionId
    );
    return modifierOption ? { challengeModifier, modifierOption } : "None";
  });

  return (
    <article>
      <Resource
        value={modifierOptionResource}
        onPending={() => {
          return <h1 class={`fontLarger`}>Modifier Option</h1>;
        }}
        onResolved={(modifierOptionData) => {
          return (
            <>
              <h1 class={`fontLarger`}>Modifier Option</h1>
              <br />
              <p>{modifierOptionData.modifierOption.text}</p>
              <p>
                <em>Full Challenge Modifier Text:</em> "
                {constructChallengeModifierFullText(
                  modifierOptionData.challengeModifier.text +
                    modifierOptionData.modifierOption.text
                )}
                "
              </p>
              {modifierOptionData.modifierOption.explanatoryUrl && (
                <p>
                  See this{" "}
                  <a
                    href={modifierOptionData.modifierOption.explanatoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    external link
                  </a>{" "}
                  for more info
                </p>
              )}
            </>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Modifier Option Details",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
