// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{LogicalSize, Manager, Size};
use tauri_plugin_window_state::{AppHandleExt, StateFlags};

#[tauri::command]
fn close_app(app_handle: tauri::AppHandle) {
    let _ = app_handle.save_window_state(StateFlags::all());
    app_handle.exit(0);
}

#[tauri::command]
fn resize_window(window: tauri::Window, width: f64, height: f64) {
    let _ = window.set_size(Size::Logical(LogicalSize {
        width: if width == 0.0 { 400.0 } else { width },
        height: if height == 0.0 { 300.0 } else { height },
    }));
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            #[cfg(debug_assertions)]
            app.get_webview_window("main").unwrap().open_devtools();
            Ok(())
        })
        .plugin(
            tauri_plugin_window_state::Builder::default()
                .with_state_flags(StateFlags::POSITION)
                .build(),
        )
        .plugin(tauri_plugin_clipboard_manager::init())
        .invoke_handler(tauri::generate_handler![close_app, resize_window,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
