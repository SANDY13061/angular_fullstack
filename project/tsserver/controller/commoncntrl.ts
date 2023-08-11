import { CommonDBQry } from "../model/commondb";
const commonCtrl = new CommonDBQry();
let isDBConnected=false;
let isDBCheckRunning=false; 

export class CommonCtrl{
  constructor(){}
  async checkDB() {
      let result = await  commonCtrl.checkDB();
      if(result?.success){
        isDBConnected=true
        isDBCheckRunning=false;
        console.log("db connected")
         
        }
        else if( result?.connection_error){
          isDBConnected=false;
          isDBCheckRunning=true; 
          console.log("could not conect db, will retry in 30s")
          setTimeout(()=> {
            this.checkDB()
          },30000);
          
        }
        else {
          isDBConnected=true;
          isDBCheckRunning=false;
          console.log("db connected, qury having error");
          
          
        } 
        
          
        }
  getIsDBConnected(){
    if(isDBConnected && !isDBCheckRunning)this.checkDB();
    return isDBConnected;
  }
}

