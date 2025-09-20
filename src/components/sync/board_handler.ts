import { type DatabaseReference, update } from "firebase/database";

/**
 * This class handles syncing the state of the board for a particular game instance
 */
export class BoardHandler {
    public static readonly GAME_INSTANCE_PATH = "game_instances";

    private readonly databaseRef: DatabaseReference
    public constructor(databaseRef: DatabaseReference) {
        this.databaseRef = databaseRef;
    }
}