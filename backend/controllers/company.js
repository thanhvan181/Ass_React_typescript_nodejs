import Company from "../models/company";



export const create = async (req, res) => {
    try {
        const companies = await new Company(req.body).save();
        res.json(companies)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const list = async (req, res) => {
    try {
        const companies = await  Company.find().exec();
        res.json(companies)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}