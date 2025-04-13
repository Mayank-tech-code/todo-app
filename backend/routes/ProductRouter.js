const ProductRouter = express.Router();

ProductRouter.get("/", (req, res) => {
  res.send("Product Sign Up");
});

export default ProductRouter;
