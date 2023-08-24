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
    const qryText=`SELECT id as user_id,email,password,name,superuser FROM registerdata WHERE email= lower($1)`;
    const qryParm=[email];
    console.log(qryText,qryParm);
    return fnDbQuery('login',qryText,qryParm)
  }
  async getNonAdminUserList(){
    const qryText=`SELECT id, email, name,create_on FROM registerdata where not superuser order by id`;
    return fnDbQuery("getUserList",qryText);
  }
  async deleteUser(id:number){
    const qryText=`DELETE FROM registerdata WHERE id = $1`;
    const qryParm=[id];
    return fnDbQuery("deleteUser",qryText,qryParm);
  }
  async editUser(param:any){
    const qryText=`UPDATE registerdata SET email = $1,name = $2 WHERE id=$3`
    const qryparam=[param.email,param.name,param.id]
    return fnDbQuery("deketeUser",qryText,qryparam)
  }
  async userdata(email:string,name:string,superuser:string){
    const qryText=`UPDATE logindata SET email = $1 ,name = $2,superuser=$3 WHERE id=1`
    const qryparam=[email,name,superuser]
    return fnDbQuery("userdata",qryText,qryparam)
  
}
async LoginUserData(){
  const qryText=`SELECT email,name,superuser FROM logindata where id=1`;
  return fnDbQuery("getUserList",qryText);
}
}

