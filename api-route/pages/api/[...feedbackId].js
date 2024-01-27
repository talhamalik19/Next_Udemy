import fs from 'fs/promises'
import path from 'path'

const handler = async(req, res) =>{
    const id = (req.query.feedbackId).toString();

    const filePath = path.join(process.cwd(), "data", "data.json")
    const data = JSON.parse(await fs.readFile(filePath))

    const filteredData = data.find(filter=>filter.id === id);

    res.status(200).json({message: "Successful", data: filteredData})
}

export default handler;