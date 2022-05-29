import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

const filePath = path.resolve('.', 'public/cv.pdf')
const fileBuffer = fs.readFileSync(filePath)

const cvHandler = nc<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    res.setHeader('Content-Type', 'application/pdf')
    res.send(fileBuffer)
  }
)
export default cvHandler
