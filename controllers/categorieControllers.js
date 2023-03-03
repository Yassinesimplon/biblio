import { Categorie } from "../models/categorie.js"


export const newcategorie = async (req, res) => {
    try {
        const new_categorie = new Categorie({

            user: req.body.user,
            nom: req.body.nom,
            description: req.body.description,
            
        });

        await new_categorie.save()
        res.send(new_categorie)
    }
    catch (err) {
        console.log(err)
    }
}