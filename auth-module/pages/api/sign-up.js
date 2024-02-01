import hashPassword from "../../lib/auth";
import connectToDB from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const { enteredEmail, enteredPassword } = req.body;
    const client = await connectToDB();

    if (
      !enteredEmail ||
      !enteredEmail.includes("@") ||
      !enteredPassword ||
      enteredPassword.trim() < 5
    ) {
      return res.status(422).json({ message: "Invalid Inputs" });
    }

    try {
      const db = client.db("auth");

      const encryptedPass = await hashPassword(enteredPassword);

      if (await db.collection("user").findOne({ email: enteredEmail })) {
        return res.status(404).json({ message: "The user already Exists" });
      }

      await db.collection("user").insertOne({
        email: enteredEmail,
        password: encryptedPass,
      });

      res
        .status(201)
        .json({ message: "Signup Successfull", data: enteredEmail });
      client.close();
    } catch (error) {
      console.log(error);
    }
  }
  else{
    const { enteredEmail, enteredPassword } = req.body;
    const client = await connectToDB();

    try {
        const db = client.db('auth');

       const user = await db.collection('user').findOne({email: enteredEmail});

       if(!user){
        res.status(444).json({message: "User Donot Exists"})
        client.close()
       }
       else{
        if(user.password === password){
            res.status(201).json({message: "Signup Successful", data: user})
        }
        else{
            res.status(404).json({message: "Password Donot Match"})
        }
       }
    } catch (error) {
        console.log(error);
        client.close()
    }
  }
}

export default handler;
