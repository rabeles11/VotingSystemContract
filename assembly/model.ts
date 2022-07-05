import {context } from "near-sdk-as";

@nearBindgen
export class Party {
    id: string;
    name: string;
    description: string;
    image: string;
    owner: string;
    positiveVote: u32;
    negativeVote: u32;
    public static fromPayload(payload: Party): Party {
        const party = new Party();
        party.id = payload.id;
        party.name = payload.name;
        party.description = payload.description;
        party.image = payload.image;
        party.owner = context.sender;
        party.positiveVote = 0;
        party.negativeVote = 0;
        return party;
    }
    public votePositive(): void {
        this.positiveVote = this.positiveVote + 1;
    }
    public voteNegative(): void {
        this.negativeVote = this.negativeVote + 1;
    }
}