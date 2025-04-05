window.addEventListener('load', function () {
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach((element) => {
        element.style.animation = 'fadeIn 5s forwards';
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.innerText = 'Please fill in all fields.';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.innerText = 'Your message has been sent successfully!';
    
    
    document.getElementById('contactForm').reset();
});

(function(){
    emailjs.init("SKw8zLe0WRgygBry6"); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.innerText = 'Please fill in all fields.';
        return;
    }

    emailjs.send("service_9l5ug2u", "template_mwyvcal", {
        from_name: name,
        from_email: email,
        message: message
    }).then(
        function(response) {
            formMessage.style.color = 'green';
            formMessage.innerText = 'Message sent successfully!';
            document.getElementById('contactForm').reset();
        },
        function(error) {
            formMessage.style.color = 'red';
            formMessage.innerText = 'Error sending message. Try again!';
        }
    );
});
