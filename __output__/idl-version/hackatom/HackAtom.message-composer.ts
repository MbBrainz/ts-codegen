/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, SudoMsg, Uint128, Coin } from "./HackAtom.types";
export interface HackAtomMessage {
  contractAddress: string;
  sender: string;
  release: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  cpuLoop: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  storageLoop: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  memoryLoop: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  messageLoop: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  allocateLargeMemory: ({
    pages
  }: {
    pages: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  panic: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  userErrorsInApiCalls: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class HackAtomMessageComposer implements HackAtomMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.release = this.release.bind(this);
    this.cpuLoop = this.cpuLoop.bind(this);
    this.storageLoop = this.storageLoop.bind(this);
    this.memoryLoop = this.memoryLoop.bind(this);
    this.messageLoop = this.messageLoop.bind(this);
    this.allocateLargeMemory = this.allocateLargeMemory.bind(this);
    this.panic = this.panic.bind(this);
    this.userErrorsInApiCalls = this.userErrorsInApiCalls.bind(this);
  }

  release = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          release: {}
        })),
        funds
      })
    };
  };
  cpuLoop = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          cpu_loop: {}
        })),
        funds
      })
    };
  };
  storageLoop = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          storage_loop: {}
        })),
        funds
      })
    };
  };
  memoryLoop = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          memory_loop: {}
        })),
        funds
      })
    };
  };
  messageLoop = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          message_loop: {}
        })),
        funds
      })
    };
  };
  allocateLargeMemory = ({
    pages
  }: {
    pages: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          allocate_large_memory: {
            pages
          }
        })),
        funds
      })
    };
  };
  panic = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          panic: {}
        })),
        funds
      })
    };
  };
  userErrorsInApiCalls = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          user_errors_in_api_calls: {}
        })),
        funds
      })
    };
  };
}