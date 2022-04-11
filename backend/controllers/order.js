import Order from "../models/order"
import Product from "../models/product";



export const create = async (req, res) => {

    try {
        console.log("DATA ORDER: ", req.body)
        const orders = await new Order(req.body).save();
        res.json(orders)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong order duoc roi  "
        })

    }


}

// export const list = async (req, res) => {
//     try {
//         let page = parseInt(req.query.page) || 1
//         let limit = parseInt(req.query.pageSize) || 8
//         let sort = {}
//         console.log("Query params: ", req.query)
//         if (req.query.sortBy && req.query.orderBy) {
//             sort[req.query.sortBy] = req.query.orderBy === 'desc' ? -1 : 1
//         }
//         // if(req.query.getAll){
//         //     const products = await Product.find().exec();
            

//         // }
//         console.log("Sort: ", sort)
//         const products = await Product.find().sort(sort).limit(limit).skip(((page - 1) * limit)).exec();
//         const productCount = await Product.count()
//         const totalPages = Math.ceil(productCount / limit)
//         res.status(200).send({
//             data: products,
//             paging: {
//                 total: productCount,
//                 page: page,
//                 pages: totalPages,
//                 nextPage: page < totalPages ? page + 1 : null
//             }
//         })

//     } catch (error) {

//         console.log("error", error);
//         res.status(400).json({
//             message: "khong them dc "
//         })

//     }


// }
// export const getProducts = async (req, res) => {

//     const filter = { 'injectionPark_id': req.params.id }
//     try {
//         const products = await Product.find(filter).exec();
//         res.json(products)

//     } catch (error) {

//         console.log("error", error);
//         res.status(400).json({
//             message: "khong them dc "
//         })

//     }


// }

// export const searchProduct = async (req, res) => {
//     const searchString = req.query.q || "";
//     // console.log("SEARCH TEXT: ", searchString)
//     const limit = req.query.limit || 10
//     try {
//         const productSeachName= await Product.find({$text: {$search: searchString}}).limit(limit).exec();
//         // console.log("productName", productSeachName)
//         res.status(200).send(
//             {
//                 data: productSeachName
//             }
//         )
//     } catch (error) {
//         res.status(404).json({
//             message: "Not Found!"
//         })

//     }
// }

// export const getProductsCategory = async (req, res) => {
//     // console.log("ac")

//     const filter = { 'category_id': req.params.id,  }
//     try {
//         const productsCate = await Product.find(filter).exec();
//         res.json(productsCate)

//     } catch (error) {

//         console.log("error", error);
//         res.status(400).json({
//             message: "khong them dc "
//         })

//     }


// }
// export const getProductsSubcateogy = async (req, res) => {
   

//     const filter = { 'subcategory_id': req.params.id }
//     try {
//         const productsCate = await Product.find(filter).exec();
//         res.json(productsCate)

//     } catch (error) {

//         console.log("error", error);
//         res.status(400).json({
//             message: "khong them dc "
//         })

//     }


// }
// export const remove = async (req, res) => {
//     const condition = { _id: req.params.id };
//     try {
//         const products = await Product.findOneAndDelete(condition).exec();
//         res.json(products)
//     } catch (error) {
//         res.status(error).json({
//             message: "loi khong them duoc"
//         })

//     }
// }
// export const read = async (req, res) => {
//     const condition = { _id: req.params.id };
//     try {
//         const products = await Product.findOne(condition).exec();
//         res.json(products)
//     } catch (error) {
//         res.status(error).json({
//             message: "loi khong them duoc"
//         })

//     }

// }
// export const update = async (req, res) => {
//     const condition = { _id: req.params.id };
//     console.log("Update: ", condition)
//     const doc = req.body;
//     console.log("Update data: ", doc)
//     const option = { new: true };
//     try {
//         const products = await Product.findOneAndUpdate(condition, doc, option);
//         res.json(products);
//     } catch (error) {
//         res.status(400).json({
//             message: "Lỗi không tìm được sản phẩm"
//         })
//     }
// }
// export const fetchAllProduct = async (req, res) => {
   
//     try {
//         const products = await Product.find().exec();
//         res.json(products)
//     } catch (error) {
//         res.status(error).json({
//             message: "loi khong them duoc"
//         })

//     }

// }




