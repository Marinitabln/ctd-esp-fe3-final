import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { NextApiRequest, NextApiResponse } from "next";

interface Data{
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    const {id} = req.query
    const idInt = parseInt(id as string)
    res.setHeader('Content-type', 'application/json')

    try{
       const result = await getComic(idInt)
       res.status(200).json(result) 
    }catch(error){
        console.log(error);
        //res.status(500).json({error: error.message})
    }

}