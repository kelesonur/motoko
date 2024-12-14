import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./src/declarations/local_support/local_support.did.js";

// Configuration
const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai"; // Local support canister ID
const host = "http://127.0.0.1:8000";

// Initialize agent and actor
const agent = new HttpAgent({ host });

// Fetch root key for certificate validation during development
agent.fetchRootKey().catch((err) => {
  console.warn(
    "Unable to fetch root key. Check to ensure that your local replica is running"
  );
  console.error(err);
});

// Initialize the actor with your canister
const actor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

// Test the connection
async function testConnection() {
  try {
    const needs = await actor.getAllNeeds();
    console.log('Successfully connected to canister. Current needs:', needs);
  } catch (e) {
    console.error('Failed to connect to canister:', e);
  }
}

// Test the connection when the page loads
window.addEventListener('load', () => {
  testConnection();
});

// Export the actor for use in other files
export default actor;