import { COMMENT } from "../models/COMMENT.js"
import { replay } from "../models/replay.js"



export const newCOMMENT = async (req, res) => {
    try {
        const new_COMMENT = new COMMENT({

            commentaire: req.body.title,
            
        });

        await new_COMMENT.save()
        res.send(new_COMMENT)
    }
    catch (err) {
        console.log(err)
    }
}

export const deleteCOMMENT = async (req, res) => {
    try {
        await COMMENT.findOneAndDelete({ id: req.params.id })
        await replay.deleteMany({COMMENTInherit:req.params.id})
        res.send('DELETE COMMENT')

    }
    catch (err) {
        console.log(err)
    }
}