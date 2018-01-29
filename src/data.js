import WebSocket from "ws" 
import fs from "fs"
import {DateTime} from "luxon"

const start = (request) => (dir) => (url) => {
  const client = new WebSocket(url)
  client.onopen = () => client.send(request)
  client.onmessage = (msg) => {
    const data = JSON.parse(msg.data)
    if(data.type === "trade"){
      const date = DateTime.fromISO(data.time_coinapi).toISODate()
      const path = `${dir}/${date}.json`
      fs.appendFile(path,`${msg.data}\n`,(err) => {
        if(err){
          console.log(err)
        }
      })
    }
  }
  client.onclose = () => setTimeout(() => start(request)(dir)(url), 1000)
}

export default start
