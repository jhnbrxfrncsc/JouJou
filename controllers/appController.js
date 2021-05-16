import blogSchema from '../models/blogModel.js';

export const app_index = async (req, res) => {
    try {
        const data = await blogSchema.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const app_create = async (req, res) => {
    const clientData = new blogSchema(req.body);
    try {
        const newData = await clientData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// export const app_search = async (req, res) => {
//     try {
//         const result = await blogSchema.findById(req.params.id);
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// export const app_delete = async (req, res) => {
//     try {
//         await blogSchema.findByIdAndRemove(req.params.id);
//         res.status(204).json({ message: "Deleted successfully" });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }