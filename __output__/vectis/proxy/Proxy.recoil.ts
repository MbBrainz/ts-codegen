/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { CanExecuteRelayResponse, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, ExecuteMsgForEmpty, Addr, RelayTransaction, Guardians, MultiSig, InfoResponse, ContractVersion, InstantiateMsg, CreateWalletMsg, QueryMsg, Uint64 } from "./Proxy.types";
import { ProxyQueryClient } from "./Proxy.client";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<ProxyQueryClient, QueryClientParams>({
  key: "proxyQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    return new ProxyQueryClient(client, contractAddress);
  }
});
export const infoSelector = selectorFamily<InfoResponse, QueryClientParams & {
  params: Parameters<ProxyQueryClient["info"]>;
}>({
  key: "proxyInfo",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.info(...params);
  }
});
export const canExecuteRelaySelector = selectorFamily<CanExecuteRelayResponse, QueryClientParams & {
  params: Parameters<ProxyQueryClient["canExecuteRelay"]>;
}>({
  key: "proxyCanExecuteRelay",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    return await client.canExecuteRelay(...params);
  }
});