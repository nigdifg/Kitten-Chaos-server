import { Client, Repository } from 'redis-om';
require('dotenv').config()




const redisClient = new Client();


(async () => {
    await redisClient.open(`redis://default:${process.env.PASS}@${process.env.URL}`)
    // await redisClient.open(`redis://default:gkRneejbeghkp4jIG4zCUyY5grqvJN3L@redis-17324.c10.us-east-1-2.ec2.cloud.redislabs.com:17324`)
    try {
        await redisClient.isOpen()
        console.log('connected to redis')
    }
    catch (err) {
        console.log('error connecting to redis', err)
    }
})();



// redis://${process.env.username}:${process.env.passsword}@${connecctionstrong}

export { redisClient }
