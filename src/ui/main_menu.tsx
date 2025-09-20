import { SyncManager } from "../components/sync/sync_manager"

export function MainMenu() {
    // @ts-ignore
    let syncManager = new SyncManager();
    return(
        <div>
            <h1>Magitek</h1>
            <p>Welcome to the Magitek project! This is a place for digital magic and technological wonders.</p>
        </div>
    )
}