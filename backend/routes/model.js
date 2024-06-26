import express from "express";
import { UserModel } from "../models/Users.js"

const router = express.Router();

router.get("/", async (req, res) => {
    const {userId} = req.query;
     try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found " + userId });
        }
        const model = user.bodyModel;
        return res.status(200).json(model);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err + " " + userId });
    }
});

/*
req: {
    userId: userId
    model: {
        gender: MALE | FEMALE
        fullBody: full_body_svg_string
    }
}
*/
router.put("/create", async (req, res) => {
    const { userId, model } = req.body;
    try {
        const user = await UserModel.findById(userId)
        if (!user) {
             return res.status(404).json({ message: "User not found" })
        }
        user.bodyModel = model;

        await user.save();

        return res.status(200).json({ message: "User model has now been created", });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error: " + err })
    }
});

/*
req: {
    userid: user_id
    model: {
        gender: MALE | FEMALE
        fullBody: full_body_svg_string
    }
}
*/
router.put("/update", async (req, res) => {
    const { userId, newModel } = req.body;
     try {
        const user = await UserModel.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        user.bodyModel = newModel;
        await user.save();
        return res.status(200).json({ message: "User model has now been updated" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" })
    }
});

export { router as modelRouter };