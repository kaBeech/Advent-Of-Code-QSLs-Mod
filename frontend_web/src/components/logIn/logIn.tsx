import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "~/routes/plugin@auth";

export default component$(() => {
  const logIn = useAuthSignin();
  return (
    <>
      <a
        onClick$={() => {
          logIn.submit({ providerId: "github" });
        }}
        class="textGreen"
      >
        °GitHub°
      </a>{" "}
      or{" "}
      <a
        onClick$={() => {
          logIn.submit({ providerId: "reddit" });
        }}
        class="textRed"
      >
        °Reddit°
      </a>
    </>
  );
});
