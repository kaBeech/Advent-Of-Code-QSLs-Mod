import { oauth2Client } from "../../util/oauth2Client.ts";

export const logInWithOAuth = async (ctx: any) => {
  // Construct the URL for the authorization redirect and get a PKCE codeVerifier
  const { uri, codeVerifier } = await oauth2Client.code.getAuthorizationUri();

  // Store both the state and codeVerifier in the user session
  ctx.state.session.flash("codeVerifier", codeVerifier);

  // Redirect the user to the authorization endpoint
  ctx.response.status = 302;
  ctx.response.headers.set("Location", uri);
  ctx.response.body = { "uri": uri };
  // ctx.response.redirect(uri);
};
