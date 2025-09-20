
/**
 * Simple struct for accounts
 */
export class Account {
    public uid :string;
    public deckIDs: string[];

    constructor()
    constructor(uid?:string, deckIDs?:string[]) {
        this.uid = uid ?? "";
        this.deckIDs = deckIDs ?? [];
    }
}
