import { type DatabaseReference, update } from "firebase/database";
import { Account } from "./account";

/**
 * This class handles the managment of Accounts and Clients across the database
 */
export class AccountHandler {
    public static readonly ACCOUNTS_PATH = "accounts";

    readonly databaseRef: DatabaseReference
    public constructor(databaseRef: DatabaseReference) {
        this.databaseRef = databaseRef;
    }

    public getAccountByUID(uid: string): Account {
        return new Account();
    }

    public addAccount(newAccount: Account)  {

    }

    public editAccount(newAccount: Account) {

    }

    public deleteAccount(account: Account) {

    }
}