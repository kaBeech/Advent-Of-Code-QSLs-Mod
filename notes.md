# Pseudocode

## Start Game (args: name of the save_game file)

1. If no save_game by the requested name exists, ask for and store initial input (name of player, name of run, repository name)
   - Set initial sav_game data as shown in example_game.json
2. If a save_game exists, read current save_game info
3. Find the first day in save_game that has part-2-complete set to false
   - Display the info in that day
   - Display the option to show/download progress sheet
   - If the modifier for that day is not set, give the option to roll a modifier for that day
   - If the modifier for that day is set and the player has at least 2 re-roll tokens, give the option to re-roll the modifier
   - If the modifier for that day is set, the modifier has a secondary roll, and the player has at least 1 re-roll token, give the option to re-roll the secondary roll
   - If part-1-complete is set to false, give the option to set it to true
   - If part-1-complete is set to true, give the option to set part-2-complete to true
