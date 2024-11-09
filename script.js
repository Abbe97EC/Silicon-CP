document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName('slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex-1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    // FAQ accordion functionality
    let faqItems = document.getElementsByClassName('faq-item');
    for (let i = 0; i < faqItems.length; i++) {
        faqItems[i].addEventListener('click', function() {
            this.classList.toggle('active');
            let answer = this.querySelector('p');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    }
});
