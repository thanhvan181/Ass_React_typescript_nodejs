import User from "../models/user"
export const create = async ( req, res) => {
    try {
        const signup = await new User(req.body).save()
        res.json(
            {
                message: "dang ky thanh cong",

                data: signup 
            }
        );
        
    } catch (error) {
        res.status(400).json({
            message: "khong them dc "
        })
        
    }
}