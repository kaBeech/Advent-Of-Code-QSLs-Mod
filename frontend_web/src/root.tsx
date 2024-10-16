import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Xtreme Xmas Code" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ia.media-imdb.com/images/rock.jpg" />
        <meta property="og:image" content={"https://media.licdn.com/dms/image/v2/D5622AQHx-8imOhNRdg/feedshare-shrink_800/feedshare-shrink_800/0/1701397778386?e=1732147200&v=beta&t=7Wt9UWWlagSUtuCUDliVHokCZlKVIZC58K0Tx_1sf0A"} />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
