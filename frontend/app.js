async function sendTask(){

const task = document.getElementById("task").value

const res = await fetch("http://localhost:3000/agent/task",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({task})
})

const data = await res.json()

document.getElementById("result").innerText = data.result

}
