const express = require("express")
const cors = require("cors")
const agentEngine = require("./agentEngine")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("AIOM Agent Network Running")
})

app.post("/agent/task", async (req, res) => {
    const { task } = req.body

    const result = await agentEngine.runAgent(task)

    res.json({
        status: "success",
        result: result
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`AIOM server running on port ${PORT}`)
})
