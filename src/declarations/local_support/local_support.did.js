export const idlFactory = ({ IDL }) => {
  const NeedId = IDL.Nat;
  const UserId = IDL.Principal;
  const Need = IDL.Record({
    'id' : NeedId,
    'fulfilled' : IDL.Bool,
    'description' : IDL.Text,
    'requestedBy' : UserId,
  });
  const Contribution = IDL.Record({
    'needId' : NeedId,
    'amount' : IDL.Nat,
    'donor' : UserId,
  });
  return IDL.Service({
    'createNeed' : IDL.Func([IDL.Text], [NeedId], []),
    'donateToNeed' : IDL.Func([NeedId, IDL.Nat], [IDL.Bool], []),
    'getAllNeeds' : IDL.Func([], [IDL.Vec(Need)], ['query']),
    'getContributions' : IDL.Func([], [IDL.Vec(Contribution)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
