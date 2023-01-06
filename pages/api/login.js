/* import cookie from "cookie";

const handler = (req, res) => {
    if(req.method === "POST"){
        const {username, password} = req.body;
        if (
            username === process.env.ADMIN_USERNAME && 
            password === process.env.ADMIN_PASSWORD
        ) {
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", process.env.TOKEN, {
                  maxAge: 60 * 60,
                  sameSite: "strict",
                  path: "/",
                })
              );
            res.status(200).json("Succesfull");
        } else{
            res.status(400).json("-''''????")
        }
    }
};

export default handler; */

import {serialize, cookie} from "cookie";
import { sign } from "jsonwebtoken";

const secret = process.env.NEXT_PUBLIC_SECRET_KEY;
const NEXT_PUBLIC_USERNAME = process.env.NEXT_PUBLIC_USERNAME;
const NEXT_PUBLIC_PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;

const handler = async (req, res) => {

    const { username, password } = req.body;
      if (
        username === "admin"  &&
        password === "123" 
      ) {
        const token = sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
                username: username,
              },
              secret
        )

        const serialised = serialize("my_cookie", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
      
          res.setHeader("Set-Cookie", serialised);
      
          res.status(200).json({ message: "Success!" });
        } else {
          res.status(400).json({ message: "Invalid credentials!" });
        }
    }
        
export default handler;