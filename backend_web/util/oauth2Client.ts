import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.2/mod.ts";

const _dotEnv = await config();

const githubClientId = "GITHUB_CLIENT_ID";
const githubClientSecret = "GITHUB_CLIENT_SECRET";
export const oauth2Client = new OAuth2Client({
  clientId: githubClientId!,
  clientSecret: githubClientSecret!,
  authorizationEndpointUri: "https://github.com/login/oauth/authorize",
  tokenUri: "https://github.com/login/oauth/access_token",
  redirectUri: "http://127.0.0.1:8000/oauth2/callback",
  defaults: {
    scope: "read:user",
  },
});
