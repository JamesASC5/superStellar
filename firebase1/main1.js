function updateUI(data){
    const allMessagesDiv = document.getElementById('allMessages');
    const messageDiv = document.createElement('p');
    messageDiv.innerText = data.FIRSTNAME + " : " + data.LASTNAME + " : " + data.DATE + " : " + data.MESSAGE;
    allMessagesDiv.appendChild(messageDiv);
 }
 // Set database "child_added" event listener here
 database.on("child_added", function(dataRef){
    const data = dataRef.val();
    updateUI(data);
 });
 