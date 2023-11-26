// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri_plugin_window_state::{AppHandleExt, StateFlags};

#[tauri::command]
fn close_app(app_handle: tauri::AppHandle) {
    let _ = app_handle.save_window_state(StateFlags::all());
    app_handle.exit(0);
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .invoke_handler(tauri::generate_handler![close_app])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
