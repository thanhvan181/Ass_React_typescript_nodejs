import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRouter from "../routes/auth"
import categoryRouter from "../routes/category"
import productRouter from "../routes/products"
import companyRouter from "../routes/company"
import subcategoryRouter from "../routes/sub_category"
import injectionParkRouter from "../routes/injectionpark"
import registerRouter from "../routes/register"
import cityRouter from "../routes/city";


const app = express();
const option = {

}

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// const specs = swaggerJSDoc(option)
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc));

// route
// app.use("/api",productRoute);
// app.use("/api",categoryRoute);

// connnect database
mongoose.connect('mongodb+srv://demodatabase:tiKHgyRnf6njJIbT@cluster0.myvkr.mongodb.net/VNVC?retryWrites=true&w=majority')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

// connection
const PORT = 8080;

app.use("/api", userRouter);

app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", companyRouter);
app.use("/api", subcategoryRouter);
app.use("/api", injectionParkRouter);
app.use("/api", registerRouter);
app.use("/api", cityRouter);
app.listen(PORT, () => {
    console.log("Server is running port", PORT)
})