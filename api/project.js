const express = require("express")

const db = require("../data/dbConfig")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await db("Project"))
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
    try {
        res.json(await db("Projet").insert(req.body))
    } catch(err) {
        next(err)
    }
})


module.exports = router