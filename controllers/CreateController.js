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
        const aiDescRes = await openAi.chat.completions.create({
           model: "gpt-3.5-turbo",
           
           messages: [{"role": "user", "content": `Write a concise cannabis strain description for a strain called ${strainName} which is a cross between the strain ${cross1} and the strain ${cross2}`}],
           max_tokens: 400
           
    })
    res.send({
        strainName: strainName,
        response: aiDescRes,
        ...req.body
    })

    } catch(error) {
        res.send(error)
    }
}

module.exports = {
    newDesc
}