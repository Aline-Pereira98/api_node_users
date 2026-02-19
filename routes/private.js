import express from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'

const router = express.Router()
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET

router.get('/listar-usuario', async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        res.status(200).json({message: "Usuarios listados com sucesso", users})
        
    } catch (error) {
        res.status(500).json({message: "Erro no servidor"})
    }
})

export default router