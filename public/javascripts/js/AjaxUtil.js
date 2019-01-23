var AjaxUtils = {
    demo: function() {
        console.log("inside demo");

        var name = $("#user-name").val();
        var email = $("#user-email").val();
        var mobile = $("#user-mobile").val();
        var course = $("#user-course").val();
        var location = $("#user-location").val();
        var message = $("#user-message").val();
        //salert(name+"-"+email+"-"+mobile+"-"+course+"-"+location+"-"+message);

        if (name !== null && name !== '' && email !== null && email !== '' && mobile !== null && mobile !== '' && course !== null && course !== '' && location !== null && location !== ''&& message !== null && message !== '') 
        {
            user_details= "name=" + name + "&email=" + email + "&mobile=" + mobile + "&course=" + course + "&location=" + location + "&message=" + message,
            $.post('/emailService',user_details, function(text) {
                success: function(text) {
                    if (text == "success") {
                        $("#contactForm")[0].reset();
                        submitMSG(true, "Message Submitted!")
                    } else {
                        $("#contactForm")[0].reset();
                        submitMSG(true, "Message Submitted!")
                    }
                }
            });
        } 
        else {
            alert("Please fill all the details");
        }
    }
}