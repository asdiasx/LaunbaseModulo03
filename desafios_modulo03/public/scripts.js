const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const courseId = card.getAttribute("id");
    const name = card.getAttribute("name");
    window.location.href = `/course/${courseId}/${name}`;
  });
}
