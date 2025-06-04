// ============= The function of the drop-down window ============= //
document.addEventListener('DOMContentLoaded', function() {
    const dropItem = document.getElementById('drop-1');
    const dropMenu = dropItem.querySelector('.drop-menu');
    let timeoutId;
    let timerStarted = false;

    function showDropdown() {
        dropMenu.classList.add('show');
    }

    function hideDropdown() {
        timeoutId = setTimeout(() => {
            dropMenu.classList.remove('show');
            timerStarted = false;
        }, 1000);
        timerStarted = true; 
    }

    function resetTimer() {
        clearTimeout(timeoutId);
        if (timerStarted) {
            timerStarted = false; 
        }
    }

    dropItem.addEventListener('mouseenter', showDropdown);
    dropItem.addEventListener('mouseleave', hideDropdown);
    dropMenu.addEventListener('mouseenter', resetTimer);
    dropMenu.addEventListener('mouseleave', hideDropdown);
});
// ============= The function of the drop-down window ============= //


// ======================= Swiper Settings ======================== //
var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay: { 
        delay: 5000, 
        stopOnLastSlide: false, 
        disableOnInteraction: false
    },
    spaceBetween: 0,
    navigation: {
        nextEl: ".banner-right-arrow",
        prevEl: ".banner-left-arrow",
    },
    mousewheel: false,
    keyboard: true,
});
// ======================= Swiper Settings ======================== //


// =================== The function of tabmarks =================== //
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      this.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })
})
// =================== The function of tabmarks =================== //


// ================== The function of the arrows ================== //
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.control-card');
    let activeCardIndex = 0;

    function updateUI() {
        cards.forEach((card, index) => {
            if (index === activeCardIndex) {
                card.classList.add('active');
                card.classList.remove('inactive');
            } else {
                card.classList.add('inactive');
                card.classList.remove('active');
            }

            const leftArrow = card.querySelector('.leftArrow');
            const rightArrow = card.querySelector('.rightArrow');
            
            leftArrow.classList.toggle('disabled', activeCardIndex === 0);
            rightArrow.classList.toggle('disabled', activeCardIndex === cards.length - 1);
        });
    }

    document.querySelector('.main-products-wrapper').addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('leftArrow')) {
            if (activeCardIndex > 0) {
                activeCardIndex--;
                updateUI();
            }
        }

        if (target.classList.contains('rightArrow')) {
            if (activeCardIndex < cards.length - 1) {
                activeCardIndex++;
                updateUI();
            }
        }
    });
    updateUI();
});
// ================== The function of the arrows ================== //


// =============================== FAQ ============================ //
document.addEventListener('DOMContentLoaded', function() {
  const answerTitles = document.querySelectorAll('.question-header');
    
  answerTitles.forEach(title => {
    title.addEventListener('click', () => {
      const answer = title.parentElement;
      answer.classList.toggle('active');
        
       // Закрытие других открытых вопросов (опционально)
      document.querySelectorAll('.question').forEach(item => {
        if (item !== answer && item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
    });
  });
});
// =============================== FAQ ============================ //


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("feedback-modal-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("modal-name").value;
        const phone = document.getElementById("modal-phone").value;
        const comment = document.getElementById("modal-comment").value;

        console.log("Form submitted:", { name, phone, comment });

        alert("Спасибо! Ваша заявка отправлена.");

        window.location.href = "#";
        
        this.reset();
    });
    document.querySelector('.modal').addEventListener('click', function(e) {
        if (e.target === this) {
            window.location.href = "#";
        }
    });
});