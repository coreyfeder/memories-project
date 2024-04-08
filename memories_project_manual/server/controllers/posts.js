
import PostMessage from ""../models/postMessage.js"

export const getPosts = (req, res) => {
    try {
        const postMesages = await PostMessage.find()
        res.status(200).json(PostMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    try {
        await new
    } catch (error) {
        // TBD
    }
}
