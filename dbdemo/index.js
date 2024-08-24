import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app =express()
// const port = 3000
app.get('/',(req,res)=>{
    res.send("Namaste Duniya")
 })
 app.get('/login',(req,res)=>{
    res.send("Login")
 })
 app.get('/signup',(req,res)=>{
    res.send("Signup")
 })
 app.get('/forgot',(req,res)=>{
    res.send("Forgot password")
 })
 app.get('/otp',(req,res)=>{
    res.send("OTP")
 })
 app.get('/logout',(req,res)=>{
    res.send("Logout")
 })
 app.get('/data',(req,res)=>{
    const data = [
        {
            name:"Anmol",
            age:"21"
        },
        {
            name:"Ashish",
            age:"22"
        },
        {
            name:"Lucky",
            age:"19"
        },
        {
            name:"Anurag",
            age:"22"
        }
    ]
    res.json(data)


 })
 
 
 app.listen(process.env.port,()=>{
    console.log(`Listening at port ${process.env.port}`)
 })