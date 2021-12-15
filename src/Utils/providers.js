/* eslint-disable import/no-anonymous-default-export */
import { ethers } from "ethers";
import getRpcUrl from "./getRPCUrl";

const RPC_URL = getRpcUrl();

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL);

export default null;
