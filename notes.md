# Roadmap

1. Implement simple single-user API with Deno/Prisma
2. Add Qwik frontend (with progress sheet)
3. Implement simple multi-user API
4. Add functionality for user-customized Challenge Modifiers
5. Implement Deno KV (for performance, but still in Beta) in addition to Prisma (for reliability)
6. Add React frontend (for comparison)
7. (optional) Add Node backend (for comparison)
8. (optional) Add Next.js frontend (for comparison)

# Pseudocode (old)

## Start Game (args: name of the save_game file)

1. If no save_game by the requested name exists, ask for and store initial input (name of player, name of run, repository name?)
   - Set initial sav_game data as shown in example_game.json
   - Save Game
2. If a save_game exists, read current save_game info
3. Find the first day in save_game that has part-2-complete set to false
   - Display the info in that day
   - If the modifier for that day is not set, give the option to roll a modifier for that day
   - If the modifier for that day is set and the player has at least 2 re-roll tokens, give the option to re-roll the modifier
   - If the modifier for that day is set, the modifier has a secondary roll, and the player has at least 1 re-roll token, give the option to re-roll the secondary roll
   - If part-1-complete is set to false, give the option to set it to true
   - If part-1-complete is set to true and the player has at least one re-roll token, give the option to set it to false
   - If part-1-complete is set to true, give the option to set part-2-complete to true
4. If all days in save_game have part-2-complete set to true, display a congratulations message
5. Give the option to show/download progress sheet
6. Give the option to start a new game
7. If the repository name is set, give a link to the repo

## Save Game (args: name of the save_game file)

1. Write save_game data in a file named {http-friendly-name}.{extension}

## Roll modifier

1. Randomly select a modifier
2. If the selected modifier has a secondary roll, roll it and add it to the modifier
3. Store the result as the current day's modifier
4. Save Game
5. Start Game

## Re-roll modifier

1. Remove 1 from current-re-roll tokens
2. Add 2 to re-roll tokens used
3. Add 1 to current day's main re-rolls used
4. Roll modifier
5. Save Game
6. Start Game

## Re-roll secondary roll

1. Remove one from current-re-roll-tokens
2. Add 1 to re-roll tokens used
3. Add 1 to current day's secondary re-rolls used
4. Roll a new secondary modifier
5. Replace the previous secondary modifier with this new one
6. Save Game
7. Start Game

## Set part-1-complete to true

1. Set part-1-complete to true
2. Add one to current-re-roll-tokens and re-roll-tokens gained
3. Save Game
4. Start Game

## Set part-1-complete to false

1. Set part-1-complete to false
2. Remove one from current-re-roll-tokens and re-roll-tokens gained
3. Save Game
4. Start Game

## Set part-2-complete to true

1. Set part-2-complete to true
2. Add one to current-re-roll-tokens and re-roll-tokens gained
3. Save Game
4. Start Game
