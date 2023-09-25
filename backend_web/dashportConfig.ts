// import GoogleStrategy from "https://deno.land/x/dashport_google/mod.ts";
import GitHubStrategy from "https://deno.land/x/dashport_github/mod.ts";
import { createUser, getUserById } from "./db.ts";

// export const googStrat = new GoogleStrategy({
//   client_id: "client-id-here",
//   client_secret: "client-secret-here",
//   redirect_uri: "http://localhost:8000/privatepage",
//   response_type: "code",
//   scope: "profile email openid",
//   grant_type: "authorization_code",
// });

export const ghStrat = new GitHubStrategy({
  client_id: "1cfb5aa9850ade3203a3",
  client_secret: "3b3de07f53954481c2453993a15af07147261214",
  redirect_uri: "http://localhost:8000/privatepage",
});

export const serializerA = async (userInfo: any) => {
  const serializedId = Math.floor(Math.random() * 1000000000);
  userInfo.id = serializedId;

  try {
    await createUser(
      serializedId.toString(),
      userInfo.username,
      userInfo.password,
    );
    return serializedId;
  } catch (err) {
    return err;
    // or return new Error(err);
  }
};

export const deserializerA = async (serializedId: string) => {
  try {
    const userInfo = await getUserById(serializedId);
    return userInfo;
  } catch (err) {
    return err;
    // or return new Error(err);
  }
};
