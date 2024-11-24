document.getElementById("home").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
document.getElementById("about").addEventListener("click", function() {
    const about = document.getElementsByClassName("section2");
    const position1 = about[0].offsetTop;
    window.scrollTo({
        top: position1,
        behavior: "smooth"
    })
});
document.getElementById("services").addEventListener("click", function() {
    const services = document.getElementsByClassName("section3");
    const position2 = services[0].offsetTop;
    window.scrollTo({
        top: position2,
        behavior: "smooth"
    })
});
document.getElementById("skills").addEventListener("click", function() {
    const skills = document.getElementsByClassName("section4");
    const position3 = skills[0].offsetTop;
    window.scrollTo({
        top: position3,
        behavior: "smooth"
    })
});
document.getElementById("contact").addEventListener("click", function() {
    const contact = document.getElementsByClassName("section5");
    const position4 = contact[0].offsetTop;
    window.scrollTo({
        top: position4,
        behavior: "smooth"
    })
});
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault()
    var name_val=document.getElementById("uname").value
    var email_val=document.getElementById("email").value
    var subject_val=document.getElementById("subject").value
    var message_val=document.getElementById("message").value
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(name_val=="" || email_val=="" || subject_val=="" || message_val==""){
        alert("Please fill all the fields")
    }
    else if(!regex.test(email_val)){
        alert("Please enter a valid email address")
    }
    else{
        var data = {
            uname: name_val,
            email: email_val,
            subject: subject_val,
            message: message_val
        }
        fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == "success"){
                alert(data.message)
                document.getElementById("uname").value=""
                document.getElementById("email").value=""
                document.getElementById("subject").value=""
                document.getElementById("message").value=""
            }
            else{
                alert(data.message)
            }
        })
    }

});