document.getElementById("contactForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    const form = event.target;

    const data = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };

    try {

        const response = await fetch("http://localhost:8080/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Message sent successfully! ✅");
            form.reset();
        } else {
            alert("Something went wrong ❌");
        }

    } catch (error) {

        alert("Backend is not running ❌");

        console.log(error);
    }
});