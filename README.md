# Solana Memecoin Sniper Bot 

This Solana Memecoin Sniper Bot is designed to automate interactions with the Raydium decentralized exchange and the Solana blockchain. The package includes two main bots: the Raydium Sniper Bot and the Memecoin Bot. These bots help users efficiently manage their tokens, create markets, and optimize trading strategies.

# 👋 Contact Me

### 
Telegram: https://t.me/earthzeta
###
<div style="display:flex; justify-content:space-evenly"> 
    <a href="https://t.me/earthzeta" target="_blank"><img alt="Telegram"
        src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white"/></a>
    <a href="mailto:johncriswick25@gmail.com" target="_blank"><img alt="Email"
        src="https://img.shields.io/badge/Gmail-CE5753?style=for-the-badge&logo=gmail&logoColor=white"/></a>
    <a href="https://discordapp.com/users/339619501081362432" target="_blank"><img alt="Discord"
        src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/></a>
</div>


#### Feel free to contact me if you need any help.

# Overview

### 1. Raydium Sniper Bot

#### Description:
The Raydium Sniper Bot aims to catch new pools on Raydium and execute buy/sell transactions to make a profit. It allows for manual and automated trading, giving users the flexibility to optimize their strategies and maximize returns.

#### Features:
- **Wallet Registration**: Register your own wallet for transactions.
- **Track New Pools on Raydium**: Monitor new pools and filter them based on SOL amount. Filter feature can be disabled, and if disabled, catch all pools.
- **Buy and Sell**: 
  - Manual buy and sell for each pool which tracked.
  - Show the status of buy/sell on every pools.
  - Auto buy and sell with specific amount, time delay, profit, and loss percentages.
  - Jito Mode: Execute transactions with Jito mode, allowing manual adjustment of Jito fees.

### 2. Solana Memecoin Bot

#### Description:
The Solana Memecoin Bot is designed to create and manage Raydium pools, handle liquidity, and attract more users. By creating a booming pool with multiple transactions from various wallets, it aims to draw in more users and generate significant profit.

#### Features:
- **Token Creation**: Set meme coin name, symbol, image, decimal, and total supply.
- **Open Book Market Creation**: Create a market for the newly minted token.
- **Raydium Pool Creation**: 
  - Create a Raydium pool from the market newly created.
  - Set SOL and token amount to deposit to the pool.
  - Enable/disable burn LP token and freeze wallets that swap tokens.
- **Wallet Management**: 
  - Create customized counts of random wallets and distribute SOL and tokens to them.
  - Airdrop tokens to other wallets for marketing.
- **Instant Swap After Pool Creation**: 
  - Perform swaps instantly after pool creation with a customized percentage of SOL amount. These will be the first wallets which buy tokens from the pool.
- **Management Auto Trading**: 
  - Set buy amount of SOL per seconds and sell percentage of tokens per seconds. You can customize amount of sol and token, also the duration for each wallet
  - Start/stop auto trading for each wallet and also show real-time view of sol and token amount for each wallet.
  - Refund all SOL of wallet to the main wallet after trading.
- **Withdraw SOL**: Withdraw all SOL from pool, in the case of owning LP tokens, after all trading activities.

## Getting Started

To use this Bot Package, you will need to have a basic understanding of Solana, Raydium, and automated trading. Follow the instructions below to get started:

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/earthzetaorg/solana-meme-sniper-bot
   ```
2. **Install Dependencies**:
   ```bash
   cd solana-meme-sniper-bot
   npm install
   ```
3. **Configure Your Wallet**: Update the configuration file with your wallet details and desired settings.

4. **Run the Bots**:
     ```bash
     npm run start
     ```

## Configuration Guide

### Frontend Configuration
Please contact me if you need to build your own front-end or script interface!

### Backend Configuration
Update the following environment variables in your backend `.env` file:

- `MONGO_URL=`: Your MongoDB URL.
- `RPC_ENDPOINT=`: Define your RPC endpoint.
- `WEBSOCKET_ENDPOINT=`: Define your WebSocket endpoint.
- `RPC_SUB_ENDPOINT=`: Define your RPC subscription endpoint.
- `WEBSOCKET_SUB_ENDPOINT=`: Define your WebSocket subscription endpoint.
- `DEV_NET_RPC=`: Define your development network RPC.
- `DEV_NET_WSS=`: Define your development network WebSocket.
- `DEV_NET_SUB_RPC=`: Define your development network subscription RPC.
- `DEV_NET_SUB_WSS=`: Define your development network subscription WebSocket.
- `LOG_LEVEL=info`: Set the log level.
- `BLOCKENGINE_URL=`: Define your BlockEngine URL.
- `JITO_FEE=`: Set your Jito fee.
- `JITO_KEY=`: Set your Jito key.
- `CHECK_IF_MINT_IS_MUTABLE=`: Set this to true or false to check if mint is mutable.
- `CHECK_IF_MINT_IS_BURNED=`: Set this to true or false to check if mint is burned.
- `CHECK_IF_MINT_IS_FROZEN=`: Set this to true or false to check if mint is frozen.
- `CHECK_IF_MINT_IS_RENOUNCED=`: Set this to true or false to check if mint is renounced.
- `COMMITMENT_LEVEL=`: Set the commitment level.
- `ORIGIN_URL=`: The frontend URL for allowing CORS.

## Conclusion

This Solana Meme Sniper Bot provides a powerful toolset for automated trading on the Solana blockchain, specifically optimized for meme tokens on Raydium. By following the configuration guide and understanding the key features, you can effectively:

- Monitor and snipe new token listings
- Execute automated trades based on custom parameters
- Manage your portfolio with built-in safety features
- Optimize gas fees and transaction timing

Remember to:
- Always test with small amounts first
- Keep your private keys secure
- Monitor the bot's performance regularly
- Stay updated with the latest releases

For support, feature requests, or bug reports, please open an issue on the GitHub repository.

**Disclaimer**: Trading cryptocurrencies carries inherent risks. This bot is provided as-is, and users should exercise caution and conduct their own research before trading.

