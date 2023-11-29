export default function (rawUserId: string, userImageUrl: string) {
  let userId = rawUserId;
  if (userImageUrl.includes("github")) {
    userId = "github" + userId;
  } else if (
    userImageUrl.includes("reddit") || userImageUrl.includes("redd.it")
  ) {
    userId = "reddit" + userId;
  } else {
    throw new Error("No OAuth provider name found in user image URL");
  }
  return userId;
}
