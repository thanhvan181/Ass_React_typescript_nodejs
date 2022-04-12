import Order from "../models/order"




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
export const getListOrderbyUserid = async(req, res) => {
    const condition = { 'user_id': req.params.id }
    try {
        const orders = await Order.find(condition).exec();
        res.json(orders)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong lay duoc list order "
        })

    }
}
export const listorder = async(req, res) => {
  
    try {
        const orders = await Order.find().exec();
        res.json(orders)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong lay duoc list order "
        })

    }
}
export const listorderdetails = async(req, res) => {
    const condition = { _id: req.params.id }
  
    try {
       
        const orders = await Order.findOne(condition).exec();
        res.json(orders)

    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong lay duoc list order "
        })

    }
}

