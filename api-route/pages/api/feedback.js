import fs from 'fs/promises'
import path from 'path';

export async function getFilePath(){

}

const handler =async(req, res)=>{
    const email = req.body.email;
    const feedback = req.body.feedback;
    if(req.method === 'POST'){
        try{

            const filePath = path.join(process.cwd(), "data", "data.json");
            const data = JSON.parse(await fs.readFile(filePath));
     
            const feedbackData = {
             id: new Date().toISOString(),
             email: email,
             feedback: feedback
            }
     
            data.push(feedbackData)
            const writeData =await fs.writeFile(filePath, JSON.stringify(data))
     
            res.status(201).json({message: "Successfull", data: feedbackData})
        }catch(err){
            res.json({message: "Error"})
        }
    }
    else{
        const pathFile = path.join(process.cwd(), "data", "data.json")
        const data = JSON.parse(await fs.readFile(pathFile))

        res.status(201).json({message: "Fetched", data: data})
    }


}

export default handler;