let options = [
    '<i class="fa fa-thermometer-empty char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-shower char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-ravelry char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-snowflake-o char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-birthday-cake char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-bus char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-credit-card char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-gamepad char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-futbol-o char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-file-image-o char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-unlock char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-money char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-dollar char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-usb char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-hand-o-right char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-bicycle char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-sign-language char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-shower char lazy" aria-hidden="true"></i>',
    '<i class="fa  fa-upload char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-trademark char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-university char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-sort-alpha-desc char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-smile-o char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-registered char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-quote-right char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-mortar-board char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-legal char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-hand-peace-o char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-hand-spock-o char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-hashtag char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-heart char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-home char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-eye-slash char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-expeditedssl char lazy" aria-hidden="true"></i>',
    '<i class="fa  fa-envelope-o char lazy" aria-hidden="true"></i>',
    '<i class="fa  fa-envira char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-euro char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-diamond char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-comments char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-bitcoin char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-battery-full char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-wifi char lazy" aria-hidden="true"></i>',
    '<i class="fa fa-wrench char lazy" aria-hidden="true"></i>',
  ];

  let array = [];
  for (let i = 0; i <= 3000; i++) {
    const random = Math.floor(Math.random() * options.length);
    $(".bg_container").append(options[random]);
  }

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
