import { userModel } from "../model/user.js";

export const signup = async (req,res)=>{
    const {fullname,email,password} = req.body
    try{
        let existingUser = await userModel.find({email:email})

        if(existingUser.length > 0){
           return  res.json({
                success:false,
                msg:"user already exists"
            })
        }
        const userDetails = new userModel({
            fullname,
            email,
            password
        })
        const data = await userDetails.save()

       return res.json({
            success:true,
            data
        })
    }catch(error){
        res.json(error)
    }
}

export const signin = async (req,res)=>{
    const {email,password} = req.body
    
    try{
        let existingUser = await userModel.find({email:email})
        
        if(existingUser <=0)
        {
            return res.json({
                success:false,
                msg:"user not found"
            })
        }
            
            if(existingUser[0].password==password)
            {
                return res.json({
                    success:true,
                    existingUser
                })
            }
        return res.json({
            success:false,
            msg:"invalid credential"
        })
    }catch(error){
        res.json(error)
    }
}

export const allUser = async (req,res)=>{
    let id = req.params.id

    const profile = await userModel.find({_id:id})

    return res.json({
        success:true,
        profile
    })
}