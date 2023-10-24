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
          <em>Xtreme Xmas Code</em> is a companion to{" "}
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
          .
        </p>
        <p>XXXXXXX</p>
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
          . I'm also #OpenToWork, so if you're looking to work with a fun geek
          you can{" "}
          <a href="" class="link">
            [Contact Me
            <span class="clickShow">
              {" "}
              via{" "}
              <a href="" class="link">
                LinkedIn
              </a>{" "}
              <a href="" class="link">
                Email
              </a>{" "}
              <a href="" class="link">
                Twitter
              </a>
            </span>
            ]
          </a>{" "}
          directly
        </p>
        <h2>--- Frequently Asked Questions ---</h2>
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
          <p>
            <em>How does scoring work?</em>
            Scoring uses this formula XXXXXXXX...
          </p>
        </p>
        <p>
          <em>
            I find the text on the site hard to read. Is there a high contrast
            mode?
          </em>
          There is a high contrast alternate stylesheet. Firefox supports these
          by default (View -{">"} Page Style -{">"} High Contrast).
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
      </article>
    </>
  );
});
