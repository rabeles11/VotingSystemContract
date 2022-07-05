import { PersistentUnorderedMap,context } from "near-sdk-as";
 
export const voters = new PersistentUnorderedMap<string, bool>("VOTERS");
export const Parties = new PersistentUnorderedMap<string, string>("PARTIES")

export function CreateParty(id: string, productName: string): void {
    Parties.set(id, productName);
}