document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach(link => {
      link.addEventListener("click", event => {
          event.preventDefault();

          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          sections.forEach(section => section.classList.remove("active"));


          targetSection.classList.add("active");


          if (targetId === 'feedback') {

              document.getElementById('feedback').style.display = 'block';
          } else {
    
              document.getElementById('feedback').style.display = 'none';
          }
      });
  });
});


const targetDate = new Date("June 8, 2026 00:00:00").getTime();


const timer = setInterval(function() {
    
    const now = new Date().getTime();

    
    const distance = targetDate - now;

    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("days").innerHTML = `${days} Days`;
    document.getElementById("hours").innerHTML = `${hours} Hours`;
    document.getElementById("minutes").innerHTML = `${minutes} Minutes`;
    document.getElementById("seconds").innerHTML = `${seconds} Seconds`;

    
    if (distance < 0) {
        clearInterval(timer);
                document.querySelector(".countdown h1").innerHTML = "Happy World Ocean Day!";
                document.querySelector(".countdown p").style.display = "none";
                document.querySelector(".time").style.display = "none";
        
    }
}, 1000);



document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const thankYouMessage = document.getElementById('thank-you-message');


  form.addEventListener('submit', function (event) {
      event.preventDefault();


      form.reset();

      
      thankYouMessage.style.display = 'block';

      
      setTimeout(function () {
          thankYouMessage.style.display = 'none';
      }, 5000);
  });
});

document.getElementById('calculator-form').addEventListener('submit', function(event) {
  event.preventDefault();

  
  const plasticBottles = document.getElementById('plastic-bottles').value;
  const sustainableSeafood = document.getElementById('sustainable-seafood').value;
  const beachCleanups = document.getElementById('beach-cleanups').value;

  
  let impact = '';
  let suggestions = [];

  
  if (plasticBottles === '10+') {
      impact += 'You are using a lot of plastic bottles each week, contributing significantly to ocean pollution. ';
      suggestions.push('Try switching to reusable water bottles to reduce plastic waste.');
  } else if (plasticBottles === '6-10') {
      impact += 'You use a moderate amount of plastic bottles. ';
      suggestions.push('Consider using a reusable bottle to reduce plastic consumption.');
  } else if (plasticBottles === '1-5') {
      impact += 'You are using a small amount of plastic bottles. ';
      suggestions.push('Good job! Keep using your plastic bottles sparingly, or switch to a reusable option.');
  } else {
      impact += 'You are not using any plastic bottles, which is excellent! ';
  }

  if (sustainableSeafood === 'No') {
      impact += 'Buying non-sustainable seafood contributes to overfishing and harms marine ecosystems. ';
      suggestions.push('Try to choose seafood certified as sustainable to support ocean health.');
  } else if (sustainableSeafood === 'Sometimes') {
      impact += 'You occasionally buy sustainable seafood, but there is room for improvement. ';
      suggestions.push('Make sustainable seafood choices a habit to help protect marine life.');
  } else {
      impact += 'You buy sustainable seafood, which is great for ocean health! ';
  }

  if (beachCleanups === 'No') {
      suggestions.push('Consider joining local beach clean-ups to directly help reduce ocean pollution.');
  } else {
      impact += 'You are actively contributing to ocean conservation by participating in beach clean-ups. ';
      suggestions.push('Thank you for your contribution in conservating the Ocean')
  }

  
  document.getElementById('impact-result').innerText = impact;
  const suggestionsList = document.getElementById('suggestions');
  suggestionsList.innerHTML = '';
  suggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.innerText = suggestion;
      suggestionsList.appendChild(li);
  });

  
  document.getElementById('result').style.display = 'block';
});

document.querySelector('.feedback-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    document.querySelector('#thank-you-message').style.display = 'block'; 
});

