import{fnDbQuery} from "../config/psqiAPM"

export class UsersDBQry{
  constructor(){

  }
  async register(param:any){
    const qryText="INSERT INTO registerdata(email,name,password)VALUES (LOWER($1), $2, $3) returning id";
    const qryParm=[param.email,param.name,param.password];
    return fnDbQuery("register",qryText,qryParm)
  }
  async login(email:string){
    const qryText=`SELECT id as user_id,email,password,name FROM registerdata WHERE email= lower($1)`;
    const qryParm=[email];
    console.log(qryText,qryParm);
    return fnDbQuery('login',qryText,qryParm)
  }
}
