// script.js
document.addEventListener('DOMContentLoaded', function() {
    const friendName = "Meri Pyari Meenu ❤️"; // Replace with your friend's name
    const friendImageSrc = "meenu.jpeg"; // Replace with the path to your friend's photo
    const personalMessage = "Ummmmaah 💋💋💋"; // Replace with your personal message

    document.getElementById('revealButton').addEventListener('click', function() {
        const birthdayContent = document.getElementById('birthdayContent');
        birthdayContent.style.display = 'block';
        gsap.from("#birthdayTitle", {duration: 2, y: -50, opacity: 0, ease: "bounce"});
        gsap.from("#friendName", {duration: 2, x: -50, opacity: 0, delay: 1});
        gsap.from("#friendImage", {duration: 2, scale: 0, opacity: 0, delay: 2});
        gsap.from("#personalMessage", {duration: 2, x: 50, opacity: 0, delay: 3});
    });

    document.getElementById('friendName').textContent = friendName;
    document.getElementById('friendImage').src = friendImageSrc;
    document.getElementById('personalMessage').textContent = personalMessage;
});

