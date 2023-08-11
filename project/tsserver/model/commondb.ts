import{ fnDbQuery } from "../config/psqiAPM"

export class CommonDBQry{
  constructor(){ }
  async checkDB(){
    let qryText="SELECT now()";
    return fnDbQuery("commonDBQry.checkDB",qryText);
  }
}
