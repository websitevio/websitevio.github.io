let hScroll;
let charIndex = 0;

$(window).on('load', function() {
  // console.log('oke');
  $('.pKanan').addClass('pmuncul');
});

$(window).scroll(function() { 
  hScroll = $(this).scrollTop();
  console.log(hScroll);
  console.log('char index : ' + charIndex);

  if ( $(window).height() <= 360 ){
    var kedua = 207;
    var ketiga = 268;
    var baru = 369;
    var baru2 = 390;
    console.log('yang ini');
  } else if ( $(window).height() > 361 && $(window).height() <= 1090 ){
    var kedua = 0;
    var ketiga = 0;
    var baru = 300;
    var baru2 = 350;
    console.log('itu');
  }
  
  console.log(baru)

  if (hScroll >= baru2 && charIndex >= 227) {
    console.log('jalan transparan')
    $('.container.barukanan').addClass('muncul')
  }
  if (hScroll >= baru && charIndex >= 227) {
    console.log('jalan transparan')
    $('.container.transparan').addClass('muncul')
  }
  if (hScroll >= kedua && charIndex >= 227) {
    // console.log('jalan')
    $('.container.kedua').addClass('muncul')
  }
  if (hScroll >= ketiga && charIndex >= 227) {
    // console.log('jalan ketiga')
    $('.container.ketiga').addClass('muncul')
  }
})

const myText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Acieeee..... udah 23 tahun, Semoga di ulang tahun yang ke 23 tahun ini, menjadi wanita yang sholeha, bahagia selalu, harus inget jalan tujuanmu, kalau sudah pulang ya pulang, jangan sering berjalan tanpa arah🤣 .... karna kesasar sendirian ga seru 🤣🤣🤣🤣🤣......, mungkin jika kuketik semuanya pasti panjang, maka dari itu, ku persingkat dengan kata 'Wish You All The Best'.... Amiinn......"];
const typingDelay = 150;
const newTextDelay = 2000;
let textArrayIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    $('.cursor').addClass('blink')
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing")
    myText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    if (textArray[textArrayIndex].charAt(charIndex) === "." || textArray[textArrayIndex].charAt(charIndex) === ",") {
      setTimeout(type, 500);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    cursor.classList.remove("typing")
    $('.container.kanan').addClass('muncul')
  }
}

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var txtArea = document.getElementById("salamHangat") ;

icon.onclick = function() {
  $('.container.hide').addClass('muncul')
  if (mySong.paused) {
    mySong.play()
    icon.src = "img/giftopen.png"
  }
  setTimeout(type, 3000)
  type()
}