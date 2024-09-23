import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export default async function handler(req, res) {
  console.log("api route called");
  try {
    //connecting to DB
    await connectDB();
    console.log("connected to db successfully!!!!");
  } catch (error) {
    console.log("failed to connect to db", error);
    res
      .status(500)
      .json({ status: "failed", message: "detabase connection error" });
    return;
  }

  //gereftan data az front
  if (req.method === "POST") {
    console.log("post request recieved");
    const { name, email } = req.body;
    console.log("name recieved:", name);
    console.log("email recieved:", email);

    //etebar sanji
    if (name.length <= 3 || !name || !email) {
      console.log("invalid name");
      res.status(422).json({ status: "failed", message: "invalid data" });
      return;
    }
    try {
      //save data in db
      const user = new User({
        name,
        email,
      });
      await user.save();

      //way 2 for saving data:
      // const user = await User.create({ name, email });
      res
        .status(201)
        .json({ status: "success", message: "data created", data: user });
    } catch (error) {
      console.log("error saving data in DB", error);
      res.status(501).json({
        status: "failed",
        message: "error saving data",
        error: error.message,
      });
    }
  }
}
