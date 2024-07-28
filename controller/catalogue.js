const Product = require("../model/description");

exports.postItem = async (req, res) => {
  try {
    const { itemname, description, quantity } = req.body;
    const savedInfo = await Product.create({
      itemname: itemname,
      description: description,
      quantity: quantity,
    });

    res.status(201).json({
      message: "Item added successfully",
      data: savedInfo,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const data = await Product.findByPk(id);

    if (!data) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (quantity > data.quantity) {
      return res.status(400).json({ message: "Quantity is not available" });
    }

    data.quantity -= quantity;
    await data.save();

    res.status(200).json({ message: "Quantity updated successfully", data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.fetchinventory = async(req,res)=>{
    try{
            const details = await Product.findAll()
            res.status(200).json({
                message: "Inventory fetched successfully",
                data : details
            })
    }
    catch(error){
            res.statuss(500).json({message:"Internal server error"})
    }
}

