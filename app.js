import fetch from 'node-fetch';
import { HttpAgent, Actor } from '@dfinity/agent';

import { idlFactory as localSupport_idl } from './.dfx/local/canisters/local_support/local_support.did.js';

import { canisterId as localSupportCanisterId } from './.dfx/local/canisters/local_support/local_support.js';

async function main() {
  const agent = new HttpAgent({ fetch, host: 'http://127.0.0.1:8000' });

  const localSupport = Actor.createActor(localSupport_idl, {
    agent,
    canisterId: localSupportCanisterId,
  });

  try {
    console.log('Creating a new Need...');
    const newNeedId = await localSupport.createNeed('Some help needed');
    console.log('New Need ID:', newNeedId.toString());

    console.log('Donating to the new Need...');
    const donated = await localSupport.donateToNeed(newNeedId, 100n);
    console.log('Donation successful?', donated);

    console.log('Fetching all Needs...');
    const allNeeds = await localSupport.getAllNeeds();
    console.log('All Needs:', JSON.stringify(allNeeds, null, 2));

    console.log('Fetching all Contributions...');
    const contributions = await localSupport.getContributions();
    console.log('All Contributions:', JSON.stringify(contributions, null, 2));

  } catch (err) {
    console.error('Error interacting with the local_support canister:', err);
  }
}

main();
