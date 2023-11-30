import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { ModifierOption } from "~/types";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const challengeModifiersResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const userData = await serverFetcher(`modifier`, "GET");
    const modifiersString = JSON.stringify(userData);
    const modifiersData = JSON.parse(modifiersString);
    const modifiers: ModifierOption[] = [];
    modifiersData.forEach((modifier: ModifierOption) => {
      modifiers.push(modifier);
    });
    const challengeModifiers = {
      modifiers: modifiers.length > 0 ? modifiers : "None",
    };
    return challengeModifiers;
  });

  return (
    <article>
      <h1 class={`fontLarger`}>Challenge Modifiers</h1>
      <br />
      <Resource
        value={challengeModifiersResource}
        onPending={() => {
          return (
            <p>
              Modifiers: <strong>Loading...</strong>
            </p>
          );
        }}
        onResolved={(challengeModifiers) => {
          return (
            <ul>
              {challengeModifiers.modifiers.map(
                (modifier: ModifierOption, index: number) => {
                  return (
                    <li key={`modifier-${modifier.id}`}>
                      <a
                        href={`${modifier.id}`}
                        class={index % 2 !== 0 && "textGreen"}
                      >
                        °{modifier.name}°
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Challenge Modifiers",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
