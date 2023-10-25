import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <article>
        <h1 class="visualHide">--- About ---</h1>
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
          <em>Xtreme Xmas Code</em> is a mod/companion app for{" "}
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
          this score. I hope this will provide a brain-stretching leaderboard
          experience{" "}
          <a href="" class="link">
            that isn't tied to a strict time schedule
          </a>
          .
        </p>
        <p>
          If you'd like to support Xtreme Xmas Code, you can do so indirectly by
          helping to{" "}
          <span class="link">
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
          </span>{" "}
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
          I'm also <em>#OpenToWork</em>, so if you're looking to work with a fun
          nerd you may contact me via{" "}
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
        <h2>--- Disclaimer ---</h2>
        <p>
          <em>Xtreme Xmas Code is under construction</em> and has not officially
          launched.
        </p>
        <p>
          I'm planning to enter a public Beta Testing phase in early November
          2023. Before then,{" "}
          <em>
            any data submitted to Xtreme Xmas Code is subject to modification or
            deletion without notice
          </em>
          . If you're eager to start using XXC for more permanent projects and
          it hasn't launched yet, please{" "}
          <a href="mailto:contact@kabeech.com" class="link">
            send me an email
          </a>{" "}
          and I'll see what I can do.
        </p>
        <h2>--- Rules ---</h2>
        <p>
          Each day you may roll a new <em>Challenge Modifier</em>. Our example
          Challenge Modifier will be{" "}
          <em>
            "...using a random language from the Functional Programming Box."
          </em>
        </p>
        <p>
          Some Challenge Modifiers have additional <em>Modifier Options</em>.
          Our example Challenge Modifier has Modifier Options from the
          Functional Programming Language Box. If you roll a Challenge Modifier
          that has Modifier Options, a Modifier Option will be automatically
          rolled as well. Our example Modifier Option will be{" "}
          <em>"Haskell."</em>
        </p>
        <p>
          Therefore the full text of our example Challenge Modifier including
          its Modifier Option will be{" "}
          <em>
            "You must complete this challenge using this language from the
            Functional Programming Box: Haskell."
          </em>
        </p>
        <p>
          At the start of a new game you will be given 12 <em>Reroll Tokens</em>
          . You may spent 2 Reroll Tokens to reroll your Challenge Modifier. If
          your Challenge Modifier has a Modifier Option, you may spend 1 Token
          to reroll the Modifier Option.
        </p>
        <p>
          You will earn 1 Reroll Token whenever you complete Part 1 or Part 2 of
          a puzzle (i.e whenever you earn a Gold Star in Advent of Code).
        </p>
        <p>
          In our example, say we are in Day 1 and are dissatisfied with our
          Challenge Modifier. We decide to reroll our Modifier Option for one
          Reroll Token, giving us{" "}
          <em>
            "You must complete this challenge using this language from the
            Functional Programming Box: Erlang."
          </em>
        </p>
        <p>
          We don't want to use Erlang either, so we choose to reroll the whole
          Challenge Modifier for 2 Reroll Tokens. This gives us{" "}
          <em>
            "You must complete this challenge making declarations in a natural
            language not yet used in this codebase (e.g. Spanish)."
          </em>{" "}
          ¡Vamos!
        </p>
        <p>
          After completing Part 2 of Day 1 we have spent 3 Tokens and earned 2,
          which combined with the 12 we started with gives us 11 Reroll Tokens
          at the start of Day 2.
        </p>
        <h2>--- Scoring ---</h2>
        <p>
          The <em>Basic Scoring Formula</em> is{" "}
          <code>10 * T + 20 * P2 + B</code> where <em>T</em> is the number of{" "}
          <em>unspent reroll Tokens</em>, <em>P2</em> is the number of{" "}
          <em>tokens spent during Part 2</em>
          (up to a maximum of 2 per day), and <em>B</em> is the{" "}
          <em>end-of-game Bonus</em>
        </p>
        <p>
          The <em>End-Game Bonus Formula</em> is <code>300 - 10 * S</code>, to a
          minimum of 0, where <em>S</em> is the{" "}
          <em>total number of tokens Spent</em>
        </p>
        <p>
          If you spend at least 2 reroll tokens during Part 2 of every day, the{" "}
          <em>Virtuoso Scoring Formula</em> is used instead. It is{" "}
          <code>1120 + 10 * T - 10 * P1</code> where <em>T</em> is the number of{" "}
          <em>unspent reroll Tokens</em> and <em>P1</em> is the number of{" "}
          <em>tokens spent during Part 1</em>
        </p>{" "}
        <p>
          Each day's individual score is a rough estimation of that day's effect
          on the overall score, assuming use of the Basic Scoring Formula. The{" "}
          <em>Day Score Formula</em> is <code>10 * T + 20 * P2 - 10 * P1</code>,
          where <em>T</em> is the number of <em>unspent reroll Tokens</em>,{" "}
          <em>P2</em> is the number of <em>tokens spent during Part 2</em> (up
          to a maximum of 2), and <em>P1</em> is the number of{" "}
          <em>tokens spent during Part 1</em>.
        </p>
        <h2>--- Ranks ---</h2>
        <p>
          Upon completing Day 25 of a game you will be awarded a <em>Rank</em>{" "}
          based on your score. The ranks are:
        </p>
        <ul>
          <li>
            0+ points: <em>Champion</em>
          </li>
          <li>
            200+ points: <em>Gnarly Champion</em>
          </li>
          <li>
            400+ points: <em>Radical Champion</em>
          </li>
          <li>
            600+ points: <em>Righteous Champion</em>
          </li>
          <li>
            800+ points: <em>Epic Champion</em>
          </li>
          <li>
            920+ points: <em>Flawless Champion</em>
          </li>
          <li>
            1000+ points: <em>Legendary Champion</em>
          </li>
          <li>
            1100+ points: <em>Santaic Champion</em>
          </li>
          <li>
            1240+ points: <em>Godlike Champion</em>
          </li>
        </ul>
        <h2>--- Public Links ---</h2>
        <p>
          You can generate a <em>Public Link</em> to share your work with the
          world by marking your game as Public. TBA...
        </p>
        <h2>--- Frequently Asked Questions ---</h2>
        <p>
          <em>
            I find the text on the site hard to read. Is there a high contrast
            mode?
          </em>
          There will be a high contrast alternate stylesheet. Firefox supports
          these by default (View -{">"} Page Style -{">"} High Contrast).
        </p>
        <p>
          <em>Why make a mod for Advent of Code?</em> Because it's fun! Using
          randomized challenges to push our boundaries and encourage us to think
          outside the box is a great way to help keep our brains in shape!
        </p>
        <p>
          Additionally, XXC adds to AoC leaderboard options. Being a global
          speed-based competition, the leaderboard at{" "}
          <a href="" class="link">
            Advent of Code
          </a>{" "}
          <a href="" class="link">
            encourages a particular playstyle
          </a>{" "}
          and{" "}
          <a href="" class="link">
            isn't convenient for all players' schedules
          </a>
          . I'm hoping that the score-based Xtreme Xmas Code leaderboards will
          provide an accessible alternative that rewards new learning, courage,
          and lateral thinking.
        </p>
        <p>
          <em>How do the leaderboards work?</em> The leaderboards are opt-in;
          you must post your game manually for it to show up. Games on the
          boards are ranked by score. There are two boards for each year:
          In-Season and All-Time. To qualify for the In-Season board, your game
          must be completed and posted during the specified year. For example,
          to qualify for the 2023 In-Season board your game must be completed
          and posted before January 1, 2024.
        </p>
        <p>
          <em>How can I post to the leaderboards?</em> To post a game to the
          leaderboards, you must first mark your game as Public and add a
          Repository Link. TBA... If you mark your game as Private or remove its
          Repository Link, it will automatically be removed from the
          leaderboards. TBA...
        </p>
        <p>
          <em>Can I use AI to get on the leaderboards?</em> Please don't post
          games that use AI to do most or all of your puzzle solving to the
          leaderboards. The leaderboards are built on a principle of good faith
          and I would like them to remain useful as a way for humans to interact
          and compete with each other. That being said, mild use of AI tools is
          permitted and some challenge modifiers may even require the use of AI.
          Just use your best judgement and be a good sport =)
        </p>
        <p>
          <em>How do you deter cheating? </em>
          We use a community-based reputation system and focus on showing our
          work as players. Each game posted to the leaderboards must include a
          link to a public repository showing the code used to solve each
          puzzle. Players can upvote and downvote games on the leaderboards to
          either affirm or question their integrity. If a game has 5 or more
          downvotes and less upvotes than downvotes, the game will by default
          not be shown on the leaderboards (this setting can be changed in the
          filter section). I may also review and hide or remove games manually.
        </p>
        <p>
          To downvote a game you must include the reason you consider the game
          invalid or dishonest. If your game gets hidden and you feel this is
          unjust, you may submit a petition for me to verify your game. Any
          player who I feel is abusing the leaderboards, including the voting
          and petitions process, may be subject to revocation of privileges,
          including being banned from voting in or posting to the leaderboards.
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
