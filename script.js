function updateDateTime() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
    var dateTimeString = date + ' ' + time;
    document.getElementById('datetime').textContent = dateTimeString;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time
updateDateTime();
