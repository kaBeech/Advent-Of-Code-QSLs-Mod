import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();
  return (
    <a
      onClick$={() => {
        signIn.submit({});
      }}
      class="textGreen"
    >
      °Log In°
    </a>
  );
});
