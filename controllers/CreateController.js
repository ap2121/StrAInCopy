require('dotenv').config()
// const {Post} = require('../models')
const { OpenAI } = require('openai')
const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY
const OPEN_AI_ORG_KEY = process.env.OPEN_AI_ORG_KEY
const openAi = new OpenAI({
    apiKey: OPEN_AI_API_KEY,
    organization: OPEN_AI_ORG_KEY
    
})


const newDesc = async (req, res) => {
    try {
        const {strainName, cross1, cross2} = req.body
        const aiDescRes = await openAi.completions.create({
            messages: [{role: "system", content: `write a short sentance using these three words, ${strainName}, ${cross1}, ${cross2}`}],
            model:"gpt-3.5-turbo"
    })
    res.send({
        response: aiDescRes
    })

    } catch(error) {
        res.send(error)
    }
}

module.exports = {
    newDesc
}