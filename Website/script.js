var sessionID;

$('#sessionID').change(() => {
    sessionID = document.getElementById('sessionID').value
    alert("Saved SessionID: " + sessionID)
})

$('#previous').click(() => {
    $.get("http://ws-clicker.jnsaph.com/previous/" + sessionID, (data, status) => {
        console.log(data, status);
    })
})

$('#next').click(() => {
    $.get("http://" + ip + "/next/" + sessionID, (data, status) => {
        console.log(data, status);
    })
})