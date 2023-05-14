import { parse } from "path";
import { getClient, getValue } from "../services/redis";

export async function minus( user:string)
{
    let client=getClient();
    (await client).decr(user);
    return await getValue(user);
}