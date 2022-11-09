/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { Timestamp, Uint64, Uint128, ConfigResponse, Coin, Addr, Config, ExecuteMsg, Decimal, InstantiateMsg, InstantiateMsg1, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, QueryMsg } from "./Minter.types";
import { MinterQueryClient } from "./Minter.client";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<MinterQueryClient, QueryClientParams>({
  key: "minterQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    return new MinterQueryClient(client, contractAddress);
  }
});
export const configSelector = selectorFamily<ConfigResponse, QueryClientParams & {
  params: Parameters<MinterQueryClient["config"]>;
}>({
  key: "minterConfig",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.config(...params);
  }
});
export const mintableNumTokensSelector = selectorFamily<MintableNumTokensResponse, QueryClientParams & {
  params: Parameters<MinterQueryClient["mintableNumTokens"]>;
}>({
  key: "minterMintableNumTokens",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.mintableNumTokens(...params);
  }
});
export const startTimeSelector = selectorFamily<StartTimeResponse, QueryClientParams & {
  params: Parameters<MinterQueryClient["startTime"]>;
}>({
  key: "minterStartTime",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.startTime(...params);
  }
});
export const mintPriceSelector = selectorFamily<MintPriceResponse, QueryClientParams & {
  params: Parameters<MinterQueryClient["mintPrice"]>;
}>({
  key: "minterMintPrice",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.mintPrice(...params);
  }
});
export const mintCountSelector = selectorFamily<MintCountResponse, QueryClientParams & {
  params: Parameters<MinterQueryClient["mintCount"]>;
}>({
  key: "minterMintCount",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.mintCount(...params);
  }
});