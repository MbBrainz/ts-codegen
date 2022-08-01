/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { CanExecuteRelayResponse, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, ExecuteMsgForEmpty, Addr, RelayTransaction, Guardians, MultiSig, InfoResponse, ContractVersion, InstantiateMsg, CreateWalletMsg, QueryMsg, Uint64 } from "./GovecContract";
import { GovecQueryClient } from "./GovecContract.ts";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<GovecQueryClient | undefined, QueryClientParams>({
  key: "govecQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    if (!client) return;
    return new GovecQueryClient(client, contractAddress);
  }
});
export const infoSelector = selectorFamily<InfoResponse | undefined, QueryClientParams & {
  params: Parameters<GovecQueryClient["info"]>;
}>({
  key: "govecInfo",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.info(...params);
  }
});
export const canExecuteRelaySelector = selectorFamily<CanExecuteRelayResponse | undefined, QueryClientParams & {
  params: Parameters<GovecQueryClient["canExecuteRelay"]>;
}>({
  key: "govecCanExecuteRelay",
  get: ({
    params,
    ...queryClientParams
  }) => async ({
    get
  }) => {
    const client = get(queryClient(queryClientParams));
    if (!client) return;
    return await client.canExecuteRelay(...params);
  }
});