function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value
    };
const serviceId="service_e2uh5i4";
const templateId="template_s4pdp7i";

emailjs
.send(serviceId,templateId,params)
.then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("number").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your Message sent Succesfully!! we will reach out to you soon...");
})
.catch((err)=>console.log(err));
}
