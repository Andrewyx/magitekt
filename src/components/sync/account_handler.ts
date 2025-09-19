import { type DatabaseReference, update } from "firebase/database";

/**
 * This class handles the managment of Accounts and Clients across the database
 */
export class AccountHandler {
    public static readonly ACCOUNTS_PATH = "accounts";

    readonly databaseRef: DatabaseReference
    public constructor(databaseRef: DatabaseReference) {
        this.databaseRef = databaseRef;
    }

    public getAccount(): Account {
        return { id:"" };
    }

    public addAccount():  {

    }

    public editAccount() {

    }

    public deleteAccount() {

    }
}