/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, AllOperatorsResponse, AllTokensResponse, ApprovalResponse, ApprovalsResponse, Decimal, CollectionInfoResponse, RoyaltyInfoResponse, ContractInfoResponse, ExecuteMsgForEmpty, Binary, MintMsgForEmpty, InstantiateMsg, CollectionInfoForRoyaltyInfoResponse, MinterResponse, NftInfoResponse, NumTokensResponse, OperatorsResponse, QueryMsg, TokensResponse } from "./Sg721Contract";
import { Sg721QueryClient } from "./Sg721Contract.ts";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<Sg721QueryClient | undefined, QueryClientParams>({
  key: "sg721QueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    if (!client) return;
    return new Sg721QueryClient(client, contractAddress);
  }
});
export const ownerOfSelector = selectorFamily<OwnerOfResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["ownerOf"]>;
}>({
  key: "sg721OwnerOf",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.ownerOf(...params);
  }
});
export const approvalSelector = selectorFamily<ApprovalResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["approval"]>;
}>({
  key: "sg721Approval",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.approval(...params);
  }
});
export const approvalsSelector = selectorFamily<ApprovalsResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["approvals"]>;
}>({
  key: "sg721Approvals",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.approvals(...params);
  }
});
export const allOperatorsSelector = selectorFamily<AllOperatorsResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["allOperators"]>;
}>({
  key: "sg721AllOperators",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.allOperators(...params);
  }
});
export const numTokensSelector = selectorFamily<NumTokensResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["numTokens"]>;
}>({
  key: "sg721NumTokens",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.numTokens(...params);
  }
});
export const contractInfoSelector = selectorFamily<ContractInfoResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["contractInfo"]>;
}>({
  key: "sg721ContractInfo",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.contractInfo(...params);
  }
});
export const nftInfoSelector = selectorFamily<NftInfoResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["nftInfo"]>;
}>({
  key: "sg721NftInfo",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.nftInfo(...params);
  }
});
export const allNftInfoSelector = selectorFamily<AllNftInfoResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["allNftInfo"]>;
}>({
  key: "sg721AllNftInfo",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.allNftInfo(...params);
  }
});
export const tokensSelector = selectorFamily<TokensResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["tokens"]>;
}>({
  key: "sg721Tokens",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.tokens(...params);
  }
});
export const allTokensSelector = selectorFamily<AllTokensResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["allTokens"]>;
}>({
  key: "sg721AllTokens",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.allTokens(...params);
  }
});
export const minterSelector = selectorFamily<MinterResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["minter"]>;
}>({
  key: "sg721Minter",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.minter(...params);
  }
});
export const collectionInfoSelector = selectorFamily<CollectionInfoResponse | undefined, QueryClientParams & {
  params: Parameters<Sg721QueryClient["collectionInfo"]>;
}>({
  key: "sg721CollectionInfo",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.collectionInfo(...params);
  }
});