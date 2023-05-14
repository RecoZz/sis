import { getClient, getValue } from "../services/redis";
 export async function show(batch:string)
 {
    
     
    var scoreslist:string="The scores are \n";
     let name:string=await getValue(batch);
    const names:string[] = name.split(" ");
     var i:number;
     
     console.log(names);
     console.log(names.length);
     
     
     for(i=0; i<names.length;i++)
     {
        let st:string=names[i];
        
        let sco:string=await getValue(names[i]);
            scoreslist+=st+ "\t"+ "\t"+":"+"\t"+ sco +"\n";
            console.log(scoreslist);
         
     
     }
     console.log(scoreslist);
     
     
     return scoreslist;
     
 }