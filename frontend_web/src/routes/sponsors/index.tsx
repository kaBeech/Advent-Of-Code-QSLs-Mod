import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import sponsors from "~/data/sponsors";

export default component$(() => {
  return (
    <article>
      <h1>
        Xtreme Xmas Code is made possible in part by the following sponsors:
      </h1>
      <ul>
        {sponsors.map((sponsor, index) => (
          <li key={`sponsor-${index}`} class={`marginVert2`}>
            <a href={sponsor.url}>°{sponsor.name}°</a> - {sponsor.textLine1}{" "}
            <br /> {sponsor.textLine2}
          </li>
        ))}
      </ul>
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Sponsors",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
