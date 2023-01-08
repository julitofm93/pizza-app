import dbConnect from "../../../util/mongo.js"
import Product from "../../../models/Product.js"

export default async function handler(req, res) {
    const {method, cookies} = req;

    const token = cookies.my_cookie
    
    dbConnect()

    if(method === "GET"){
        try{
            const products = await Product.find();
            res.status(200).json(products);
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "POST"){
        if(!token || token !== cookies.my_cookie){
            return res.status(401).json("Not authenticated!")
        }
        try{
            const product = await Product.create(req.body);
            res.status(201).json(product);

        }catch(err){
            res.status(500).json('error jodido')
        }
    }
  }
  

