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
    standard: true,
    isPublic: true,
  },
  {
    name: "new_language",
    text: "in a programming language you've never used before",
    standard: true,
    isPublic: true,
  },
  {
    name: "quickly",
    text: "as quickly as you can",
    standard: true,
    isPublic: true,
  },
  {
    name: "c_like_language_box",
    text: "using a random selection from the C-Like Languages Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "general_purpose_programming_box",
    text: "using a random selection from the General Purpose Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "object_oriented_programming_box",
    text: "using a random selection from the Object Oriented Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "functional_programming_box",
    text: "using a random selection from the Functional Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "legacy_programming_box",
    text: "using a random selection from the Legacy Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "visual_programming_box",
    text: "using a random selection from the Visual Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "esoteric_programming_box",
    text: "using a random selection from the Esoteric Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "text_editor_box",
    text: "using a random selection from the Text Editor Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "testing",
    text: "with thorough testing",
    standard: true,
    isPublic: true,
  },
  {
    name: "error_handling",
    text: "with thorough error handling",
    standard: true,
    isPublic: true,
  },
  {
    name: "comments",
    text: "with thorough comments",
    standard: true,
    isPublic: true,
  },
  {
    name: "performant",
    text: "in the most performant way you can",
    standard: true,
    isPublic: true,
  },
  {
    name: "readable",
    text: "in the most readable way you can",
    standard: true,
    isPublic: true,
  },
  {
    name: "fewest_lines",
    text: "using as few lines of code as you can",
    standard: true,
    isPublic: true,
  },
  {
    name: "single_file",
    text: "in a single file",
    standard: true,
    isPublic: true,
  },
  {
    name: "small_functions",
    text: "using as small of functions (in separate modules) as you can",
    standard: true,
    isPublic: true,
  },
  {
    name: "smallest_size",
    text: "with the smallest application size you can",
    standard: true,
    isPublic: true,
  },
  {
    name: "fewest_chars",
    text: "using as few characters as you can (code golf)",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_reassignment",
    text: "without reassigning any variables",
    standard: true,
    isPublic: true,
  },
  {
    name: "fewest_vars",
    text: "declaring as few variables as you can",
    standard: true,
    isPublic: true,
  },
  {
    name: "new_natural_language",
    text:
      "making declarations in a natural language not yet used in this codebase (e.g. Spanish)",
    standard: true,
    isPublic: true,
  },
  {
    name: "non_latin",
    text:
      "making declarations in a natural language using a non-Latin-based writing system (e.g. Arabic)",
    standard: true,
    isPublic: true,
  },
  {
    name: "chat_gpt",
    text:
      "by writing a program using ChatGPT (the free, GPT-3.5 version) exclusively (no editing Chat's responses - you must edit your prompts!)",
    standard: true,
    isPublic: true,
  },
  { name: "no_loops", text: "using no loops", standard: true, isPublic: true },
  {
    name: "no_conditionals",
    text: "using no conditionals",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_comments",
    text: "using no comments",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_whitespace",
    text: "using no whitespace",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_numbers",
    text:
      "using no numbers (you may convert any numbers in your challengeInput)",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_strings",
    text: "using no strings",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_arrays",
    text: "using no arrays",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_objects",
    text: "using no objects (that aren't another basic data type)",
    standard: true,
    isPublic: true,
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
  // {
  //   ChallengeModifier: {
  //     connect: {
  //       name: "language_box_1",
  //     },
  //   },
  //   name: "language_box_1_r",
  //   text: "R",
  //   standard: true,
  //   isPublic: true,
  // },
  // {
  //   ChallengeModifier: {
  //     connect: {
  //       name: "language_box_2",
  //     },
  //   },
  //   name: "language_box_2_prolog",
  //   text: "Prolog",
  //   standard: true,
  //   isPublic: true,
  // },
  // {
  //   ChallengeModifier: {
  //     connect: {
  //       name: "language_box_2",
  //     },
  //   },
  //   name: "language_box_2_pascal",
  //   text: "Pascal",
  //   standard: true,
  //   isPublic: true,
  // },
  // {
  //   ChallengeModifier: {
  //     connect: {
  //       name: "language_box_3",
  //     },
  //   },
  //   name: "language_box_3_webassembly",
  //   text: "WebAssembly",
  //   standard: true,
  //   isPublic: true,
  // },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_language_box",
      },
    },
    name: "c_like_language_box_c",
    text: "C",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_language_box",
      },
    },
    name: "c_like_language_box_csharp",
    text: "C#",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_language_box",
      },
    },
    name: "c_like_language_box_cpp",
    text: "C++",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_language_box",
      },
    },
    name: "c_like_language_box_carbon",
    text: "Carbon",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_language_box",
      },
    },
    name: "c_like_language_box_go",
    text: "Go",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_language_box",
      },
    },
    name: "c_like_language_box_holyc",
    text: "HolyC",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_language_box",
      },
    },
    name: "c_like_language_box_rust",
    text: "Rust",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_language_box",
      },
    },
    name: "c_like_language_box_zig",
    text: "Zig",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "general_purpose_programming_box",
      },
    },
    name: "general_purpose_programming_box_java",
    text: "Java",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "general_purpose_programming_box",
      },
    },
    name: "general_purpose_programming_box_javascript",
    text: "JavaScript",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "general_purpose_programming_box",
      },
    },
    name: "general_purpose_programming_box_typescript",
    text: "TypeScript",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "general_purpose_programming_box",
      },
    },
    name: "general_purpose_programming_box_python",
    text: "Python",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "object_oriented_programming_box",
      },
    },
    name: "object_oriented_programming_box_ruby",
    text: "Ruby",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "object_oriented_programming_box",
      },
    },
    name: "object_oriented_programming_box_smalltalk",
    text: "Smalltalk",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "object_oriented_programming_box",
      },
    },
    name: "object_oriented_programming_box_scala",
    text: "Scala",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_commonlisp",
    text: "Common Lisp",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_scheme",
    text: "Scheme",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_racket",
    text: "Racket",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_clojure",
    text: "Clojure",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_erlang",
    text: "Erlang",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_elixir",
    text: "Elixir",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_haskell",
    text: "Haskell",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_ocaml",
    text: "OCaml",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_elm",
    text: "Elm",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "functional_programming_box",
      },
    },
    name: "functional_programming_box_fsharp",
    text: "F#",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_programming_box",
      },
    },
    name: "legacy_programming_box_algol",
    text: "ALGOL",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_programming_box",
      },
    },
    name: "legacy_programming_box_basic",
    text: "BASIC",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_programming_box",
      },
    },
    name: "legacy_programming_box_cobol",
    text: "COBOL",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_programming_box",
      },
    },
    name: "legacy_programming_box_fortran",
    text: "FORTRAN",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_programming_box",
      },
    },
    name: "visual_programming_box_scratch",
    text: "Scratch",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_programming_box",
      },
    },
    name: "visual_programming_box_blockly",
    text: "Blockly",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_programming_box",
      },
    },
    name: "visual_programming_box_greenfoot",
    text: "Greenfoot",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_programming_box",
      },
    },
    name: "visual_programming_box_puredata",
    text: "Pure Data",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_programming_box",
      },
    },
    name: "visual_programming_box_nodered",
    text: "Node-RED",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_programming_box",
      },
    },
    name: "visual_programming_box_drakon",
    text: "DRAKON",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_golfscript",
    text: "GolfScript",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_intercal",
    text: "INTERCAL",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_unlambda",
    text: "Unlambda",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_piet",
    text: "Piet",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_befunge",
    text: "Befunge",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_brainfuck",
    text: "Brainfuck",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_jsfuck",
    text: "JSFuck",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_chicken",
    text: "Chicken",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_shakespeare",
    text: "Shakespeare",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_rockstar",
    text: "Rockstar",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_storyteller",
    text: "Storyteller",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_lolcode",
    text: "LOLCODE",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_programming_box",
      },
    },
    name: "esoteric_programming_box_chef",
    text: "Chef",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_vim",
    text: "Vim",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_emacs",
    text: "Emacs",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_eclipse",
    text: "Eclipse",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_netbeans",
    text: "NetBeans",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_vscode",
    text: "Visual Studio Code",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_sublime",
    text: "Sublime Text",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_nano",
    text: "Nano",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_sysdef",
    text: "Your system default text editor (e.g. gedit, TextEdit, Notepad)",
    standard: true,
    isPublic: true,
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

