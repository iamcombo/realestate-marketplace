import type { Chain } from 'viem';
import { createPublicClient, createWalletClient, custom, http } from 'viem';

const localChain: Chain = {
  id: 31337,
  name: 'Localhost',
  network: 'localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
    public: {
      http: [],
      webSocket: undefined,
    },
  },
  testnet: false,
};

export const walletClient = createWalletClient({
  chain: localChain,
  transport: custom(window?.ethereum),
});

export const publicClient = createPublicClient({
  chain: localChain,
  transport: http(),
});
