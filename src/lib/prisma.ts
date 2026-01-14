import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../generated/prisma/client'
import { config } from '../config/config'

const connectionString = `${config.dbUrl}`

const adapter = new PrismaPg({connectionString})
const prisma = new PrismaClient({adapter})

export {prisma}
