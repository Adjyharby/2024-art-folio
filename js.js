//preloads
$(".monthmodal").animate(
  {
    height: "0px",
  },
  1,
  function () {
    $(this).css("display", "none");
  }
);
$(".purposemodal").animate(
  {
    height: "0px",
  },
  1,
  function () {
    $(this).css("display", "none");
  }
);

$(".header").css("display", "none");
$(".header").toggle(5000);
$(".body2").css("display", "none");
$(".body2").toggle(5000);

//event listeners
$("#month").click(() => {
  let $monthModal = $(".monthmodal");
  if ($monthModal.css("display") === "none") {
    let originalHeight = $monthModal.css("height", "auto").height();
    $monthModal.css("height", "0px").css("display", "block").animate(
      {
        height: originalHeight,
      },
      1000
    );
    $("#purpose").toggle(1000);
  } else {
    $monthModal.animate(
      {
        height: "0px",
      },
      1000,
      function () {
        $(this).css("display", "none");
      }
    );
    $("#purpose").toggle(1000);
  }
});

$("#purpose").click(() => {
  let $purposeModal = $(".purposemodal");
  if ($purposeModal.css("display") === "none") {
    let originalHeight = $purposeModal.css("height", "auto").height();
    $purposeModal.css("height", "0px").css("display", "block").animate(
      {
        height: originalHeight,
      },
      1000
    );
    $("#month").toggle(1000);
  } else {
    $purposeModal.animate(
      {
        height: "0px",
      },
      1000,
      function () {
        $(this).css("display", "none");
      }
    );
    $("#month").toggle(1000);
  }
});
