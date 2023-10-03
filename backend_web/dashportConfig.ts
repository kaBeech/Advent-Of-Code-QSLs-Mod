import LocalStrategy from "https://deno.land/x/dashport_localauth/mod.ts";
// import GoogleStrategy from "https://deno.land/x/dashport_google/mod.ts";
import GitHubStrategy from "https://deno.land/x/dashport_github/mod.ts";
import {
  createUser,
  getUserById,
  getUserBySerializedId,
  getUserByUsername,
  upsertUser,
} from "./db.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

export const localStrategy = new LocalStrategy({
  usernamefield: "username",
  passwordfield: "password",
  authorize: async (username: string, password: string) => {
    try {
      const user = await getUserByUsername(username);
      if (user.password === password) {
        return user;
      }
      return false;
    } catch (err) {
      return err;
      // or return new Error(err);
    }
  },
});

// export const googStrat = new GoogleStrategy({
//   client_id: "client-id-here",
//   client_secret: "client-secret-here",
//   redirect_uri: "http://localhost:8000/privatepage",
//   response_type: "code",
//   scope: "profile email openid",
//   grant_type: "authorization_code",
// });

const dotEnv = await config();
const githubClientId = Deno.env.get("GITHUB_CLIENT_ID");
const githubClientSecret = Deno.env.get("GITHUB_CLIENT_SECRET");

export const ghStrat = new GitHubStrategy({
  client_id: githubClientId!,
  client_secret: githubClientSecret!,
  redirect_uri: "http://localhost:8000/privatepage",
});

export const serializerA = async (userInfo: any) => {
  const serializedId = Math.floor(Math.random() * 1000000000).toString();
  userInfo.serializedId = serializedId;

  try {
    await upsertUser(
      userInfo.id,
      userInfo.username,
      userInfo.password,
      userInfo.serializedId,
    );
    return serializedId;
  } catch (err) {
    return err;
    // or return new Error(err);
  }
};

export const deserializerA = async (serializedId: string) => {
  try {
    const userInfo = await getUserBySerializedId(serializedId);
    return userInfo;
  } catch (err) {
    return err;
    // or return new Error(err);
  }
};
