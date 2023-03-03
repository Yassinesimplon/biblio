import { livre } from "../models/livre.js"


export const getlivre = async (req, res) => {
    try {
        await livre.find({})
            .then(result => {
                res.send(result)
            })

    }

    catch (err) {

        console.log(err)

    }
}

export const Onelivre = async (req, res) => {
    try {
        const livre = await livre.findOne({ id: req.params.id })
        res.send(offre)
    }
    catch (err) {
        console.log(err)
    }
}

export const newlivre = async (req, res) => {
    try {
        const new_livre = new livre({

            title: req.body.title,
            categories: req.body.categories,
            description: req.body.description,
        });

        await new_livre.save()
        res.send(new_livre)
    }
    catch (err) {
        console.log(err)
    }
}