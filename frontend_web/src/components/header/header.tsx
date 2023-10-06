import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header>
      <div class={`flex`}>
        <div class="flex column">
          <div>Xtreme Xmas</div>
          <div>YEAR0</div>
        </div>
        <div class="flex column">
          <div class="flex">
            {" "}
            <div>[About]</div> <div>[Events]</div> <div>[Shop]</div>{" "}
            <div>[Settings]</div> <div>[Log Out]</div> <div>NAME</div>{" "}
          </div>
          <div class="flex">
            {" "}
            <div>[Calendar]</div> <div>[XX++]</div> <div>[Sponsors]</div>{" "}
            <div>[Leaderboard]</div> <div>[Stats]</div>
          </div>
        </div>
      </div>
    </header>
  );
});
