import Product from "../models/product"
import slugify from "slugify"

export const create = async (req, res) => {
   
    try {
        req.body.slug = slugify(req.body.name,
            {
                replacement: '-',  // replace spaces with replacement character, defaults to `-`
                remove: undefined, // remove characters that match regex, defaults to `undefined`
                lower: false,      // convert to lower case, defaults to `false`
                strict: false,     // strip special characters except replacement, defaults to `false`
                locale: 'vi',       // language code of the locale to use
                trim: true         // trim leading and trailing replacement chars, defaults to `true`
              }
            )
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
export const getProducts = async (req, res) => {

        const filter = {'injectionPark_id': req.params.id}
    try {
        const products = await Product.find(filter).exec();
        res.json(products)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}
// export const getProductPrice = async (req, res) => {

//     const filter = {'price': req.body}
//     try {
//         const productsPrice = await Product.find(filter).exec();
//         res.json(productsPrice)
        
//     } catch (error) {
    
//         console.log("error", error);
//         res.status(400).json({
//             message: "khong them dc"
//         })
       
//     }


// }
export const getProductsCategory = async (req, res) => {
    // console.log("ac")

    const filter = {'category_id': req.params.id}
try {
    const productsCate = await Product.find(filter).exec();
    res.json(productsCate)
    
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
        const products = await Product.findOneAndDelete(condition).exec();
        res.json(products)
    } catch (error) {
        res.status(error).json({
            message: "loi khong them duoc"
        })
        
    }
}
export const read = async (req, res) => {
    const condition = { _id: req.params.id};
    try {
        const products = await Product.findOne(condition).exec();
        res.json(products)
    } catch (error) {
        res.status(error).json({
            message: "loi khong them duoc"
        })
        
    }

}
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    console.log("Update: ", condition)
    const doc = req.body;
    console.log("Update data: ", doc)
    const option = { new: true};
    try {
        const products = await Product.findOneAndUpdate(condition, doc, option);
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
