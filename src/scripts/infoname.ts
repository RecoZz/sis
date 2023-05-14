import { getClient,getValue, setValue } from "../services/redis";
export async function info( user:string)
{ 
    let info:string= await getValue(user+"_info");
    if(info==null)
    {
    return("dunno this guy");
    }
    else
    {
    return info;
    }
    
}
export async function setinfo( user:string, info:string)
{ 
    let sc=user+ "_info";
    console.log(sc);
    await setValue(sc, info);
    return("Got it!");
    
    
}
