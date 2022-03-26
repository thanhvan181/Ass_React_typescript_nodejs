import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRouter from "../routes/user"
import categoryRouter from "../routes/category"
import productRouter from "../routes/products"
import companyRouter from "../routes/company"
// import productRoute from '../routes/product';
// import categoryRoute from '../routes/category';
// import swaggerUI from 'swagger-ui-express';
// import swaggerJSDoc from 'swagger-jsdoc';


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
mongoose.connect('mongodb://localhost:27017/VNVC')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8080;

app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", companyRouter);
app.listen(PORT, () => {
    console.log("Server is running port", PORT)
})