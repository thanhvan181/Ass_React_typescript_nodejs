import Product from "../models/product"

export const create = async (req, res) => {
    try {
        const products = await new Product(req.body).save();
        res.json(products)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const list = async (req, res) => {
    try {
        const products = await Product.find().exec();
        res.json(products)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}
// export const remove = async ( req, res) => {
//     const condition = { _id: req.params.id};
//     try {
//         const categories = await Category.findOneAndDelete(condition).exec();
//         res.json(categories)
//     } catch (error) {
        
//     }
// }