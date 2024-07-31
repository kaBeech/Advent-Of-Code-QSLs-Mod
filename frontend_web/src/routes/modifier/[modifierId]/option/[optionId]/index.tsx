import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import constructChallengeModifierFullText from "~/util/constructChallengeModifierFullText";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const optionId = +useLocation().params.optionId;

  const modifierOptionResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const userData = await serverFetcher(`modifier-option/${optionId}`, "GET");
    const modifierString = JSON.stringify(userData);
    const modifierOption = JSON.parse(modifierString);
    return modifierOption ? modifierOption : "None";
  });

  return (
    <article>
      <Resource
        value={modifierOptionResource}
        onPending={() => {
          return <h1 class={`fontLarger`}>Modifier Option</h1>;
        }}
        onResolved={(modifierOption) => {
          return (
            <>
              <h1 class={`fontLarger`}>Modifier Option</h1>
              <br />
              <p>{modifierOption.text}</p>
              <p>
                <em>Full Challenge Modifier Text:</em> "
                {constructChallengeModifierFullText(
                  modifierOption.ChallengeModifier.text +
                  modifierOption.text
                )}
                "
              </p>
              {modifierOption.explanatoryUrl && (
                <p>
                  See this{" "}
                  <a
                    href={modifierOption.explanatoryUrl}
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
