/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export interface CanExecuteRelayResponse {
  can_execute: boolean;
  [k: string]: unknown;
}
export type CosmosMsgForEmpty = {
  bank: BankMsg;
} | {
  custom: Empty;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  wasm: WasmMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Coin[];
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
    [k: string]: unknown;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
    [k: string]: unknown;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
    [k: string]: unknown;
  };
};
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
    [k: string]: unknown;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
    [k: string]: unknown;
  };
} | {
  clear_admin: {
    contract_addr: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface Empty {
  [k: string]: unknown;
}
export type ExecuteMsgForEmpty = {
  execute: {
    msgs: CosmosMsgForEmpty[];
    [k: string]: unknown;
  };
} | {
  revert_freeze_status: {
    [k: string]: unknown;
  };
} | {
  relay: {
    transaction: RelayTransaction;
    [k: string]: unknown;
  };
} | {
  rotate_user_key: {
    new_user_address: string;
    [k: string]: unknown;
  };
} | {
  add_relayer: {
    new_relayer_address: Addr;
    [k: string]: unknown;
  };
} | {
  remove_relayer: {
    relayer_address: Addr;
    [k: string]: unknown;
  };
} | {
  update_guardians: {
    guardians: Guardians;
    new_multisig_code_id?: number | null;
    [k: string]: unknown;
  };
} | {
  update_label: {
    new_label: string;
    [k: string]: unknown;
  };
};
export type Addr = string;
export interface RelayTransaction {
  message: Binary;
  nonce: number;
  signature: Binary;
  user_pubkey: Binary;
  [k: string]: unknown;
}
export interface Guardians {
  addresses: string[];
  guardians_multisig?: MultiSig | null;
  [k: string]: unknown;
}
export interface MultiSig {
  multisig_initial_funds: Coin[];
  threshold_absolute_count: number;
  [k: string]: unknown;
}
export interface InfoResponse {
  code_id: number;
  guardians: Addr[];
  is_frozen: boolean;
  label: string;
  multisig_address?: Addr | null;
  multisig_code_id: number;
  nonce: number;
  relayers: Addr[];
  user_addr: Addr;
  version: ContractVersion;
  [k: string]: unknown;
}
export interface ContractVersion {
  contract: string;
  version: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  addr_prefix: string;
  code_id: number;
  create_wallet_msg: CreateWalletMsg;
  multisig_code_id: number;
  [k: string]: unknown;
}
export interface CreateWalletMsg {
  guardians: Guardians;
  label: string;
  proxy_initial_funds: Coin[];
  relayers: string[];
  user_pubkey: Binary;
  [k: string]: unknown;
}
export type QueryMsg = {
  info: {
    [k: string]: unknown;
  };
} | {
  can_execute_relay: {
    sender: string;
    [k: string]: unknown;
  };
};
export type Uint64 = number;
export interface ProxyReadOnlyInterface {
  contractAddress: string;
  info: () => Promise<InfoResponse>;
  canExecuteRelay: ({
    sender
  }: {
    sender: string;
  }) => Promise<CanExecuteRelayResponse>;
}
export class ProxyQueryClient implements ProxyReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.info = this.info.bind(this);
    this.canExecuteRelay = this.canExecuteRelay.bind(this);
  }

  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
  canExecuteRelay = async ({
    sender
  }: {
    sender: string;
  }): Promise<CanExecuteRelayResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      can_execute_relay: {
        sender
      }
    });
  };
}
export interface ProxyInterface extends ProxyReadOnlyInterface {
  contractAddress: string;
  sender: string;
  execute: ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  revertFreezeStatus: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  relay: ({
    transaction
  }: {
    transaction: RelayTransaction;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  rotateUserKey: ({
    newUserAddress
  }: {
    newUserAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  addRelayer: ({
    newRelayerAddress
  }: {
    newRelayerAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  removeRelayer: ({
    relayerAddress
  }: {
    relayerAddress: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updateGuardians: ({
    guardians,
    newMultisigCodeId
  }: {
    guardians: Guardians;
    newMultisigCodeId?: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updateLabel: ({
    newLabel
  }: {
    newLabel: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class ProxyClient extends ProxyQueryClient implements ProxyInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.execute = this.execute.bind(this);
    this.revertFreezeStatus = this.revertFreezeStatus.bind(this);
    this.relay = this.relay.bind(this);
    this.rotateUserKey = this.rotateUserKey.bind(this);
    this.addRelayer = this.addRelayer.bind(this);
    this.removeRelayer = this.removeRelayer.bind(this);
    this.updateGuardians = this.updateGuardians.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
  }

  execute = async ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute: {
        msgs
      }
    }, fee, memo, funds);
  };
  revertFreezeStatus = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      revert_freeze_status: {}
    }, fee, memo, funds);
  };
  relay = async ({
    transaction
  }: {
    transaction: RelayTransaction;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      relay: {
        transaction
      }
    }, fee, memo, funds);
  };
  rotateUserKey = async ({
    newUserAddress
  }: {
    newUserAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      rotate_user_key: {
        new_user_address: newUserAddress
      }
    }, fee, memo, funds);
  };
  addRelayer = async ({
    newRelayerAddress
  }: {
    newRelayerAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_relayer: {
        new_relayer_address: newRelayerAddress
      }
    }, fee, memo, funds);
  };
  removeRelayer = async ({
    relayerAddress
  }: {
    relayerAddress: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_relayer: {
        relayer_address: relayerAddress
      }
    }, fee, memo, funds);
  };
  updateGuardians = async ({
    guardians,
    newMultisigCodeId
  }: {
    guardians: Guardians;
    newMultisigCodeId?: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_guardians: {
        guardians,
        new_multisig_code_id: newMultisigCodeId
      }
    }, fee, memo, funds);
  };
  updateLabel = async ({
    newLabel
  }: {
    newLabel: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_label: {
        new_label: newLabel
      }
    }, fee, memo, funds);
  };
}