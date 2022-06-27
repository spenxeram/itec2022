console.log("mvc loaded");
console.log(root);
let rating = document.querySelector(".rating");
rating.addEventListener("click", function(e) {
    let targ = e.target;
    console.log(targ);
    rate();
});

function rate() {
    let xhr = new XMLHttpRequest;
    xhr.open("get", root + "api/api.php?root=" + root, true);
    xhr.onload = function() {
        console.log(this.responseText);
    }

    xhr.send();
}