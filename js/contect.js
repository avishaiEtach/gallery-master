function contect() {
    var email = $('.email').val()
    var subject = $('.subject').val()
    var messageBody = $('.messageBody').val()
    strMail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${messageBody}`
    window.location = strMail
    email.val() = ''
    subject.val() = ''
    messageBody.val() = ''
}

