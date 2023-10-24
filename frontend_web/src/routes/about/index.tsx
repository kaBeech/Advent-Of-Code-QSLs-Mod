import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <article>
        <h1>About</h1>
        <p>
          Hi! I'm{" "}
          <a href="" class="link">
            Kyle Beechly
          </a>
          . I make Xtreme Xmas Code. I hope you like it! You can find me on{" "}
          <a href="" class="link">
            Twitter
          </a>
          ,{" "}
          <a href="" class="link">
            GitHub
          </a>
          , and{" "}
          <a href="" class="link">
            LinkedIn
          </a>
          .
        </p>
        <p>
          <em>Xtreme Xmas Code</em> is a mod/companion tool for{" "}
          <a href="" class="link">
            Advent of Code
          </a>
          , a delightful{" "}
          <a href="" class="link">
            Advent calendar
          </a>{" "}
          of small programming puzzles created by{" "}
          <a href="" class="link">
            Eric Wastl
          </a>
          . With it you can record your Advent of Code progress and each day get
          an additional modifier to that day's AoC puzzle. For example, you may
          be challenged to complete that day's puzzle using a language you've
          never used before, or without reassigning any variables.
        </p>
        <p>
          Additionally, the mod scores each game based on how you use your
          reroll tokens and provides leaderboards for ranking games based on
          this score. I hope this will provide a fun leaderboard experience{" "}
          <a href="" class="link">
            that isn't tied to a strict time schedule
          </a>
          .
        </p>
        <p>
          If you'd like to support Xtreme Xmas Code, you can do so indirectly by
          helping to{" "}
          <a href="" class="link">
            [Share
            <span class="clickShow">
              {" "}
              via{" "}
              <a href="" class="link">
                Mastodon
              </a>{" "}
              <a href="" class="link">
                Twitter
              </a>
            </span>
            ]
          </a>{" "}
          it with others, or directly via{" "}
          <a href="" class="link">
            payment options
          </a>
          . You can also support me by supporting{" "}
          <a href="https://adventofcode.com/support" class="link">
            Eric Wastl
          </a>
          , creator of Advent of Code.
        </p>
        <p>
          I'm also #OpenToWork, so if you're looking to work with a fun nerd you
          may contact me via{" "}
          <a href="" class="link">
            LinkedIn
          </a>
          ,{" "}
          <a href="" class="link">
            Email
          </a>
          , or{" "}
          <a href="" class="link">
            Twitter
          </a>
          !
        </p>
        <h2>--- Frequently Asked Questions ---</h2>
        <p>
          <em>
            I find the text on the site hard to read. Is there a high contrast
            mode?
          </em>
          There will be a high contrast alternate stylesheet. Firefox supports
          these by default (View -{">"} Page Style -{">"} High Contrast).
        </p>{" "}
        <p>
          <em>Why make a mod for Advent of Code?</em>
          Because it's fun! Pushing our boundaries and thinking laterally are a
          great way to keep our brains in shape and learn new things!
        </p>{" "}
        <p>
          Additionally, the leaderboard at{" "}
          <a href="" class="link">
            Advent of Code
          </a>
          , being a global speed-based competition,
          <a href="" class="link">
            encourages a particular playstyle
          </a>{" "}
          <a href="" class="link">
            and isn't convenient for all players' schedules
          </a>
          . I'm hoping that the score-based Xtreme Xmas Code leaderboards will
          provide an accessible alternative that rewards new learning, courage,
          and lateral thinking.
        </p>
        <p>
          <em>How does scoring work?</em>
          Scoring uses this formula XXXXXXXX...
        </p>
        <p>
          <em>How do the leaderboards work?</em>
          The leaderboards XXXXXXXX...
        </p>
        <p>
          <em>How can I post to the leaderboards?</em>
          To post a game to the learderboards, you must first mark the game as
          Public and add a Repository Link. XXXXXXXX...
        </p>
        <p>
          <em>Can I use AI to get on the leaderboards?</em> Please don't post
          games that use AI to solve most or all of your puzzle solving to the
          leaderboards. The leaderboards are built on a principle of good faith
          and I would like them to remain useful as a way for humans to interact
          and compete with each other. That being said, some challenge modifiers
          may require you (explicitly or practically) to use AI to complete
          them. Just use your best judgement and be a good sport =)
        </p>
        <p>
          <em>How does authentication work?</em> Xtreme Xmas Code uses{" "}
          <a href="" class="link">
            OAuth
          </a>{" "}
          to verify and remember your identity. You choose a{" "}
          <span class="clickable">
            [Service
            <span class="clickShow">
              {" "}
              like{" "}
              <a href="" class="link">
                GitHub
              </a>{" "}
              <a href="" class="link">
                Twitter
              </a>{" "}
              <a href="" class="link">
                Google
              </a>
            </span>
            ] to log in with and Xtreme Xmas Code receives information to
            remember who you are. This is generally public information; here are
            examples from{" "}
            <a href="" class="link">
              Reddit
            </a>{" "}
            and{" "}
            <a href="" class="link">
              GitHub
            </a>
            . Xtreme Xmas Code will remember your unique ID, names, URL, and
            image from the service you use to authenticate.
          </span>
        </p>
        <h2>--- Credits ---</h2>
        <p>
          Xtreme Xmas Code:{" "}
          <a href="" class="link">
            Kyle Beechly
          </a>
        </p>
        <p>
          Advent of Code:{" "}
          <a href="" class="link">
            Eric Wastl
          </a>
        </p>
        <p>XXC Beta Testing:</p>
        <ul>
          <li>
            -{" "}
            <a href="" class="link">
              Your name here!
            </a>
          </li>
          <li>
            -{" "}
            <a href="" class="link">
              Your name here!
            </a>
          </li>
        </ul>
        <p>Playing: You!</p>
        <h2>--- Legal ---</h2>
        <p>TBA</p>
      </article>
    </>
  );
});
