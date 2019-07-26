function searcher(){
var sentence = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."

var detail1 = sentence.match("are");
var detailex = sentence.match("world");
var detail2 = sentence.match("words");

console.log(detail1);
console.log(detailex);
console.log(detail2);
}

searcher();
