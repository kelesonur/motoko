import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Contribution {
  'needId' : NeedId,
  'amount' : bigint,
  'donor' : UserId,
}
export interface Need {
  'id' : NeedId,
  'fulfilled' : boolean,
  'description' : string,
  'requestedBy' : UserId,
}
export type NeedId = bigint;
export type UserId = Principal;
export interface _SERVICE {
  'createNeed' : ActorMethod<[string], NeedId>,
  'donateToNeed' : ActorMethod<[NeedId, bigint], boolean>,
  'getAllNeeds' : ActorMethod<[], Array<Need>>,
  'getContributions' : ActorMethod<[], Array<Contribution>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
