import type { QRL } from "@builder.io/qwik";
import { $, useStore, useVisibleTask$ } from "@builder.io/qwik";

export const useLocalStorage = (
  key: string,
  initialState: any,
): [any, QRL<(value: any) => void>] => {
  const state = useStore({ value: initialState });
  useVisibleTask$(() => {
    try {
      const item = window.localStorage.getItem(key);
      state.value = item ? JSON.parse(item) : initialState;
    } catch (error) {
      console.warn(
        `Getting ${key} failed - setting initial state to ${initialState}. Error info just in case: `,
        error,
      );
      state.value = initialState;
    }
  });

  const setValue$ = $((value: any) => {
    try {
      state.value = value;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(
        `Setting ${key} to ${value} failed. Error info: `,
        error,
      );
    }
  });
  return [state, setValue$];
};
