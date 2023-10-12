import { component$ } from "@builder.io/qwik";
import LogIn from "~/components/logIn/logIn";

export default component$(() => {
  return (
    <>
      <p>
        Please <LogIn /> to play!{" "}
      </p>
    </>
  );
});
