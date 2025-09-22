import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (req, res) => {
    try {
        const prompt = req.body.prompt;
        if (!prompt) {
            return res.status(400).send("Prompt is required");
        }
        // console.log("Received prompt:", prompt);

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).send("GEMINI_API_KEY is not configured");
        }

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        async function main() {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: `
You are a Senior Software Engineer with 30+ years of experience. 
Act as a professional code reviewer. 
Keep your response concise, structured, and focused on improvements. 

Follow this exact format:
1. Efficiency Rating: Give a % score (0–100).
2. Errors: List errors/bugs clearly.
3. Improvements: Suggest short fixes in bullets.
4. Corrected Code: Provide improved version.
5. Preview Examples: Show 2–3 examples with expected outputs.

Avoid long paragraphs or heavy theory. 
make it little longer first show the user code and then show the review.
Now review this code:\n\n${prompt}
                `,
                            },
                        ],
                    },
                ],
            });

            // safer extraction
            res.status(200).json({
                status: true,
                response:
                    response.text ||
                    response.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
                    "No response generated"
            });

        }

        await main();
    } catch (error) {
        console.error("AI Controller Error:", error);
        res.status(500).send("An error occurred while processing the AI request");
    }
};
