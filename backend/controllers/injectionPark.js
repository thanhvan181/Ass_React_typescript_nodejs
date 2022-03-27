import Injectionpark from "../models/injectionPack"

export const createInjectionPark = async (req, res) => {
    try {
        const injectionPark = await new Injectionpark(req.body).save();
        res.json(injectionPark)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const listInjectionPark = async (req, res) => {
    try {
        const injectionPark = await Injectionpark.find().exec();
        res.json(injectionPark)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}