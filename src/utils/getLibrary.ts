/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Web3Provider } from '@ethersproject/providers';

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider, 'any');

  library.pollingInterval = 15000;

  return library;
}
