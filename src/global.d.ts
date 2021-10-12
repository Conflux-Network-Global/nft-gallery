/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface Window {
  ethereum?: {
    isMetaMask?: true;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
  };
  web3?: any;
}
