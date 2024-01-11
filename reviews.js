
function loadReviews() {

    const reviewBox = document.getElementById("review-div");

    fetch('https://cdn.jsdelivr.net/gh/AlejandroOlson/reviewTemplate/reviews.html', {
        headers: {
            Accept: "text/html",
        },
    })
    .then(response => response.text())
    .then(html => {
        reviewBox.innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    });
}

loadReviews();
