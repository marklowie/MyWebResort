document.addEventListener("DOMContentLoaded", function () {
    var titleElement = document.querySelector(".font-effect-fire");
    var titleText = titleElement.innerText;
    var titleWords = titleText.split(" ");
    titleElement.innerHTML = ""; // Clear the original text

    titleWords.forEach(function (word, index) {
        var span = document.createElement("span");
        span.textContent = word + " ";
        span.style.opacity = 0;

        setTimeout(function () {
            span.style.opacity = 1;
        }, 600 * index); // Adjust the delay time as needed

        titleElement.appendChild(span);
    });

    var paragraphElement = document.querySelector(".title p");
    var paragraphText = paragraphElement.innerText;
    var paragraphWords = paragraphText.split(" ");
    paragraphElement.innerHTML = ""; // Clear the original text

    paragraphWords.forEach(function (word, index) {
        var span = document.createElement("span");
        span.textContent = word + " ";
        span.style.opacity = 0;

        setTimeout(function () {
            span.style.opacity = 1;
        }, 100 * (titleWords.length + index)); // Adjust the delay time as needed

        paragraphElement.appendChild(span);
    })
}
);