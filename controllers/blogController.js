import blogSchema from '../models/blogModel.js';

export const blog_index = async (req, res) => {
    try {
        const data = await blogSchema.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const blog_create = async (req, res) => {
    const clientData = new blogSchema(req.body);
    try {
        const newData = await clientData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
