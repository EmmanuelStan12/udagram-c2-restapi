require('dotenv').config();

export const config = {
    "dev": {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        "aws_region": process.env.AWS_REGION,
        "aws_profile": process.env.AWS_PROFILE,
        "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
        "port": process.env.AWS_PORT
    },
    jwt: {
        secret: process.env.AWS_TOKEN
    }
}