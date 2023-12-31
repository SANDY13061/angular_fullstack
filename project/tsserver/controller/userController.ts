import {UsersDBQry} from "../model/userdb";
import {CommonCtrl} from "./commoncntrl"
const usrdb =new UsersDBQry();
const cmnCntrl=new CommonCtrl() 
export class UserController{
    constructor(){}
        async register(param:any){
            let result=await usrdb.register(param);
            if (result?.success){
                return{success:true,rowCount:result.rowCount,rows: result.rows}

            }
            else{
                if (result?.connection_error) cmnCntrl.getIsDBConnected();
                return {success:false,message:result?.message}
            }

        }
        async login(param:any){
            let result =await usrdb.login(param.email);
            console.log(result?.rows);
            if(result?.success && result?.rowCount && result?.rowCount > 0){
                let res=result.rows[0];
                if(res.password === param.password){
                    let papa=await usrdb.userdata(res.email,res.name,res.superuser)
                    console.log(res.name)
                    return {success: true, rows: [{name:res.name,user_id:res.user_id,email:res.email}]};
                }
                else{
                    return{success:false,message:"Invalid user/password"};

                }
                
            }
            else{
                return{success:false,message:"Invalid user/password"};

            }
        }
        async LoginUserData(){
            let result=await usrdb.LoginUserData();
            if (result?.success){
                return{success:true,rowCount:result.rowCount,rows: result.rows}
    
            }
            else{ 
                if (result?.connection_error) cmnCntrl.getIsDBConnected();
                return {success:false,message:result?.message}
            }
    

    }
        async getNonAdminUserList(){
            let result=await usrdb.getNonAdminUserList();
            if (result?.success){
                return{success:true,rowCount:result.rowCount,rows: result.rows}

            }
            else{ 
                if (result?.connection_error) cmnCntrl.getIsDBConnected();
                return {success:false,message:result?.message}
            }

        }
        async deleteUser(id:number){
            let result=await usrdb.deleteUser(id);
            if (result?.success){
                return{success:true,rowCount:result.rowCount,rows: result.rows}

            }
            else{ 
                if (result?.connection_error) cmnCntrl.getIsDBConnected();
                return {success:false,message:result?.message}
            }

        }
        async editUser(id:number){
            let result=await usrdb.editUser(id);
            if (result?.success){
                return{success:true,rowCount:result.rowCount,rows: result.rows}

            }
            else{ 
                if (result?.connection_error) cmnCntrl.getIsDBConnected();
                return {success:false,message:result?.message}
            }

        }

    }



