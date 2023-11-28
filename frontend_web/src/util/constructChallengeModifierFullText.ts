export default function (
  challengeModifierText: string,
): string {
  const preface =
    "Your challenge is to write a program to complete today's puzzle ";
  return preface + challengeModifierText;
}
