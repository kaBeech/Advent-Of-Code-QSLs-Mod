import { component$, useStore } from "@builder.io/qwik";
import { useAuthSignin } from "~/routes/plugin@auth";
import { useAuthSignout } from "~/routes/plugin@auth";

interface LoginProps {
  isLoggedIn: boolean;
  toggleLoggedIn: Function | any;
}

export default component$((props: LoginProps) => {
  const logIn = useAuthSignin();
  const logOut = useAuthSignout();
  const state = useStore({
    isLoggedIn: props.isLoggedIn,
  });
  return (
    <>
      {state.isLoggedIn ? (
        <a
          onClick$={() => {
            logOut.submit({ callbackUrl: "/" });
            state.isLoggedIn = false;
          }}
        >
          °Log Out°
        </a>
      ) : (
        <a
          onClick$={() => {
            logIn.submit({
              providerId: "github",
            });
            state.isLoggedIn = true;
          }}
        >
          °Log In°
        </a>
      )}
    </>
  );
});
