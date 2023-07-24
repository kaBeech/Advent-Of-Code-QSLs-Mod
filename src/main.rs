pub mod roll_modifier;
pub mod save_game;

fn main() {
    println!("Hello, world!");
    let name_of_run = "test_run";
    let roll_result = roll_modifier::roll_modifier();
    println!("{}", roll_result);
    let _ = save_game::save_game(name_of_run, &roll_result);
}
