import dotenv from 'dotenv'

dotenv.config()

export default {
    TIKTOK_USERNAME: process.env.TIKTOK_USERNAME || '',
}