export const getGithubUserIdFromUserImage = (userImage: string) => {
  const rawRegex = /u\/[0-9]+/g;
  const userIdRegex = /[0-9]+/g;
  const rawUserId = userImage.match(rawRegex);
  const userId = "github" + rawUserId![0].match(userIdRegex)![0];
  return userId;
};
