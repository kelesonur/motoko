<<<<<<< HEAD
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Nat "mo:base/Nat";

actor {
    type NeedId = Nat;
    type UserId = Principal;

    type Need = {
        id : NeedId;
        requestedBy : UserId;
        description : Text;
        fulfilled : Bool;
    };

    type Contribution = {
        needId : NeedId;
        donor : UserId;
        amount : Nat;
    };

    private var nextNeedId : NeedId = 0;
    private var needs : [Need] = [];
    private var contributions : [Contribution] = [];

    public shared(msg) func createNeed(description : Text) : async NeedId {
        let newNeed : Need = {
            id = nextNeedId;
            requestedBy = msg.caller;
            description = description;
            fulfilled = false;
        };
        needs := Array.append(needs, [newNeed]);
        nextNeedId += 1;
        nextNeedId - 1
    };

    public shared(msg) func donateToNeed(needId : NeedId, amount : Nat) : async Bool {
        var found = false;
        label search for (need in needs.vals()) {
            if (need.id == needId) {
                found := true;
                break search;
            };
        };

        if (found) {
            let contribution : Contribution = {
                needId = needId;
                donor = msg.caller;
                amount = amount;
            };
            contributions := Array.append(contributions, [contribution]);
            true
        } else {
            false
        };
    };

    public query func getAllNeeds() : async [Need] {
        needs
    };

    public query func getContributions() : async [Contribution] {
        contributions
    };
}
=======
import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Nat "mo:base/Nat";

actor LocalSupport {
  type NeedId = Nat;
  type UserId = Principal;

  type Need = {
    id : NeedId;
    requestedBy : UserId;
    description : Text;
    fulfilled : Bool;
  };

  type Contribution = {
    needId : NeedId;
    donor : UserId;
    amount : Nat;
  };

  var nextNeedId : NeedId = 0;
  var needs : [Need] = [];
  var contributions : [Contribution] = [];

  public func createNeed(description : Text) : async NeedId {
    let newNeed : Need = {
      id = nextNeedId;
      requestedBy = Principal.fromText(description); // Placeholder for caller
      description = description;
      fulfilled = false;
    };
    nextNeedId += 1;
    needs := Array.append(needs, [newNeed]);
    return newNeed.id;
  };

  public func donateToNeed(needId : NeedId, amount : Nat) : async Bool {
    var found = false;
    label search for (i in needs.keys()) {
      if (needs[i].id == needId) {
        found := true;
        break search;
      }
    };

    if (found) {
      let contribution : Contribution = {
        needId = needId;
        donor = Principal.fromText("donor"); // Placeholder
        amount = amount;
      };
      contributions := Array.append(contributions, [contribution]);
      return true;
    };
    return false;
  };

  public query func getAllNeeds() : async [Need] {
    needs
  };

  public query func getContributions() : async [Contribution] {
    contributions
  };
}
>>>>>>> 3ac8019b1a5a26bf7ec0ff86592e3c6ff92ac5e2
