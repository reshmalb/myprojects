
const adminCredential = require('../../models/admin/credentials.model');

const loginHandler = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await adminCredential.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "Wrong Credentials" });
        }
        if (password !== user.password) {
            return res
                .status(400)
                .json({ success: false, message: "Wrong Credentials" });
        }
        const data = {
            success: true,
            message: "Login Successfull!",
            loginid: user.email,
            id: user.id,
        };
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}



const registerHandler = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await adminCredential.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "Admin With This LoginId Already Exists",
            });
        }
        user = await adminCredential.create({
            email,
            password,
        });
        const data = {
            success: true,
            message: "Register Successfull!",
            loginid: user.email,
            id: user.id,
        };
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

module.exports={
    loginHandler,
    registerHandler
}