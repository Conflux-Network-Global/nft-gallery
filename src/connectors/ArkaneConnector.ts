/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import {
  Arkane,
  ArkaneSubProviderOptions,
} from '@arkane-network/web3-arkane-provider';
import { ConnectorUpdate } from '@web3-react/types';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import { AbstractConnector } from '@web3-react/abstract-connector';

export default class ArkaneConnector extends AbstractConnector {
  private options: ArkaneSubProviderOptions;

  private chainId = 1;

  private provider: any;

  private web3Provider!: Web3Provider;

  constructor(options: ArkaneSubProviderOptions) {
    super();
    this.options = options;
  }

  public async activate(): Promise<ConnectorUpdate> {
    const provider = await Arkane.createArkaneProviderEngine(this.options);
    const web3Provider = new Web3Provider(provider as ExternalProvider, 'any');
    const accounts = await web3Provider.listAccounts();

    return {
      provider,
      chainId: 1,
      account: accounts[0],
    };
  }

  public async getProvider(): Promise<any> {
    return this.provider;
  }

  public async getChainId(): Promise<number> {
    return Promise.resolve(this.chainId);
  }

  public async getAccount(): Promise<string> {
    const accounts = await this.web3Provider.listAccounts();

    return accounts[0];
  }

  public async deactivate(): Promise<void> {
    return undefined;
  }
}
