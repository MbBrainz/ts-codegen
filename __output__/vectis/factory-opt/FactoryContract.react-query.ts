/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "react-query";
import { AdminAddrResponse, CodeIdResponse, CodeIdType, Uint128, Binary, CreateWalletMsg, Guardians, MultiSig, Coin, Cw20Coin, ExecuteMsg, Addr, ProxyMigrationTxMsg, WalletAddr, CanonicalAddr, RelayTransaction, FeeResponse, GovecAddrResponse, InstantiateMsg, QueryMsg, WalletQueryPrefix, Duration, StakingOptions, WalletInfo, ContractVersion, WalletsOfResponse, WalletsResponse } from "./FactoryContract";
import { FactoryQueryClient } from "./FactoryContract";
export interface FactoryAdminAddrQuery {
  client?: FactoryQueryClient;
  options?: UseQueryOptions<AdminAddrResponse | undefined, Error, AdminAddrResponse, (string | undefined)[]>;
}
export function useFactoryAdminAddrQuery({
  client,
  options
}: FactoryAdminAddrQuery) {
  return useQuery<AdminAddrResponse | undefined, Error, AdminAddrResponse, (string | undefined)[]>(["factoryAdminAddr", client?.contractAddress], () => client ? client.adminAddr() : undefined, { ...options,
    enabled: !!client && options?.enabled
  });
}
export interface FactoryGovecAddrQuery {
  client?: FactoryQueryClient;
  options?: UseQueryOptions<GovecAddrResponse | undefined, Error, GovecAddrResponse, (string | undefined)[]>;
}
export function useFactoryGovecAddrQuery({
  client,
  options
}: FactoryGovecAddrQuery) {
  return useQuery<GovecAddrResponse | undefined, Error, GovecAddrResponse, (string | undefined)[]>(["factoryGovecAddr", client?.contractAddress], () => client ? client.govecAddr() : undefined, { ...options,
    enabled: !!client && options?.enabled
  });
}
export interface FactoryFeeQuery {
  client?: FactoryQueryClient;
  options?: UseQueryOptions<FeeResponse | undefined, Error, FeeResponse, (string | undefined)[]>;
}
export function useFactoryFeeQuery({
  client,
  options
}: FactoryFeeQuery) {
  return useQuery<FeeResponse | undefined, Error, FeeResponse, (string | undefined)[]>(["factoryFee", client?.contractAddress], () => client ? client.fee() : undefined, { ...options,
    enabled: !!client && options?.enabled
  });
}
export interface FactoryCodeIdQuery {
  client?: FactoryQueryClient;
  options?: UseQueryOptions<CodeIdResponse | undefined, Error, CodeIdResponse, (string | undefined)[]>;
  args: {
    ty: string;
  };
}
export function useFactoryCodeIdQuery({
  client,
  args,
  options
}: FactoryCodeIdQuery) {
  return useQuery<CodeIdResponse | undefined, Error, CodeIdResponse, (string | undefined)[]>(["factoryCodeId", client?.contractAddress], () => client ? client.codeId({
    ty: args.ty
  }) : undefined, { ...options,
    enabled: !!client && options?.enabled
  });
}
export interface FactoryWalletsOfQuery {
  client?: FactoryQueryClient;
  options?: UseQueryOptions<WalletsOfResponse | undefined, Error, WalletsOfResponse, (string | undefined)[]>;
  args: {
    limit?: number;
    startAfter?: string;
    user: string;
  };
}
export function useFactoryWalletsOfQuery({
  client,
  args,
  options
}: FactoryWalletsOfQuery) {
  return useQuery<WalletsOfResponse | undefined, Error, WalletsOfResponse, (string | undefined)[]>(["factoryWalletsOf", client?.contractAddress], () => client ? client.walletsOf({
    limit: args.limit,
    startAfter: args.startAfter,
    user: args.user
  }) : undefined, { ...options,
    enabled: !!client && options?.enabled
  });
}
export interface FactoryWalletsQuery {
  client?: FactoryQueryClient;
  options?: UseQueryOptions<WalletsResponse | undefined, Error, WalletsResponse, (string | undefined)[]>;
  args: {
    limit?: number;
    startAfter?: WalletQueryPrefix;
  };
}
export function useFactoryWalletsQuery({
  client,
  args,
  options
}: FactoryWalletsQuery) {
  return useQuery<WalletsResponse | undefined, Error, WalletsResponse, (string | undefined)[]>(["factoryWallets", client?.contractAddress], () => client ? client.wallets({
    limit: args.limit,
    startAfter: args.startAfter
  }) : undefined, { ...options,
    enabled: !!client && options?.enabled
  });
}