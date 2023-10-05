import { component$ } from "@builder.io/qwik";
import SignIn from "~/components/signIn/signIn";
import { useAuthSession } from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  console.log(session.value);
  return (
    <>
      <p>TEST{session.value?.user?.email}</p>
      <SignIn></SignIn>
    </>
  );
});
