const User = require('../models/User')

module.exports = {
    create : async (req, res) => {
        const body = req.body
        try {
            const user = await User.create(body)
            return res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status : "error",
                message : "Internal Server Error"
            })
        }
    }
}