function sendMail(){
    var params = {
     name: document.getElementById("name").value,
     email: document.getElementById("email").value, 
     message: document.getElementById("message").value,
    };


const serviceID = "service_9j2o66m";
const templateID = "template_szt547r";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
       document.getElementById("name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("message").value = "";
       console.log(res);
       alert("A sua mensagem foi enviada!")
    })
    .catch((err)=> console.log (err));
}