import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.2/mod.ts";

const dotEnv = await config();

export const oauth2Client = new OAuth2Client({
  clientId: dotEnv.GITHUB_CLIENT_ID,
  clientSecret: dotEnv.GITHUB_CLIENT_SECRET,
  authorizationEndpointUri: "https://github.com/login/oauth/authorize",
  tokenUri: "https://github.com/login/oauth/access_token",
  redirectUri: "http://127.0.0.1:8000/oauth2/callback",
  defaults: {
    scope: "read:user",
  },
});
