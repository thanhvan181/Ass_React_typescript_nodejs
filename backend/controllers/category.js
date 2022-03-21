import Category from "../models/category"

export const create = async (req, res) => {
    try {
        const categories = await new Category(req.body).save();
        res.json(categories)
        
    } catch (error) {

        
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}