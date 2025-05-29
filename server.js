import express from 'express'
import {startups} from './data/data.js'
const PORT=3000;
const app=express();

const person={
    name:"Usama Ashraf",
    age:23
}
app.get("/",(req,res)=>{
    res.json(person)
})
app.get('/api',(req,res)=>{
    let filteredData=startups
    let {industry,country,continent,is_Seeking_funding,has_mvp}=req.query;
    if(industry){
        filteredData=filteredData.filter(data=> data.industry.toLowerCase()===industry)
    }
    if(country){
        filteredData=filteredData.filter(data=> data.country.toLowerCase()===country)
    }
    if(continent){
        filteredData=filteredData.filter(data=> data.continent.toLowerCase()===continent)
    }
    if(is_Seeking_funding){
        filteredData=filteredData.filter(data=> data.is_seeking_funding===JSON.parse(is_Seeking_funding.toLowerCase()))
    }
    if(has_mvp){
        filteredData=filteredData.filter(data=> data.has_mvp===JSON.parse(has_mvp.toLowerCase()))
    }
    console.log(`${industry}   ${country}  ${has_mvp}`)
    res.json(filteredData)
})
app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})