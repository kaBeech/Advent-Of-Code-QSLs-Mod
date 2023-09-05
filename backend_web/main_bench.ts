import { rollModifierOption } from "./components/rollModifierOption.ts";

const add = (a: number, b: number) => a + b;

Deno.bench(function rollModifierOption1() {
  rollModifierOption(1);
});

Deno.bench(function addSmall() {
  add(1, 2);
});

Deno.bench(function addBig() {
  add(2 ** 32, 2 ** 32);
});
