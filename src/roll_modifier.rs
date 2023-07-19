use std::fs;

use rand::seq::SliceRandom;

pub fn roll_modifier() -> String {
    let mut rng = rand::thread_rng();

    let modifiers_raw = fs::read_to_string("src/modifiers.json").expect("Unable to read file");

    let modifiers_parsed: serde_json::Value =
        serde_json::from_str(&modifiers_raw).expect("JSON was not well-formatted");

    // let modifiers_parsed: JsonValue::Object =
    //     json::parse(&modifiers_raw).expect("Should have been able to parse the JSON");

    let prompt: String = modifiers_parsed.get("prompt").unwrap().to_string();

    let random_modifier: String = modifiers_parsed
        .get("modifiers")
        .unwrap()
        .as_array()
        .expect("modifiers should be an array")
        .choose(&mut rng)
        .unwrap()
        .to_string();

    let modifier_prompt: String = format!("{} {}", prompt, random_modifier);

    modifier_prompt.to_string()
}
