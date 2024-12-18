# ADİİS (Acil Durum İletişim ve İnsani İhtiyaç Sistemi)

[Watch the Project Video on YouTube](https://www.youtube.com/watch?v=QLg1fjdluqc)



## Overview
**We built this project for the InternetComputerHackathon organized by IstanbulChain and ICP HUB Turkey on Dec 13, 2025 together with Ömer Turan Bayraklı.** ADİİS is a decentralized platform built on the Internet Computer (ICP) blockchain that facilitates emergency communication and humanitarian aid coordination. The system connects those in need with those who want to help during emergencies and disasters, creating an efficient aid distribution network.

## Need Analysis 
To decide on the project, we did a Needs analysis on Python. I extracted live Tweets from the 2023 Eartquake in Turkey, in which people requested certain needs. We also conducted an LDA or topic analysis on the Tweets and found that people have emergency needs in such disaster and dencentralized systems can be used to collect needs and donations.

![wordcloud](https://github.com/user-attachments/assets/2b2b23b4-ed48-4ce6-957d-1704e31454fb)

## ADİİS Features
- **Need Creation**: Users can create and post their needs during emergencies
- **Aid Contribution**: Donors can contribute to specific needs
- **Real-time Tracking**: Track the status of needs and contributions
- **Decentralized Infrastructure**: Built on Internet Computer for reliability and transparency

## Technical Stack
- **Backend**: Motoko (Internet Computer)
- **Frontend**: HTML, JavaScript, CSS
- **Development Environment**: DFX (Internet Computer SDK)
- **Package Management**: npm

## Prerequisites
- Node.js (v12 or higher)
- Internet Computer DFX SDK
- Git

## Installation

1. **Clone the repository**
git clone [repository-url]
cd adiis-platform

2. **Install dependencies**
npm install

3. **Start the local Internet Computer replica**
dfx start --clean --background

4. **Deploy the canisters**
dfx deploy

5. **Start the development server**
npm run dev

## Smart Contract Functions

### `createNeed`
Creates a new need request in the system.
createNeed(description : Text) : async NeedId

### `donateToNeed`
Allows users to contribute to a specific need.
donateToNeed(needId : NeedId, amount : Nat) : async Bool

### `getAllNeeds`
Retrieves all registered needs.
getAllNeeds() : async [Need]

### `getContributions`
Retrieves all contributions made to needs.
getContributions() : async [Contribution]

## Development

### Local Development
1. Start the replica:
dfx start --clean --background

2. Deploy the canisters:
dfx deploy

3. Start the development server:
npm run dev

### Building for Production
dfx deploy --network ic

## Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Project Contributors
- Onur Keleş
- Ömer Turan Bayraklı
  
## Acknowledgments
- İstanbulChain Kulubü
- ICP Hub Turkey
=======
