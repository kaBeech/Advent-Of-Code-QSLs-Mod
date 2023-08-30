use std::fs;

use rand::seq::SliceRandom;

pub fn roll_modifier() -> String {
    let mut rng = rand::thread_rng();

    let modifiers_raw = fs::read_to_string("src/modifiers.json").expect("Unable to read file");

    let modifiers_parsed: serde_json::Value =
        serde_json::from_str(&modifiers_raw).expect("JSON was not well-formatted");

    let prompt: String = modifiers_parsed.get("prompt").unwrap().to_string();

    let random_modifier = modifiers_parsed
        .get("modifiers")
        .unwrap()
        .as_array()
        .expect("modifiers should be an array")
        .choose(&mut rng)
        .unwrap();

    let mut chosen_modifier = random_modifier
        .get("modifier")
        .expect("modifier should be a string")
        .to_string();

    if random_modifier.get("secondary-roll").unwrap() != false {
        let secondary_roll = random_modifier
            .get("secondary-roll")
            .expect("secondary roll value should be a string")
            .to_string();
        let secondary_roll_result = modifiers_parsed
            .get("language-box-1")
            .unwrap()
            .as_array()
            .expect("secondary_roll should be an array")
            .choose(&mut rng)
            .unwrap();
        chosen_modifier = chosen_modifier + " " + secondary_roll_result.as_str().unwrap();
    }

    let modifier_prompt: String = format!("{} {}", prompt, chosen_modifier);

    modifier_prompt.to_string()
}
