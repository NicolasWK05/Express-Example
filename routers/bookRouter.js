import { Router } from "express";
import fs from 'fs'

export const router = Router();

router.get('/by-name/:name', (req, res) => {
    let name = req.params.name;
    console.log(name);

    let data = fs.readFileSync('./data.json')
    data = data.toString()
    
    data = JSON.parse(data)

    for(const i of data) {
        let title = i.Title.toLowerCase()
        name = name.toLowerCase()
        if(title.includes(' ')) {
            title = i.Title.replaceAll(' ', '_')
        }
        if(name.includes(' ')) {
            name = name.replaceAll(' ', '_')
        }

        console.log({name, title})
        if(title == name) {
            console.log({i})
            res.send(i)
        }
    }

    console.log('finished loop')
})

router.delete('/by-name/:name', (req,res) => {
    let name = req.params.name;
    console.log(name);

    let data = fs.readFileSync('./data.json')
    data = data.toString()
    
    data = JSON.parse(data)

    for(let i = 0; i < data.length; i++) {
        let title = data[i].Title.toLowerCase()
        name = name.toLowerCase()
        if(title.includes(' ')) {
            title = title.replaceAll(' ', '_')
        }
        if(name.includes(' ')) {
            name = name.replaceAll(' ', '_')
        }

        // console.log({name, title})
        if(title == name) {
            data.splice(i, 1)
            console.log({data: data[i]})
            fs.writeFileSync('./data.json', JSON.stringify(data))      
            res.send('Deleted Entry')      
        }
    }

    console.log('finished loop')
})
