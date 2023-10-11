import { component$ } from "@builder.io/qwik";
import SignIn from "~/components/signIn/signIn";

export default component$(() => {
  return (
    <>
      <p>
        Please <SignIn /> to play!{" "}
      </p>
    </>
  );
});
