use std::fs;

pub(crate) fn save_game(name_of_run: &str, contents: &str) -> std::io::Result<()> {
    let file_name = name_of_run.to_owned() + ".txt";
    fs::write(file_name, contents)?;
    Ok(())
}
