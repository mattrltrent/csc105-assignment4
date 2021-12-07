function calc() {
    var name = document.getElementById("name-form").value;
    if (name != null && name != "") {
        const dateObj = new Date();
        let time = dateObj.getHours();
        if (time >= 18 && time < 7) {
            alert("Good Evening, " + name + ".");
        }
        else if (time >= 7 && time < 11) {
            alert("Good Morning, " + name + ".");
        }
        else if (time >= 11 && time < 18) {
            alert("Good Afternoon, " + name + ".");
        }
    }
    else {
        alert("Please enter something...");
    }
}

function numberCalc() {
    var num = parseInt(document.getElementsByClassName("num-to-increase")[0].innerHTML) + 1;
    document.getElementsByClassName("num-to-increase")[0].innerHTML = num;
}