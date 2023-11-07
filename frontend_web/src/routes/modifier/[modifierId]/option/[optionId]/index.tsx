import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import type { ChallengeModifier } from "~/types";
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
    return modifierOption ? modifierOption : "None";
  });

  return (
    <article>
      <Resource
        value={modifierOptionResource}
        onPending={() => {
          return <h1>Modifier Option</h1>;
        }}
        onResolved={(modifierOption) => {
          return (
            <>
              <h1>Modifier Option</h1>
              <p>{modifierOption.name}</p>
              <p>{modifierOption.text}</p>
              <p>{modifierOption.explanatoryUrl}</p>
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
