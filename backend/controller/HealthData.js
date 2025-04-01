import { HealthData } from "../models/HealthData.js";

export const senddata =async(req,res)=>{
    try {
        const { userId,temperature,spO2,ecg,heartRate } = req.body;
        const newData= new HealthData({
            userId,
            temperature,
            spO2,
            ecg,
            heartRate
        });

        await newData.save();
        res.status(201).json({message:"HealthData stored successfully",HealthData:newData})

    } catch (error) {
        res.status(500).json({error:"Error saving recipe",details:error.message});
    }
}

export const getdata=async(req,res)=>{
    try {
        const {id}=req.params;
        const data=await HealthData.find({userId:id});
        res.json({
            success:true,
            response:data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error Fetching healthdata"})
    }
}