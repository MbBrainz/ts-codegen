/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { selectorFamily } from "recoil";
import { cosmWasmClient } from "./chain";
import { CanExecuteRelayResponse, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, ExecuteMsgForEmpty, Addr, RelayTransaction, Guardians, MultiSig, InfoResponse, ContractVersion, InstantiateMsg, CreateWalletMsg, QueryMsg, Uint64 } from "./Govec.types";
import { GovecQueryClient } from "./Govec.client";
type QueryClientParams = {
  contractAddress: string;
};
export const queryClient = selectorFamily<GovecQueryClient, QueryClientParams>({
  key: "govecQueryClient",
  get: ({
    contractAddress
  }) => ({
    get
  }) => {
    const client = get(cosmWasmClient);
    return new GovecQueryClient(client, contractAddress);
  }
});
export const infoSelector = selectorFamily<InfoResponse, QueryClientParams & {
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
    return await client.info(...params);
  }
});
export const canExecuteRelaySelector = selectorFamily<CanExecuteRelayResponse, QueryClientParams & {
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
    return await client.canExecuteRelay(...params);
  }
});