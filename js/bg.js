let options = [
    '<i class="fa fa-thermometer-empty char " aria-hidden="true" data-score=1 ></i>',
    '<i class="fa fa-shower char " aria-hidden="true" data-score=1 ></i>',
    '<i class="fa fa-ravelry char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-snowflake-o char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-birthday-cake char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-bus char bus" aria-hidden="true" data-score=2 ></i>',
    '<i class="fa fa-credit-card char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-gamepad char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-futbol-o char ball" aria-hidden="true" data-score=2></i>',
    '<i class="fa fa-file-image-o char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-unlock char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-money char dollar" aria-hidden="true" data-score=2></i>',
    '<i class="fa fa-dollar char dollar" aria-hidden="true" data-score=5></i>',
    '<i class="fa fa-usb char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-hand-o-right char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-bicycle char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-sign-language char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-shower char " aria-hidden="true" data-score=1></i>',
    '<i class="fa  fa-upload char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-trademark char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-university char uni" aria-hidden="true" data-score=3></i>',
    '<i class="fa fa-sort-alpha-desc char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-smile-o char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-registered char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-quote-right char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-mortar-board char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-legal char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-hand-peace-o char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-hand-spock-o char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-hashtag char" aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-heart char heart reset" aria-hidden="true" data-score=4></i>',
    '<i class="fa fa-home char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-eye-slash char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-expeditedssl char " aria-hidden="true" data-score=1></i>',
    '<i class="fa  fa-envelope-o char " aria-hidden="true" data-score=1></i>',
    '<i class="fa  fa-envira char leaf" aria-hidden="true" data-score=3></i>',
    '<i class="fa fa-euro char euro" aria-hidden="true" data-score=5></i>',
    '<i class="fa fa-diamond char reset " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-comments char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-bitcoin char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-battery-full char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-wifi char " aria-hidden="true" data-score=1></i>',
    '<i class="fa fa-wrench char " aria-hidden="true" data-score=1></i>',
  ];

  let array = [];
  for (let i = 0; i <= 3000; i++) {
    const random = Math.floor(Math.random() * options.length);
    array.push(options[random]);
}
document.querySelector(".bg_container").innerHTML = array.join("")



  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop > 190) {
        $('.bg_container').stop().animate({height: "150vh"},200);
    }
    else if (scrollTop < 100) {
         $('.bg_containert').stop().animate({height: "130vh"},200);   
    }
});
