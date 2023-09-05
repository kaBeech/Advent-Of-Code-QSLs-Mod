import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const challengeModifierData: Prisma.ChallengeModifierCreateInput[] = [
  {
    name: "new_codebase_language",
    text: "in a programming language not yet used in this codebase",
  },
  {
    name: "new_language",
    text: "in a programming language you've never used before",
  },
  {
    name: "quickly",
    text: "as quickly as you can",
  },
  {
    name: "language_box_1",
    text: "using a random programming language from Language Box 1: ",
    hasOptions: true,
  },
  {
    name: "language_box_2",
    text: "using a random programming language from Language Box 2: ",
    hasOptions: true,
  },
  {
    name: "language_box_3",
    text: "using a random programming language from Language Box 3: ",
    hasOptions: true,
  },
  {
    name: "testing",
    text: "with thorough testing",
  },
  {
    name: "error_handling",
    text: "with thorough error handling",
  },
  {
    name: "comments",
    text: "with thorough comments",
  },
  {
    name: "performant",
    text: "in the most performant way you can",
  },
  {
    name: "readable",
    text: "in the most readable way you can",
  },
  {
    name: "fewest_lines",
    text: "using as few lines of code as you can",
  },
  { name: "single_file", text: "in a single file" },
  {
    name: "small_functions",
    text: "using as small of functions (in separate modules) as you can",
  },
  {
    name: "smallest_size",
    text: "with the smallest application size you can",
  },
  {
    name: "fewest_chars",
    text: "using as few characters as you can (code golf)",
  },
  {
    name: "no_reassignment",
    text: "without reassigning any variables",
  },
  {
    name: "fewest_vars",
    text: "declaring as few variables as you can",
  },
  {
    name: "new_natural_language",
    text:
      "making declarations in a natural language not yet used in this codebase (e.g. Spanish)",
  },
  {
    name: "non_latin",
    text:
      "making declarations in a natural language using a non-Latin-based writing system (e.g. Arabic)",
  },
  {
    name: "chat_gpt",
    text:
      "using ChatGPT exclusively (no editing Chat's responses - you must edit your prompts!)",
  },
  { name: "no_loops", text: "using no loops" },
  { name: "no_conditionals", text: "using no conditionals" },
  { name: "no_comments", text: "using no comments" },
  { name: "no_whitespace", text: "using no whitespace" },
  {
    name: "no_numbers",
    text:
      "using no numbers (you may convert any numbers in your challengeInput)",
  },
  { name: "no_strings", text: "using no strings" },
  { name: "no_arrays", text: "using no arrays" },
  {
    name: "no_objects",
    text: "using no objects (that aren't another basic data type)",
  },
];

for (const u of challengeModifierData) {
  const challengeModifier = await prisma.challengeModifier.upsert({
    where: { name: u.name },
    update: {},
    create: u,
  });
  console.log(`Created challenge modifier with id: ${challengeModifier.id}`);
}

const modifierOptionData: Prisma.ModifierOptionCreateInput[] = [
  {
    name: "language_box_1_javascript",
    text: "JavaScript",
    ChallengeModifier: {
      connect: {
        name: "language_box_1",
      },
    },
  },
  {
    name: "language_box_1_typescript",
    text: "TypeScript",
    ChallengeModifier: {
      connect: {
        name: "language_box_1",
      },
    },
  },
  {
    name: "language_box_1_python",
    text: "Python",
    ChallengeModifier: {
      connect: {
        name: "language_box_1",
      },
    },
  },
  {
    name: "language_box_1_r",
    text: "R",
    ChallengeModifier: {
      connect: {
        name: "language_box_1",
      },
    },
  },
  {
    name: "language_box_1_ruby",
    text: "Ruby",
    ChallengeModifier: {
      connect: {
        name: "language_box_1",
      },
    },
  },
  {
    name: "language_box_1_java",
    text: "Java",
    ChallengeModifier: {
      connect: {
        name: "language_box_1",
      },
    },
  },
  {
    name: "language_box_1_c",
    text: "C",
    ChallengeModifier: {
      connect: {
        name: "language_box_1",
      },
    },
  },
  {
    name: "language_box_1_go",
    text: "Go",
    ChallengeModifier: {
      connect: {
        name: "language_box_1",
      },
    },
  },
  {
    name: "language_box_2_cpp",
    text: "C++",
    ChallengeModifier: {
      connect: {
        name: "language_box_2",
      },
    },
  },
  {
    name: "language_box_2_rust",
    text: "Rust",
    ChallengeModifier: {
      connect: {
        name: "language_box_2",
      },
    },
  },
  {
    name: "language_box_2_lisp",
    text: "LISP",
    ChallengeModifier: {
      connect: {
        name: "language_box_2",
      },
    },
  },
  {
    name: "language_box_2_haskell",
    text: "Haskell",
    ChallengeModifier: {
      connect: {
        name: "language_box_2",
      },
    },
  },
  {
    name: "language_box_2_scala",
    text: "Scala",
    ChallengeModifier: {
      connect: {
        name: "language_box_2",
      },
    },
  },
  {
    name: "language_box_2_prolog",
    text: "Prolog",
    ChallengeModifier: {
      connect: {
        name: "language_box_2",
      },
    },
  },
  {
    name: "language_box_2_csharp",
    text: "C#",
    ChallengeModifier: {
      connect: {
        name: "language_box_2",
      },
    },
  },
  {
    name: "language_box_3_webassembly",
    text: "WebAssembly",
    ChallengeModifier: {
      connect: {
        name: "language_box_3",
      },
    },
  },
  {
    name: "language_box_3_algol",
    text: "ALGOL",
    ChallengeModifier: {
      connect: {
        name: "language_box_3",
      },
    },
  },
  {
    name: "language_box_3_cobol",
    text: "COBOL",
    ChallengeModifier: {
      connect: {
        name: "language_box_3",
      },
    },
  },
  {
    name: "language_box_3_fortran",
    text: "FORTRAN",
    ChallengeModifier: {
      connect: {
        name: "language_box_3",
      },
    },
  },
  {
    name: "language_box_3_lolcode",
    text: "LOLCODE",
    ChallengeModifier: {
      connect: {
        name: "language_box_3",
      },
    },
  },
  {
    name: "language_box_3_jsfuck",
    text: "JSFuck",
    ChallengeModifier: {
      connect: {
        name: "language_box_3",
      },
    },
  },
];

for (const u of modifierOptionData) {
  const modifierOption = await prisma.modifierOption.upsert({
    where: { name: u.name },
    update: {},
    create: u,
  });
  console.log(`Created modifier option with id: ${modifierOption.id}`);
}

console.log(`Seeding finished.`);

await prisma.$disconnect();
