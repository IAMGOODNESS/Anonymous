let arr = JSON.parse(localStorage.getItem("messages")) || [];
function sendMessage() {
    let response =document.getElementById("input").value
    if (response.trim()==="") {
        alert("input a message")
        return;
    }
else{
    arr.push(response)
    localStorage.setItem("messages", JSON.stringify(arr)); // Save messages
    document.getElementById("input").value=""
}
}

function receiveMessage() {
  let password=  window.prompt("Input Admin password")
    if (password=="admin123") {
        window.location.href = "admin.html"; 
        document.getElementById("output").innerHTML = arr.join("<br>");
    }

}
