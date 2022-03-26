import Category from "../models/category"

export const create = async (req, res) => {
    try {
        const categories = await new Category(req.body).save();
        res.json(categories)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const list = async (req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}
export const remove = async ( req, res) => {
    const condition = { _id: req.params.id};
    try {
        const categories = await Category.findOneAndDelete(condition).exec();
        res.json(categories)
    } catch (error) {
        
    }
}