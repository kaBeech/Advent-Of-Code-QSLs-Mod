# Programming language list

- To be sorted, classified, and set into language boxes

{
name: "language_box_1_javascript", Interpreted
name: "language_box_1_typescript",
name: "language_box_1_python", Compiled, Interpreted
name: "language_box_1_r", Interpreted
name: "language_box_1_ruby", Interpreted
name: "language_box_1_java", Compiled, Interpreted
name: "language_box_1_c", Compiled
name: "language_box_1_go", Compiled
name: "language_box_1_elixir",
name: "language_box_2_cpp", Compiled
name: "language_box_2_rust", Compiled
name: "language_box_2_lisp", Compiled
name: "language_box_2_haskell", Functional
name: "language_box_2_scala", Compiled
name: "language_box_2_prolog",
name: "language_box_2_csharp", Compiled
name: "language_box_2_erlang", Compiled
name: "language_box_3_webassembly",
name: "language_box_3_algol", Compiled, Heritage
name: "language_box_3_cobol", Heritage
name: "language_box_3_basic", Heritage
name: "language_box_3_pascal", Heritage
name: "language_box_3_scratch", Visual
name: "language_box_3_fortran", Compiled, Heritage
name: "language_box_3_lolcode", Esoteric
name: "language_box_3_intercal", Esoteric
name: "language_box_3_befunge", Esoteric
name: "language_box_3_shakespeare", Esoteric
name: "language_box_3_chef", Esoteric
name: "language_box_3_brainfuck", Esoteric
name: "language_box_3_jsfuck", Esoteric
},

# Score Calculation

S = Score
T = Tokens remaining
P1 = Tokens spent during Part 1
P2 = Tokens spent during Part 2 (possibly up to a maximum of 2 per day)
Z = 300 - 10 \* S (to a minimum of 0)
R = Total tokens spent

If P2 >= 50, then S = 1120 + 10 _ T - 10 _ P1
Else, S = 10 \* T + 20 + P2 + Z
