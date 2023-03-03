import { emprunt } from "../models/emprunt.js"

export const newemprunt = async (req, res) => {
    try {
        const _result=[];
        const nbr = await emprunt.find({ user: req.body.user })
        for (let index = 0; index < nbr.length; index++) {
            if  (new Date().getTime() - nbr[index].createdAt <= 30*24*60*60*1000){
                _result.push(nbr[index]);
            }
            
        } 

        
        if (_result.length < 3) {

            const new_emprunt = new emprunt({
                user: req.body.user,
                livre: req.body.livre,
                auteur: req.body.auteur,
            });

            await new_emprunt.save()
            res.send(new_emprunt)
        }
        else {

            res.json({ "message": "kemlo drahmk" })
        }
    }
    catch (err) {
        console.log(err)
    }
        }
    





export const getemprunt = async (req, res) => {
    try {
        await emprunt.find({})
            .then(result => {
                res.send(result)
            })

    }

    catch (err) {

        console.log(err)

    }
}


export const deleteemprunt = async (req, res) => {
    try {
        await emprunt.findOneAndDelete({ id: req.params.id })
        res.send('DELETE emprunt')
    }
    catch (err) {
        console.log(err)
    }
}


