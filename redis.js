const redis = require('redis')
const dotenv = require("dotenv");

dotenv.config();

const redisClient = () =>{
    return redis.createClient({
        host: "localhost",
        port: 6379,
    });
}

const client = redisClient();
client.on("error", (err)=>{
    console.log(err)
})

client.on("connect", ()=>{
    console.log("Connected to redis")
});

client.on("end", ()=>{
    console.log("redis connection ended")
});

client.on("SIGQUIT", ()=>{
    client.quit();
});

module.exports = client;

