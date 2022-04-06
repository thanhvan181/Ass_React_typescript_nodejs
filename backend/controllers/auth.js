import User from "../models/user";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    const { email, name, password} = req.body
    try {
        const existUser = await User.findOne({email}).exec();
        console.log("existUser1", existUser)
        if(existUser && existUser !== null){
            console.log("existUser2", existUser)
            res.status(400).json({
                message: "Email đã tồn tại"
            })
        }
        else{
          console.log("da vao")
          const user = await new User({email, name, password}).save();
          res.status(201).json({
              user: {
                  _id: user._id,
                  email: user.email,
                  name: user.name
              }
          })

        }
      
       
    } catch (error) {
        
    }
}
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      
      return res.status(400).json({
        message: "email không tồn tại",
      });
    }
    if (!user.authenticate(password)) {
     return res.status(400).json({
        message: "Sai mật khẩu",
      });
    }

    const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 });
    console.log("token", token)

    res.json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {}
};

export const currentUser = (req, res) => {
  const { email } = req.user;
  User.findOne({ email }).exec((err, user) => {
      if (err) throw new Error(err)
      res.json(user)
  });
}