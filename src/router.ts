import { parse } from "path";
import { get } from "./app";
import { plus } from "./scripts/piluspilus";
import { minus } from "./scripts/minusminus";
import { show } from "./scripts/showscore";
import { info, setinfo } from "./scripts/infoname";

export function routstart()
{
  let app=get();
  app.message('ping', async ({message, say}) => {
    await say('pong');
  });
  
  app.message('sis', async ({message, say}) => {
    
    const mes=JSON.parse(JSON.stringify(message)).text;
    console.log(mes); //for testing 
    if(mes.includes(" ++"))
    {
      const i=mes.indexOf('+');
      const user=mes.substring(4,i-1);
      
      plus(user).then((value) => {
        say("jeeeez! "+`<@${user}> `+", your score is now " +  value);
        console.log(value);
     });

     
      
    }

    else if(mes.includes("++"))
    {
      const i=mes.indexOf('+');
      const user=mes.substring(4,i);
      plus(user).then((value) => {
        say("jeeeez! "+`<@${user}> `+", your score is now " +  value);
        console.log(value);
     });
      
    }
    if(mes.includes(" --"))
    {
      const i=mes.indexOf('-');
      const user=mes.substring(4,i-1);
      minus(user).then((value) => {
        say("uh oh! "+`<@${user}> `+", your score is now " +  value);
        console.log(value);
     });
      
    }

    else if(mes.includes("--"))
    {
      const i=mes.indexOf('-');
      const user=mes.substring(4,i);
      minus(user).then((value) => {
        say("uh oh! "+`<@${user}> `+", your score is now " +  value);
        console.log(value);
     });
      
    }

    if(mes.includes("show b26"))
    {
      
      show("b26").then((value) => {
         say(value);
     });
     
    }
    else if(mes.includes("show b25"))
    {
      
      show("b25").then((value) => {
         say(value);
     });
     
    }


    if(mes.includes("info"))
    {
      const i=mes.indexOf('o');
      const user=mes.substring(i+2, mes.length);
      info(user).then((value) => {
        say(value);
    });
    }
    else if(mes.includes("is"))
    {
      const i=mes.indexOf(" is");
      const user=mes.substring(4, i);
      const info=mes.substring(i+4, mes.length);
      setinfo(user, info).then((value) => {
        say(value + " " + mes.substring(4, mes.length) );
    });
    }
  });
  

}