const rankData: Prisma.RankCreateInput[] = [
  {
    name: "Champion",
    minimumScore: 0,
  },
  {
    name: "Gnarly Champion",
    minimumScore: 100,
  },
  {
    name: "Tubular Champion",
    minimumScore: 200,
  },
  {
    name: "Bodacious Champion",
    minimumScore: 300,
  },
  {
    name: "Radical Champion",
    minimumScore: 400,
  },
  {
    name: "Primo Champion",
    minimumScore: 500,
  },
  {
    name: "Righteous Champion",
    minimumScore: 600,
  },
  {
    name: "Flawless Champion",
    minimumScore: 740,
  },
  {
    name: "Epic Champion",
    minimumScore: 870,
  },

  {
    name: "Legendary Champion",
    minimumScore: 1000,
  },
  {
    name: "Santaic Champion",
    minimumScore: 1120,
  },
  {
    name: "Godlike Champion",
    minimumScore: 1240,
  },
];

for (const u of rankData) {
  const user = await prisma.rank.upsert({
    where: { name: u.name },
    update: {},
    create: u,
  });
  console.log(`Created rank with id: ${user.id}`);
}

const userData: Prisma.UserCreateInput[] = [
  { "id": "1", "numberOfGames": 0 },
];

for (const u of userData) {
  const user = await prisma.user.create({
    data: u,
  });
  console.log(`Created user with id: ${user.id}`);
}

console.log(`Seeding finished.`);

await prisma.$disconnect();
