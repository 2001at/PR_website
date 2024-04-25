// スライドのインデックスを管理するオブジェクト
var slideIndexes = {
    mySlides: 1,
    mySlides1: 1,
    mySlides2: 1,
    mySlides3: 1,
    mySlides5: 1
};

function showSlides(n, className) {
    var slides = document.getElementsByClassName(className);
    var i;
    if (n > slides.length) { slideIndexes[className] = 1; }
    if (n < 1) { slideIndexes[className] = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexes[className] - 1].style.display = "block";
}

function plusSlides(n, className) {
    slideIndexes[className] += n;
    showSlides(slideIndexes[className], className);
    var slides = document.getElementsByClassName(className);
    if (slideIndexes[className] > slides.length) { slideIndexes[className] = 1; }
    if (slideIndexes[className] < 1) { slideIndexes[className] = slides.length; }
}

function currentSlide(n, className) {
    slideIndexes[className] = n;
    showSlides(n, className);
}

// 初期状態で各スライドを表示する
showSlides(slideIndexes.mySlides, "mySlides");
showSlides(slideIndexes.mySlides1, "mySlides1");
showSlides(slideIndexes.mySlides2, "mySlides2");
showSlides(slideIndexes.mySlides2, "mySlides3");
showSlides(slideIndexes.mySlides2, "mySlides5");
