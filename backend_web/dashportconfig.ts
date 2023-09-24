import GitHubStrategy from "https://deno.land/x/dashport_github@v1.0.1/mod.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { getUserById, upsertUser } from "./db.ts";

const envVars = await config();
export const gitHubStrategy = new GitHubStrategy({
  client_id: envVars.GITHUB_CLIENT_ID,
  client_secret: envVars.GITHUB_CLIENT_SECRET,
  redirect_uri: "http://127.0.0.1:8000/privatepage",
});

export const serializerA = async (userInfo: any) => {
  const serializedId = self.crypto.randomUUID();

  try {
    await upsertUser(serializedId);
    return serializedId;
  } catch (err) {
    // return new Error(err);
    return err;
  }
};

export const deserializerA = async (serializedId: string | number) => {
  try {
    const userInfo = await getUserById(serializedId);
    return userInfo;
  } catch (err) {
    // return new Error(err);
    return err;
  }
};

export const test = "test";
