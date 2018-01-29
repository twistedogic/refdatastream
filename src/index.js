import data from "./data"
import path from "path"

const BASE = "wss://ws.coinapi.io/v1"

const apiKey = process.env.COINAPI_KEY 

const request = {
  type:"hello",
  apiKey,
  heartbeat: true,
  subscribe_data_type: ["trade"]
}

const requestString = JSON.stringify(request)

if(apiKey) {
  data(requestString)(path.join(__dirname,"..","data"))(BASE)
} else {
  console.log("COINAPI_KEY not set")
}
