import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);
  serverFetcher(`user`, "PUT", userId);
  return (
    <>
      <p>TEST{session.value?.user?.email}</p>
    </>
  );
});
