/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, SudoMsg, Uint128, Coin } from "./HackAtom.types";
import { HackAtomQueryClient } from "./HackAtom.client";
export interface HackAtomReactQuery<TResponse, TData = TResponse> {
  client: HackAtomQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface HackAtomGetIntQuery<TData> extends HackAtomReactQuery<GetIntResponse, TData> {}
export function useHackAtomGetIntQuery<TData = GetIntResponse>({
  client,
  options
}: HackAtomGetIntQuery<TData>) {
  return useQuery<GetIntResponse, Error, TData>(["hackAtomGetInt", client.contractAddress], () => client.getInt(), options);
}
export interface HackAtomRecurseQuery<TData> extends HackAtomReactQuery<RecurseResponse, TData> {
  args: {
    depth: number;
    work: number;
  };
}
export function useHackAtomRecurseQuery<TData = RecurseResponse>({
  client,
  args,
  options
}: HackAtomRecurseQuery<TData>) {
  return useQuery<RecurseResponse, Error, TData>(["hackAtomRecurse", client.contractAddress, JSON.stringify(args)], () => client.recurse({
    depth: args.depth,
    work: args.work
  }), options);
}
export interface HackAtomOtherBalanceQuery<TData> extends HackAtomReactQuery<OtherBalanceResponse, TData> {
  args: {
    address: string;
  };
}
export function useHackAtomOtherBalanceQuery<TData = OtherBalanceResponse>({
  client,
  args,
  options
}: HackAtomOtherBalanceQuery<TData>) {
  return useQuery<OtherBalanceResponse, Error, TData>(["hackAtomOtherBalance", client.contractAddress, JSON.stringify(args)], () => client.otherBalance({
    address: args.address
  }), options);
}
export interface HackAtomVerifierQuery<TData> extends HackAtomReactQuery<VerifierResponse, TData> {}
export function useHackAtomVerifierQuery<TData = VerifierResponse>({
  client,
  options
}: HackAtomVerifierQuery<TData>) {
  return useQuery<VerifierResponse, Error, TData>(["hackAtomVerifier", client.contractAddress], () => client.verifier(), options);
}