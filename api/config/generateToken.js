import jwt from "jsonwebtoken";

const generateToken = (Id) => {
    return jwt.sign({Id}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
};

export default generateToken;