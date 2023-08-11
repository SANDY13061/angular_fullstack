import { Pool,PoolClient } from "pg";
import {pgRbconfig} from "./config";
let pool= new Pool(pgRbconfig);
export async function fnDbQuery(methodName:string,queryText:string, queryparam?:any){
  let client:PoolClient;
  let qryResult;
  try{
    client=await pool.connect();
    try{
      let qparm= queryparam? queryparam:[];
      const qResult=await client.query(queryText,qparm);
      qryResult={success:true, rowCount:qResult.rowCount,rows:qResult.rows};
    }catch(e:any){
      qryResult= {success:false,message:e.message};

    }finally{
      client.release();
    }

    }catch(e:any){
      qryResult={success:false, connection_error:true,message:e.message};

    }finally{
      return qryResult;
    }

  }
  pool.on('error',(err:Error)=>{
    console.log('${process.pid},PSQL poll error, ${err.message},${err.stack}')
  });

