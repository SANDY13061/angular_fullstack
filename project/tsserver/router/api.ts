import Router  from "express";
import {CommonCtrl} from "../controller/commoncntrl";
import { UserController } from "../controller/userController"
const router= Router();
module.exports=router;

const cmnCntrl= new CommonCtrl();
const usrCntrl= new UserController();
console.log("api router is loaded");
initialize()
async function initialize() {
  cmnCntrl.checkDB();
}
router.post("/register", async (req: any, res)=>{
  if (cmnCntrl.getIsDBConnected()){
    console.log(req.body);
    let result = await usrCntrl.register(req.body);
    if (result.success)res.status(200).json(result);
    else res.status(200).json(result);

  }
  else{
    res.status(501).json({success:false,message:"db connection failure try after some times"});

  }
  
});
router.post("/login", async (req: any, res)=>{
  if (cmnCntrl.getIsDBConnected()){
    console.log(req.body);
    let result = await usrCntrl.login(req.body);
    if (result.success)res.status(200).json(result);
    else res.status(400).json(result);

  }
  else{
    res.status(501).json({success:false,message:"db connection failure try after some times"});

  }
  
});

