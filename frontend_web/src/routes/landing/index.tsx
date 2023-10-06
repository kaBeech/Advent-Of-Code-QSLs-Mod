import { component$ } from "@builder.io/qwik";
import Header from "~/components/header/header";
import SignIn from "~/components/signIn/signIn";
import { useAuthSession } from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  return (
    <>
      <Header />
      <p>Xtreme Xmas{session.value?.user?.email}</p>
      <SignIn />
    </>
  );
});
