/**
 * Config file
 */

import dotenv from 'dotenv';
dotenv.config();
export default {
    db: process.env.DB,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    allowedOrigins: ['http://localhost:3000', 'https://api.rishigupta.in', 'http://localhost:4020',
    'cluster0.exfc8.gcp.mongodb.net','https://8080-f1437a6d-500e-4e30-8bdb-9a2fd71c4de5.asia-southeast1.cloudshell.dev/',
    'http://localhost:8080'
]
};