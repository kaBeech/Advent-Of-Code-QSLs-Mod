export default function (
  challengeModifierText: string,
): string {
  const preface = "You must write a program to complete this challenge ";
  return preface + challengeModifierText;
}
