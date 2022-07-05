import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

@nearBindgen
export class Party {
    id: string;
    name: string;
    description: string;
    image: string;
    owner: string;
    positiveVote: u32;
    negativeVote: u32;
    public votePositive(): void {
        this.positiveVote = this.positiveVote + 1;
    }
    public voteNegative(): void {
        this.negativeVote = this.negativeVote + 1;
    }
}

export const listedProducts = new PersistentUnorderedMap<string, Party>("LISTED_PRODUCTS");