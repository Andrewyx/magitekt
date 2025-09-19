import { initializeApp, type FirebaseApp } from "firebase/app";
import { getDatabase, type Database, type DatabaseReference, ref } from "firebase/database";
import { BoardHandler } from "./board_handler";
import { AccountHandler } from "./account_handler";

export class SyncManager {
    private readonly firebaseConfig = {
        apiKey: "AIzaSyAT4F_oc8iX6wKBXchueyhV12H7Ux3smU4",
        authDomain: "magitekt.firebaseapp.com",
        projectId: "magitekt",
        storageBucket: "magitekt.firebasestorage.app",
        messagingSenderId: "619766633965",
        appId: "1:619766633965:web:99b5112bbf4ddedf8e03e4"
    };
    private app: FirebaseApp;
    private database: Database;
    private readonly rootRef: DatabaseReference;
    private boardHandler: BoardHandler;
    private accountHandler: AccountHandler;

    public constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.database = getDatabase(this.app);
        this.rootRef = ref(this.database);
        this.boardHandler = new BoardHandler(this.rootRef);
        this.accountHandler = new AccountHandler(this.rootRef);
    }
}