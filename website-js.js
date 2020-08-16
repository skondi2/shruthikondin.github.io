
$(document).ready(function() {

  /* Top-menu buttons animated */
  $("#home-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".home").offset().top - 20
    }, 900);
  });

  $("#about-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".about-me").offset().top - 50
    }, 900);
  });

  $("#project-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".projects").offset().top
    }, 900);
  });

  $("#exp-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".experience").offset().top - 50
    }, 900);
  });

  $("#project-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".projects").offset().top + 30
    }, 900);
  });

  $("#skill-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".skills").offset().top + 30
    }, 900);
  });

  $("#resume-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".resume").offset().top
    }, 900);
  });

  $("#contact-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(".contact-me").offset().top
    }, 900);
  });


});

$(".home-image").bind("load", function () { $(this).fadeIn(); });

if(!$('#research-btn').data('rclicked') && !$('#hackathon-btn').data('hclicked') && !$('internship-btn').data('iclicked')) {
  $(".hackathon-section").hide();
  $(".research-section").hide();
  $("#internship-btn").css("font-weight","Bold");
  $("#internship-btn").css("box-shadow", "7px 7px 5px black");
}

$(document).on('click', '#internship-btn', () => {
    $(this).data('iclicked', true);
    $("#internship-btn").css("font-weight","Bold");
    $("#internship-btn").css("box-shadow", "7px 7px 5px black");

    if ( $(".hackathon-section").is(":visible")) {
      $("#hackathon-btn").css("font-weight","normal");
      $("#hackathon-btn").css("box-shadow", "none");

      //window.alert("hackathon --> internship");
      $(".hackathon-section").hide();
      $(".internship-section").show();
    }
    else if ( $(".research-section").is(":visible")) {
      $("#research-btn").css("font-weight","normal");
      $("#research-btn").css("box-shadow", "none");

      //window.alert("research --> internship");
      $(".research-section").hide();
      $(".internship-section").show();
    }
});

$(document).on('click', '#hackathon-btn', () => {
    $(this).data('hclicked', true);
    $("#hackathon-btn").css("font-weight","bold");
    $("#hackathon-btn").css("box-shadow", "7px 7px 5px black");

    if ( $(".internship-section").is(":visible")) {
      $("#internship-btn").css("font-weight","normal");
      $("#internship-btn").css("box-shadow","none");

      $(".internship-section").hide();
      //window.alert("internship --> hackathon");
      $(".hackathon-section").show();
    }
    else if ( $(".research-section").is(":visible")) {
      $("#research-btn").css("font-weight","normal");
      $("#research-btn").css("box-shadow","none");

      $(".research-section").hide();
      //window.alert("research --> hackathon");
      $(".hackathon-section").show();
    }
});

$(document).on('click', '#research-btn', () => {
  $(this).data('rclicked', true);
  $("#research-btn").css("font-weight","bold");
  $("#research-btn").css("box-shadow", "7px 7px 5px black");

  if ( $(".internship-section").is(":visible")) {
    $("#internship-btn").css("box-shadow","none");
    $("#internship-btn").css("font-weight","normal");

    $(".internship-section").hide();
    //window.alert("internship --> research");
    $(".research-section").show();
  }
  else if ( $(".hackathon-section").is(":visible")) {
    $("#hackathon").css("box-shadow","none");
    $("#hackathon-btn").css("font-weight","normal");

    $(".hackathon-section").hide();
    //window.alert("hackathon --> research");
    $(".research-section").show();
  }
});
