/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Duration, Threshold, Decimal, InstantiateMsg, Voter, ExecuteMsg, Expiration, Timestamp, Uint64, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Vote, Coin, Empty, QueryMsg, Status, ThresholdResponse, ProposalListResponse, ProposalResponseForEmpty, VoterListResponse, VoterDetail, VoteListResponse, VoteInfo, VoteResponse, VoterResponse } from "./Cw3FixedMultiSig.types";
export interface Cw3FixedMultiSigMsg {
  contractAddress: string;
  sender: string;
  propose: ({
    description,
    latest,
    msgs,
    title
  }: {
    description: string;
    latest?: Expiration;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  vote: ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  execute: ({
    proposalId
  }: {
    proposalId: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  close: ({
    proposalId
  }: {
    proposalId: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class Cw3FixedMultiSigMsgComposer implements Cw3FixedMultiSigMsg {
  sender: string;
  contractAddress: string;
  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
  }
  propose = ({
    description,
    latest,
    msgs,
    title
  }: {
    description: string;
    latest?: Expiration;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          propose: {
            description,
            latest,
            msgs,
            title
          }
        })),
        funds: _funds
      })
    };
  };
  vote = ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          vote: {
            proposal_id: proposalId,
            vote
          }
        })),
        funds: _funds
      })
    };
  };
  execute = ({
    proposalId
  }: {
    proposalId: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          execute: {
            proposal_id: proposalId
          }
        })),
        funds: _funds
      })
    };
  };
  close = ({
    proposalId
  }: {
    proposalId: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          close: {
            proposal_id: proposalId
          }
        })),
        funds: _funds
      })
    };
  };
}