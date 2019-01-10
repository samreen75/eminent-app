function sendEmail() {
    
    
    alert('send email here');


}

function demo(){
    alert("value-->>");

    var name = document.getElementById("msg").value;
    alert("value-->>"+name);
    var data="";
    
    name=document.getElementsByClassName("msg").value;
    var location=document.getElementsByName("location").value;
     ///alert("value-->>"+data);
}
    $.ajax({
        type: "post",
        
        url: "http://localhost:3000/emailService",
        data: "name=" + name ,
        success : function(data){
            alert("in ajax-->>"+name);

            if (text == "success"){
                $("#contact-submit")[0].reset();
                submitMSG(true, "Message Submitted!");
                alert("value-->>"+text);
            }
            
        }
    });
  alert("value after ajax-->>"+text);
