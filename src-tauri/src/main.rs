#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn get_access_token(code: &str) -> Option<String> {
  let link = format!(r"https://coornhert-gymnasium.zportal.nl/api/v3/oauth/token?grant_type=authorization_code&code={}", code.replace(" ", ""));
  attohttpc::post(link).send().and_then(attohttpc::Response::text).ok()
}

#[tauri::command]
fn get_rooster(access_token: &str, week: u32, year: u32, leerling_nummer: u32) -> Option<String> {
  let link = format!(r"https://coornhert-gymnasium.zportal.nl/api/v3/liveschedule?access_token={}&student={}&week={}{}", access_token, leerling_nummer, year, week);
  attohttpc::get(link).send().and_then(attohttpc::Response::text).ok()
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![get_access_token, get_rooster])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
