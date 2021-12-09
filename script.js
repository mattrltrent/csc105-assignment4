function calc() {
    var name = document.getElementById("name-form").value;
    if (name != null && name != "") {
        const dateObj = new Date();
        let time = dateObj.getHours();
            if (time >= 18 || time < 7 || time == 0) {
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
        alert("Good day, but please enter something...");
    }
}

function numberCalc() {
    if (checkInp(document.getElementById("num_form").value)) {
        let num = document.getElementById("num_form").value;
        document.getElementsByClassName("num-to-increase")[0].innerHTML = num;
    }
    else {
        document.getElementById("formID").reset();  
    }
}

function checkInp(x)
{
    var regex=/^[0-9]+$/;
    if (x.match(regex))
    {
        return true;
    }
    alert("Please enter a positive integer!")
}

async function getQuote() { // I knew how to do this already, but here's the comment. Also, the API came from this site: https://breakingbadquotes.xyz/
    try {
    let response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    data = await response.json();
    let quote = data[0]["quote"];
    let author = data[0]["author"];
    document.getElementById("bb-quote").innerHTML = quote;
    document.getElementById("bb-author").innerHTML = "- " + author;
    }
    catch (e) {
        document.getElementById("bb-quote").innerHTML = "API Error Caught (likely due to bad connection): " + e;
        document.getElementById("bb-author").innerHTML = null;
    }
}