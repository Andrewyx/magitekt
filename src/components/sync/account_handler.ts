import { type DatabaseReference, update, child, get } from "firebase/database";
import { Account } from "./account";


interface AccountUpdate {
    [uid: string]: string[] | null
}

/**
 * This class handles the managment of Accounts and Clients across the database
 */
export class AccountHandler {
    public static readonly ACCOUNTS_PATH = "accounts";

    private readonly databaseRef: DatabaseReference
    public constructor(databaseRef: DatabaseReference) {
        this.databaseRef = databaseRef;
    }

    /**
     * 
     * @param uid UID of account to fetch
     * @returns The account from the database
     */
    public getAccountByUID(uid: string): Account {
        let account = new Account();
        get(child(this.databaseRef, uid)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                account = snapshot.val()
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        return account;
    }

    /**
     * Updates the details with the account or creates an account if it doesn't exist
     * 
     * @param newAccount account to set details for
     */
    public setAccount(account: Account) {
        const updates: AccountUpdate = {};
        updates[account.uid] = account.deckIDs;
        update(this.databaseRef, updates);
    }

    /**
     * Deletes the account with the given ID or does nothing if it doesn't exist
     * 
     * @param uid ID of the account to delete
     */
    public deleteAccount(uid: string) {
        const updates: AccountUpdate = {};
        updates[uid] = null;
        update(this.databaseRef, updates);
    }
}