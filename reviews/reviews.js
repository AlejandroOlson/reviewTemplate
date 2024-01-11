
function loadReviews() {

    const reviewBox = document.getElementById("review-div");

    fetch('reviews.html', {
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