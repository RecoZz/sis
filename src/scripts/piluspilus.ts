import { parse } from "path";
import { getClient,getValue } from "../services/redis";

export async function plus( user:string)
{
    let client=getClient();
    (await client).incr(user);
    return await getValue(user);
}