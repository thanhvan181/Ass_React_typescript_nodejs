import City from "../models/city";



export const create = async (req, res) => {
    try {
        const citys = await new City(req.body).save();
        res.json(citys)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const list = async (req, res) => {
    try {
        const citys = await  City.find().exec();
        res.json(citys)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}