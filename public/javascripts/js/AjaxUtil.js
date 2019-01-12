var AjaxUtils = {
    demo: function() {
        console.log("inside demo");

        var name = $("#user-name").val();
        var email = $("#user-email").val();
        var mobile = $("#user-mobile").val();
        var course = $("#user-course").val();
        var location = $("#user-location").val();
        var message = $("#user-message").val();
        alert(name+"-"+email+"-"+mobile+"-"+course+"-"+location+"-"+message);

        if (name !== null && name !== '' && email !== null && email !== '' && mobile !== null && mobile !== '' && course !== null && course !== '' && location !== null && location !== ''&& message !== null && message !== '') {
            $.ajax({
                type: "post",
                url: "http://localhost:3000/emailService",
                data: "name=" + name + "&email=" + email + "&mobile=" + mobile + "&course=" + course + "&location=" + location + "&message=" + message,
                // success: function(text) {
                //     if (text == "success") {
                //         $("#contactForm")[0].reset();
                //         submitMSG(true, "Message Submitted!")
                //     } else {
                //         $("#contactForm")[0].reset();
                //         submitMSG(true, "Message Submitted!")
                //     }
                // }
            });
        } 
        else {
            alert("Please fill all the details");
        }
    }
}