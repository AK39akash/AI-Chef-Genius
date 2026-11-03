
import { GoogleGenAI } from '@google/genai'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`



const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GENAI_ACCESS_TOKEN
})

export async function getRecipeFromGoogleGenai(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            config: {
                systemInstruction: SYSTEM_PROMPT,
                max_tokens: 1024,
            },
            contents: [
                { role: "user", parts: [ { text: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` }]  },
            ],
        })
        
        
        return response.text
    } catch (err) {
        console.error(err.message)
    }
}