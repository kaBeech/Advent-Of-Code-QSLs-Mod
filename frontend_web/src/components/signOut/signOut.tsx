import { component$ } from "@builder.io/qwik";
import { useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const signOut = useAuthSignout();
  return (
    <a
      // href="/"
      onClick$={() => signOut.submit({ callbackUrl: "/" })}
    >
      [Sign Out]
    </a>
  );
});
