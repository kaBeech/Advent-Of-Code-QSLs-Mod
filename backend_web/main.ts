import { Application, Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions@v4.0.5/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

import { router } from "./router.ts";

type AppState = {
  session: Session;
};

const app = new Application<AppState>();

app.use(
  oakCors({
    origin: "http://127.0.0.1:5173",
  }),
);
app.use(Session.initMiddleware());
app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx: Context) => {
  ctx.response.status = 404;
  const body = {
    message:
      `404 | Page not found! Requested ${ctx.request.method} on ${ctx.request.url}`,
  };
  ctx.response.body = body;
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

console.log(`Server running on http://localhost:8000`);

await app.listen({ port: 8000 });
