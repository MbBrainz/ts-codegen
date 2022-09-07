/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, SudoMsg, Uint128, Coin } from "./HackAtom.types";
import { HackAtomQueryClient } from "./HackAtom.client";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<HackAtomQueryClient, QueryClientParams>({
  key: "hackAtomQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    return new HackAtomQueryClient(client, contractAddress);
  }
});
export const verifierSelector = selectorFamily<VerifierResponse, QueryClientParams & {
  params: Parameters<HackAtomQueryClient["verifier"]>;
}>({
  key: "hackAtomVerifier",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.verifier(...params);
  }
});
export const otherBalanceSelector = selectorFamily<OtherBalanceResponse, QueryClientParams & {
  params: Parameters<HackAtomQueryClient["otherBalance"]>;
}>({
  key: "hackAtomOtherBalance",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.otherBalance(...params);
  }
});
export const recurseSelector = selectorFamily<RecurseResponse, QueryClientParams & {
  params: Parameters<HackAtomQueryClient["recurse"]>;
}>({
  key: "hackAtomRecurse",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.recurse(...params);
  }
});
export const getIntSelector = selectorFamily<GetIntResponse, QueryClientParams & {
  params: Parameters<HackAtomQueryClient["getInt"]>;
}>({
  key: "hackAtomGetInt",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.getInt(...params);
  }
});