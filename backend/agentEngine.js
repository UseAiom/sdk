async function runAgent(task) {

    console.log("AIOM Agent executing task:", task)

    // simulasi AI agent
    const response = `Agent completed task: ${task}`

    return response
}

module.exports = { runAgent }
