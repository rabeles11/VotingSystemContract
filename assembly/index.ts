import { PersistentUnorderedMap,context,PersistentVector} from "near-sdk-as";
import { Party } from './model';

const voters = new PersistentUnorderedMap<string,string>("VOTERS");
const Parties = new PersistentUnorderedMap<string, Party>("PARTIES");
const owner = context.sender;

export function CreateParty(party: Party): void {
    let existingParty = Parties.get(party.id);
    if (existingParty !== null) {
        throw new Error(`A party with ${party.id} already exists`);
    }
    Parties.set(party.id, Party.fromPayload(party));
}

export function GetAllParties(): Party[] | null{
    return Parties.values();
}


export function SetContextSender(): void{
    voters.set(context.sender,"ANO");
}

export function GetAllVoters(): string | null{
    return voters.get(context.sender);
}

export function VotePositive(party: Party): void{
    let voterexist = voters.get(context.sender)
    if(voterexist !== null){
        throw new Error("You already voted in this elections");
    }
    let PartyToVote = Parties.get(party.id);
    if (PartyToVote == null) {
        throw new Error(`A party does not exists ${party.id}`);
    }
    PartyToVote.votePositive();
    Parties.set(PartyToVote.id, PartyToVote);
    voters.set(context.sender,"Voted");
}

export function voteNegative(party: Party): void{
    let voterexist = voters.get(context.sender)
    if(voterexist !== null){
        throw new Error("You already voted in this elections");
    }
    let PartyToVote = Parties.get(party.id);
    if (PartyToVote == null) {
        throw new Error(`A party does not exists`);
    }
    PartyToVote.voteNegative();
    Parties.set(PartyToVote.id, PartyToVote);
    voters.set(context.sender,"Voted");
}
