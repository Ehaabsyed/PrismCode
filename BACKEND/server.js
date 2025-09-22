import express from 'express'
import aiRoute from './src/routes/ai.route.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! This is the backend server of Code Reviewer.')
})
app.use('/ai', aiRoute)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});  
  