import dbConnect from "../../../util/mongo.js"
import Product from "../../../models/Product.js"

export default async function handler(req, res) {
    const {method, query:{id}, cookies} = req;
    
    const token = cookies.token;

    dbConnect()

    if(method === "GET"){
        try{
            const product = await Product.findById(id);
            res.status(200).json(product);
        }catch(err){
            res.status(500).json(err)
        }
    }

    if (method === "PUT") {
        if(!token || token !== cookies.my_cookie){
            return res.status(401).json("Not authenticated!")
        }
        try {
            const product = await Product.findByIdAndUpdate(id, req.body, {
                new: true,
            });
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if (method === "DELETE"){
        if(!token || token !== cookies.my_cookie){
            return res.status(401).json("Not authenticated!")
        }
        try{
            await Product.findByIdAndDelete(id);
            res.status(200).json("The product has been deleted!");
        }catch(err){
            res.status(500).json(err)
        }
    }

    
}





