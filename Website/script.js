var ip = "51.89.52.49:1212"
var sessionID;

$('#sessionID').change(() => {
    sessionID = document.getElementById('sessionID').value
    alert("Saved SessionID: " + sessionID)
})

$('#previous').click(() => {
    $.get("http://" + ip + "/previous/" + sessionID, (data, status) => {
        console.log(data, status);
    })
})

$('#next').click(() => {
    $.get("http://" + ip + "/next/" + sessionID, (data, status) => {
        console.log(data, status);
    })
})