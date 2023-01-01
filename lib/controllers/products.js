import productApi from "./../api/products";

async function postHandler(req, res) {
  try {
    const { name, description } = req.body;
    const data = await productApi.postProduct({ name, description });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { postHandler };
