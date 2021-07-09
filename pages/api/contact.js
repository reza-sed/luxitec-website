const connectToDatabase = require("../../utility/data/db");
let Contact = require("../../utility/data/contact-model");

async function handler(req, res) {
  try {
    await connectToDatabase();

    const { name, subject, message, email } = req.body;
    const contactModel = new Contact({ name, subject, message, email });
    const result = await contactModel.save();
    res
      .status(201)
      .json({ message: "Thanks! We will repond as soon as POSSIBLE !" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default handler;
