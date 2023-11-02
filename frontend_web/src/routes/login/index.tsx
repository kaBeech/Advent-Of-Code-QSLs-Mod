import { component$ } from "@builder.io/qwik";
import LogIn from "~/components/logIn/logIn";

export default component$(() => {
  return (
    <>
      <h1 class="logo stitch logoWhite">
        {"<"}
        <span class="logoRed"> Welcome! </span>
        {"<"}
      </h1>
      <p>
        Please <LogIn /> to play!{" "}
      </p>
      <br />
      <br />
    </>
  );
});
