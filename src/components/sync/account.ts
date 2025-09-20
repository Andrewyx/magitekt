
/**
 * Simple struct for accounts
 */
export class Account {
    public uid :string;
    public deckIDs: string[];

    public constructor()
    public constructor(uid?:string, deckIDs?:string[]) {
        this.uid = uid ?? "";
        this.deckIDs = deckIDs ?? [];
    }
}