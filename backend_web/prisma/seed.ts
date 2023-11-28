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
    name: "c_like_box",
    text: "using a random selection from the C-Like Languages Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "misc_box",
    text: "using a random selection from the Miscellaneous Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "oop_box",
    text: "using a random selection from the Object Oriented Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "fp_box",
    text: "using a random selection from the Functional Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "legacy_box",
    text: "using a random selection from the Legacy Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "visual_box",
    text: "using a random selection from the Visual Programming Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "esoteric_box",
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
    name: "treat_box",
    text: "while enjoying a random selection from the Treat Box: ",
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
    name: "breaks",
    text: "while taking a 3-minute (minimum) breaks every 20 minutes",
    standard: true,
    isPublic: true,
  },
  {
    name: "atomic_commits",
    text: "while making atomic commits",
    explanatoryUrl:
      "https://www.freshconsulting.com/insights/blog/atomic-commits/",
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
    explanatoryUrl: "https://en.wikipedia.org/wiki/Code_golf",
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
    name: "alphabetical_declarations",
    text: "making declarations in alphabetical order",
    standard: true,
    isPublic: true,
  },
  // {
  //   name: "random_letter_declarations",
  //   text:
  //     "making all declarations begin with a Scrabble-official word starting with the same random letter:",
  //   hasOptions: true,
  //   standard: true,
  //   isPublic: true,
  // },
  {
    name: "theme_box",
    text:
      "naming all declarations in a random theme selected from the Theme Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "no_named_functions",
    text: "without declaring any named functions",
    standard: true,
    isPublic: true,
  },
  {
    name: "chat_gpt",
    text:
      "using ChatGPT (the free, GPT-3.5 version) exclusively (no editing Chat's responses - you must edit your prompts!)",
    explanatoryUrl: "https://chat.openai.com/auth/login",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_random_operator",
    text: "without using a random character from the Operator Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
  {
    name: "no_random_letter",
    text: "without using a random character from the Letter Box: ",
    hasOptions: true,
    standard: true,
    isPublic: true,
  },
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
      "using no numbers (you may convert any numbers in your challenge input)",
    standard: true,
    isPublic: true,
  },
  {
    name: "no_strings",
    text:
      "using no strings (you may convert any strings in your challenge input)",
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
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_box",
      },
    },
    name: "c_like_box_c",
    text: "C",
    explanatoryUrl: "https://en.wikipedia.org/wiki/C_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_box",
      },
    },
    name: "c_like_box_csharp",
    text: "C#",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_box",
      },
    },
    name: "c_like_box_cpp",
    text: "C++",
    explanatoryUrl: "https://en.wikipedia.org/wiki/C%2B%2B",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_box",
      },
    },
    name: "c_like_box_carbon",
    text: "Carbon",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Carbon_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_box",
      },
    },
    name: "c_like_box_go",
    text: "Go",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Go_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_box",
      },
    },
    name: "c_like_box_holyc",
    text: "HolyC",
    explanatoryUrl: "https://rosettacode.org/wiki/Category:HolyC",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_box",
      },
    },
    name: "c_like_box_rust",
    text: "Rust",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Rust_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "c_like_box",
      },
    },
    name: "c_like_box_zig",
    text: "Zig",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Zig_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "oop_box",
      },
    },
    name: "oop_box_java",
    text: "Java",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "misc_box",
      },
    },
    name: "misc_box_javascript",
    text: "JavaScript",
    explanatoryUrl: "https://en.wikipedia.org/wiki/JavaScript",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "misc_box",
      },
    },
    name: "misc_box_typescript",
    text: "TypeScript",
    explanatoryUrl: "https://en.wikipedia.org/wiki/TypeScript",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "misc_box",
      },
    },
    name: "misc_box_python",
    text: "Python",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Python_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "misc_box",
      },
    },
    name: "misc_box_r",
    text: "R",
    explanatoryUrl: "https://en.wikipedia.org/wiki/R_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "misc_box",
      },
    },
    name: "misc_box_prolog",
    text: "Prolog",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Prolog",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "misc_box",
      },
    },
    name: "misc_box_webassembly",
    text: "WebAssembly",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "misc_box",
      },
    },
    name: "misc_box_gaya",
    text: "Gaya",
    explanatoryUrl: "https://github.com/aloussase/gaya#readme",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "oop_box",
      },
    },
    name: "oop_box_ruby",
    text: "Ruby",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Ruby_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "oop_box",
      },
    },
    name: "oop_box_smalltalk",
    text: "Smalltalk",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Smalltalk",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "oop_box",
      },
    },
    name: "oop_box_scala",
    text: "Scala",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Scala_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_commonlisp",
    text: "Common Lisp",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Common_Lisp",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_scheme",
    text: "Scheme",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Scheme_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_racket",
    text: "Racket",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Racket_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_clojure",
    text: "Clojure",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Clojure",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_erlang",
    text: "Erlang",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Erlang_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_elixir",
    text: "Elixir",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Elixir_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_haskell",
    text: "Haskell",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Haskell",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_ocaml",
    text: "OCaml",
    explanatoryUrl: "https://en.wikipedia.org/wiki/OCaml",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_elm",
    text: "Elm",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Elm_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "fp_box",
      },
    },
    name: "fp_box_fsharp",
    text: "F#",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_box",
      },
    },
    name: "legacy_box_algol",
    text: "ALGOL",
    explanatoryUrl: "https://en.wikipedia.org/wiki/ALGOL",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_box",
      },
    },
    name: "legacy_box_basic",
    text: "BASIC",
    explanatoryUrl: "https://en.wikipedia.org/wiki/BASIC",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_box",
      },
    },
    name: "legacy_box_cobol",
    text: "COBOL",
    explanatoryUrl: "https://en.wikipedia.org/wiki/COBOL",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_box",
      },
    },
    name: "legacy_box_fortran",
    text: "FORTRAN",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Fortran",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "legacy_box",
      },
    },
    name: "legacy_box_pascal",
    text: "Pascal",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Pascal_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_box",
      },
    },
    name: "visual_box_scratch",
    text: "Scratch",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Scratch_(programming_language)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_box",
      },
    },
    name: "visual_box_blockly",
    text: "Blockly",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Blockly",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_box",
      },
    },
    name: "visual_box_greenfoot",
    text: "Greenfoot",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Greenfoot",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_box",
      },
    },
    name: "visual_box_puredata",
    text: "Pure Data",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Pure_Data",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_box",
      },
    },
    name: "visual_box_nodered",
    text: "Node-RED",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Node-RED",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_box",
      },
    },
    name: "visual_box_drakon",
    text: "DRAKON",
    explanatoryUrl: "https://en.wikipedia.org/wiki/DRAKON",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "visual_box",
      },
    },
    name: "visual_box_pane",
    text: "PANE",
    explanatoryUrl: "https://joshuahhh.com/projects/pane/",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_golfscript",
    text: "GolfScript",
    explanatoryUrl: "https://esolangs.org/wiki/GolfScript",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_intercal",
    text: "INTERCAL",
    explanatoryUrl: "https://en.wikipedia.org/wiki/INTERCAL",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_unlambda",
    text: "Unlambda",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Unlambda",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_piet",
    text: "Piet",
    explanatoryUrl: "https://esolangs.org/wiki/Piet",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_befunge",
    text: "Befunge",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Befunge",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_chicken",
    text: "Chicken",
    explanatoryUrl: "https://esolangs.org/wiki/Chicken",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_shakespeare",
    text: "Shakespeare",
    explanatoryUrl:
      "https://en.wikipedia.org/wiki/Shakespeare_Programming_Language",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_rockstar",
    text: "Rockstar",
    explanatoryUrl: "https://esolangs.org/wiki/Rockstar",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_storyteller",
    text: "Storyteller",
    explanatoryUrl: "https://github.com/dhruvjimulia-sys/storyteller#readme",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_lolcode",
    text: "LOLCODE",
    explanatoryUrl: "https://en.wikipedia.org/wiki/LOLCODE",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "esoteric_box",
      },
    },
    name: "esoteric_box_chef",
    text: "Chef",
    explanatoryUrl: "https://esolangs.org/wiki/Chef",
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
    explanatoryUrl: "https://en.wikipedia.org/wiki/Vim_(text_editor)",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "text_editor_box",
      },
    },
    name: "text_editor_box_neovim",
    text: "Neovim",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Vim_(text_editor)#Neovim",
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
    explanatoryUrl: "https://en.wikipedia.org/wiki/Emacs",
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
    explanatoryUrl: "https://en.wikipedia.org/wiki/Eclipse_(software)",
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
    explanatoryUrl: "https://en.wikipedia.org/wiki/NetBeans",
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
    explanatoryUrl: "https://en.wikipedia.org/wiki/Visual_Studio_Code",
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
    explanatoryUrl: "https://en.wikipedia.org/wiki/Sublime_Text",
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
    explanatoryUrl: "https://en.wikipedia.org/wiki/GNU_nano",
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
    shortText: "System Default",
    explanatoryUrl: "https://en.wikipedia.org/wiki/Windows_Notepad",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_veg",
    text: "Fruits and Vegetables",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_plants",
    text: "Plants",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_animals",
    text: "Animals",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_colors",
    text: "Colors",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_sports",
    text: "Sports",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_weather",
    text: "Weather",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_holidays",
    text: "Holidays",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_famous_people",
    text: "Famous People",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_famous_places",
    text: "Famous Places",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_books",
    text: "Books and Literature",
    shortText: "Books",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_food_drink",
    text: "Food and Drink",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_music",
    text: "Music",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_fictional_creatures",
    text: "Fictional/Mythical Creatures",
    shortText: "Fictional Creatures",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_pokemon",
    text: "Pokémon",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_dinosaurs",
    text:
      "Prehistoric Creatures (including Prehistoric Dinosaurs, but not Modern Birds)",
    shortText: "Dinosaurs",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "theme_box",
      },
    },
    name: "theme_box_science",
    text: "Science",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "treat_box",
      },
    },
    name: "treat_box_snack",
    text: "a tasty snack. Lucky you!",
    shortText: "Snack",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "treat_box",
      },
    },
    name: "treat_box_beveridge",
    text: "a refreshing beverage. Lucky you!",
    shortText: "Beverage",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "treat_box",
      },
    },
    name: "treat_box_water",
    text: "a glass of water (at least 12 ounces). Hydration is important!",
    shortText: "Water",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_plus",
    text: "+",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_minus",
    text: "-",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_multiply",
    text: "*",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_divide",
    text: "/",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_modulo",
    text: "%",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_and",
    text: "&",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_or",
    text: "|",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_greater_than",
    text: ">",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_less_than",
    text: "<",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_question_mark",
    text: "?",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_operator",
      },
    },
    name: "random_operator_exclamation_point",
    text: "!",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_a",
    text: "A",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_b",
    text: "B",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_c",
    text: "C",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_d",
    text: "D",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_e",
    text: "E",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_f",
    text: "F",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_g",
    text: "G",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_h",
    text: "H",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_i",
    text: "I",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_j",
    text: "J",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_k",
    text: "K",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_l",
    text: "L",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_m",
    text: "M",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_n",
    text: "N",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_o",
    text: "O",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_p",
    text: "P",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_q",
    text: "Q",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_r",
    text: "R",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_s",
    text: "S",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_t",
    text: "T",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_u",
    text: "U",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_v",
    text: "V",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_w",
    text: "W",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_x",
    text: "X",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_y",
    text: "Y",
    standard: true,
    isPublic: true,
  },
  {
    ChallengeModifier: {
      connect: {
        name: "no_random_letter",
      },
    },
    name: "random_letter_z",
    text: "Z",
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

const titleData: Prisma.TitleCreateInput[] = [
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

for (const u of titleData) {
  const user = await prisma.title.upsert({
    where: { name: u.name },
    update: {},
    create: u,
  });
  console.log(`Created title with id: ${user.id}`);
}

console.log(`Seeding finished.`);

await prisma.$disconnect();
