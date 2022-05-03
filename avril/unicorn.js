StackExchange.ready(function () {

  injectMarkup();
  initSidebar();
  initGuestbook();
  initPopover();

  function injectMarkup() {
    if ($("#content").css('backgroundColor') === 'rgba(0, 0, 0, 0)' && $("body").css('backgroundColor') !== 'rgba(0, 0, 0, 0)') {
      $("#content").css('backgroundColor', $("body").css('backgroundColor'));
    }

    // Header
    var _h = '';
    _h += '<div id="tm-header" class="bg-black-900 ta-center py24 overflow-hidden">';
    _h += '<div id="tm-scroll">';
    _h += '<img src="https://cdn.sstatic.net/Img/april-fools-2019/headline.gif?v=f81430a4e488" alt="Welcome to Stack Overflow" />';
    _h += '</div>';
    _h += '</div>';
    $("body").prepend(_h);

    // Unicorns?
    $("#left-sidebar").prepend('<img class="tm-unicorn-front" src="https://cdn.sstatic.net/Img/april-fools-2019/unicorn-front-half.png?v=3b572eca29f8" alt="UNI..."/>');
    $(".container").append('<img class="tm-unicorn-back" src="https://cdn.sstatic.net/Img/april-fools-2019/unicorn-back-half.png?v=1a044240263b" alt="...CORN"/>');

    // Left sidebar link
    var _l = '';
    _l += '<div class="w100 ta-center fc-white ff-comic mt32">';
    _l += '<img class="w100 mb24" src="https://cdn.sstatic.net/Img/april-fools-2019/caution-tape.png?v=e922b1b2376d" />';
    _l += '<p class="tt-uppercase fw-bold fs3 mb24">~Under Construction~</p>';
    _l += '<p class="mb0">Big changes for Y2K!</p>';
    _l += '<p><a href="https://meta.stackoverflow.com/questions/382111/announcing-the-stack-overflow-time-machine">Learn more about upcoming changes</a></p>';
    _l += '<a href="#" class="js-tm-sidebar-toggle s-btn s-btn__primary d-inline-block fc-white td-none mt24">Go to the future</a>';
    _l += '<img class="w100 mt24" src="https://cdn.sstatic.net/Img/april-fools-2019/caution-tape.png?v=e922b1b2376d" />';
    _l += '</div>';
    $("#left-sidebar nav").append(_l);

    var _f = ''; // Injected footer
    _f += '<div id="tm-footer">';
    _f += '<div id="tm-footer-top"></div>';
    _f += '<h1 class="ta-center"><img class="wmx100" src="https://cdn.sstatic.net/Img/april-fools-2019/guestbook.png?v=af7ae3191a68" alt="Guestbook"></h1>';
    _f += '<div class="grid mx-auto wmx8 ff-comic fc-white md:fd-column">';
    _f += '<div class="js-tm-form-container tm-form-container grid--cell5 grid--cell12 p12 fc-white">';
    _f += '<form id="js-tm-form">';
    _f += '<p class="mb4"><label for="guestbook-name">Name:</label></p>';
    _f += '<input class="js-tm-name-input mb16 w100" type="text" name="guestbook-name" required />';
    _f += '<p class="mb4"><label for="guestbook-name">Comment:</label></p>';
    _f += '<textarea class="js-tm-comment-input w100 hs1 mb16" name="guestbook-comment" required></textarea>';
    _f += '<input id="js-tm-submit" class="w100" type="submit" value="Sign our guestbook!" />';
    _f += '</form>';
    _f += '</div>';
    _f += '<div class="js-tm-comments tm-comments grid--cell7 grid--cell12 p12 overflow-y-scroll bg-white">';
    _f += '</div>';
    _f += '</div>';
    _f += '<div id="tm-footer-bottom"></div>';
    _f += '</div>';
    $("#footer").prepend(_f);

    // Site footer
    $(".site-footer--copyright p")
      .before('<p class="fw-bold fc-white mb0 ff-comic fs-body1">Proudly built in Notepad</p>')
      .after('<p class="fw-bold fc-white ff-comic tt-uppercase fs-body1">Best viewed in <img class="d-inline-block" src="https://cdn.sstatic.net/Img/april-fools-2019/netscape-badge.png?v=090cdcefe523" alt="Netscape 3.0"></p>');


    // Gif injections
    var globe = '<img src="https://cdn.sstatic.net/Img/april-fools-2019/globe.gif?v=d8211e5aae84" class="tm-globe" />';
    $("svg.svg-icon.iconGlobe").before(globe).remove();

    var $hnqHeadline = $("#hot-network-questions h4");
    if ($hnqHeadline.length) {
      var flame = '<img src="https://cdn.sstatic.net/Img/april-fools-2019/fire.gif?v=a3a5393ce037" class="tm-fire" />';
      $hnqHeadline.append(flame).prepend(flame);
    }
  }

  function initSidebar() {
    $(".js-tm-sidebar-toggle").click(function (e) {
      e.preventDefault();

      $.cookie("tm2019", "1", {path: '/', expires: 2});

      window.location.reload(false);
    })
  }

  function initGuestbook() {
    populateGuestbook();
    bindGuestbook();

    // Randomly add items
    setInterval(function () {
      if (Math.floor(Math.random() * 3) === 0) {
        addRandomComment();
      }
    }, 300);
  }

  function initPopover() {
    var $popover = $(".js-toggle-popover");
    setTimeout(function () {
      $popover.insertBefore(".js-time-machine-button").removeClass("d-none").addClass("is-visible");
    }, 1000 * 4);

    $(document).on("click touchstart", ".js-time-machine-button, .js-toggle-popover-close", function () {
      $popover.remove();
      $.cookie("tm2019d", "1", {path: '/', expires: 2});
    });
  }

  function populateGuestbook() {
    for (var i = 0; i < 10; i++) {
      addRandomComment();
    }
  }

  function bindGuestbook() {
    $("#js-tm-form").submit(function (e) {
      e.preventDefault();

      var $name = $(".js-tm-name-input");
      var $comment = $(".js-tm-comment-input");

      if ($name.val().length === 0 || $comment.val().length === 0) return;

      addComment($name.val(), $comment.val());

      $name.val(null);
      $comment.val(null);
    })
  }

  function addRandomComment() {
    var names = [
      "adam",
      "jane",
      "meg",
      "jon",
      "josh",
      "lisa",
      "brian"
    ];
    var comments = [
      "Is this an April Fool's joke?",
      "this is for april 1",
      "april fools :)",
      "Where's the webring? :(",
      "check out this song! http://myspace.com/soeb__42345",
      "FIIIIIIIRRRSSSSTTTTTTT",
      "...",
      "lol",
      "lol jk",
      "testing.",
      "the unicorns are genius",
      "did they kill sparkles???",
      "fireballs would have been better",
      "I forgot about <marquee> lol",
      "<marquee> !!!",
      "What about <blink>?",
      "testing...",
      "test test test",
      "does this wor",
      "OMG HAHAHA",
      "omg",
      "heh.",
      "hehehe",
      "I think they got haxxxed",
      "There are so many better things for the devs to do.",
      "I guess it's April :P",
      "f",
      "it's almost Y2K!!!",
      "what browser are you using?",
      "netscape 4.05",
      "ff",
      "DHTML!",
      "Flash"
    ];

    addComment(names[Math.floor(Math.random() * names.length)], comments[Math.floor(Math.random() * comments.length)])
  }

  function escapeHtml(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function (m) {
      return map[m];
    });
  }

  function addComment(name, comment) {

    var content = '<div class="ff-comic fc-fuschia bb bbw2 bc-black-3 fs-body3 p12">';
    content += '<p class="mb4">' + escapeHtml(comment) + '</p>';
    content += '<p class="tm-comment-info ff-times fs-caption">@' + escapeHtml(name) + ' - 2019/04/01</p>'
    content += '</div>';

    $(".js-tm-comments").prepend(content);
  }

});
