import { server$ } from "@builder.io/qwik-city";
import { getFormData } from "./getFormData";

export const serverFetcher = server$(async function (
  route: string,
  method: string,
  username: string,
  password: string,
) {
  //   const xtremeXmasAPI = this.env.get("XTREME_XMAS_API");
  // if (xtremeXmasAPI == undefined) {
  //   console.error("XTREME_XMAS_API string not found upon request");
  // }
  const xtremeXmasAPI = "http://127.0.0.1:8000";
  const abortController = new AbortController();
  if (method !== `GET`) {
    const bodyData = { username, password };
    const bodyFormData = getFormData(bodyData);
    const res = await fetch(`${xtremeXmasAPI}/${route}`, {
      signal: abortController.signal,
      method,
      body: bodyFormData,
    });
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(`${xtremeXmasAPI}/${route}`, {
      signal: abortController.signal,
      method,
    });
    const data = await res.json();
    return data;
  }
});
