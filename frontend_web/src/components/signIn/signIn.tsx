import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "~/routes/plugin@auth";

// If we can guarantee that the user is redirected to the /test page,
// then auth works great

export default component$(() => {
  const signIn = useAuthSignin();
  return (
    <a
      // href="/test"
      onClick$={() => {
        signIn.submit({
          providerId: "github",
          // options: { callbackUrl: "test" },
        });
      }}
    >
      [Sign In]
    </a>
  );
});
