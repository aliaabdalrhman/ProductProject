import connectDb from '../DB/connection.js'
import productRouter from './modules/products/product.router.js'

const initApp = (app, express) => {
    connectDb();
    app.use(express.json());
    app.use('/products', productRouter)
    app.get('*', (req, res) => {
        return res.status(404).json({ message: "page not found" })
    })
}
export default initApp;