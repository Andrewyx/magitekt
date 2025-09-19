
/**
 * Simple struct for accounts
 */
export class Account {
    public id :string;

    public constructor()
    public constructor(id?:string) {
        this.id = id ?? "";
    }
}