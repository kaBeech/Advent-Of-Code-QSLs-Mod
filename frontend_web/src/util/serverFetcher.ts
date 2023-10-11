import { server$ } from "@builder.io/qwik-city";
import { getFormData } from "./getFormData";

export const serverFetcher = server$(async function (
  route: string,
  method: string,
  username?: string,
  password?: string,
) {
  const xtremeXmasAPI = this.env.get("XTREME_XMAS_API")!;
  const xmasSecret = this.env.get("XMAS_SECRET")!;
  if (xtremeXmasAPI == undefined) {
    console.error("XTREME_XMAS_API string not found upon request");
  }
  const abortController = new AbortController();
  if (username && password && method !== `GET`) {
    const bodyData = { username, password };
    const bodyFormData = getFormData(bodyData);
    const res = await fetch(`${xtremeXmasAPI}/${route}`, {
      signal: abortController.signal,
      method,
      headers: {
        Authorization: `Bearer ${xmasSecret} ${username}`,
      },
      body: bodyFormData,
    });
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(`${xtremeXmasAPI}/${route}`, {
      signal: abortController.signal,
      method,
      headers: {
        Authorization: `Bearer ${xmasSecret} ${username}`,
      },
    });
    const data = await res.json();
    return data;
  }
});
