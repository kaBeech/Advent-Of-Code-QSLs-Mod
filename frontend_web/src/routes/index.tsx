import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
import { useAuthSession } from "./plugin@auth";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const session = useAuthSession();
  // This is to create a user in the database after signing in for the first time
  if (session.value) {
    const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);
    serverFetcher(`user`, "PUT", userId);
  }
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
      </div>

      <div class="container container-flex">
        <div></div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
