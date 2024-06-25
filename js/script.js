$(document).ready(function () {
  const TITLES = [
    "The new concept of Fixed structure",
    "Ultra-Rigid Bridged Die Casting",
    "Cable-free hub boards",
    "Low Power - Low Heat",
    "EZ Mount™ Only Installation Bracket",
    "Highly versatile",
  ];

  const MAIN_TEXT = [
    "It's completely structural, which means it's much better for assembly, flatness, and screen quality than traditional methods.",
    "Ultra-Rigid Bridged Die Casting",
    "Cable-free hub boards",
    "Low Power - Low Heat",
    "EZ Mount™ Only Installation Bracket",
    "Highly versatile",
  ];

  function createAccordion(index, title, content) {
    const accordion = $(`
        <div class="accordion">
          <button class="accordion-button">
            <div class="accordion-title">
              <span class="index">0${index + 1}.</span>
              <span class="title">${title}</span>
            </div>
            <div class="accordion-arrow">&#9660;</div>
          </button>
          <div class="accordion-content">
            <p>${content}</p>
          </div>
        </div>
      `);

    accordion.find(".accordion-button").on("click", function () {
      const content = $(this).next(".accordion-content");
      content.slideToggle();
      $(this).find(".accordion-arrow").toggleClass("rotate");
    });

    return accordion;
  }

  for (let i = 0; i < TITLES.length; i++) {
    const accordion = createAccordion(i, TITLES[i], MAIN_TEXT[i]);
    $(".accordions").append(accordion);
  }
});
