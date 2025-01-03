<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2024 Art Folio</title>
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <style>
    img {
      max-width: 100px;
      margin: 5px;
    }
  </style>
</head>
<body>
  <div id="loadingMessage">Loading...</div>
  <div id="january">January</div>
  <div id="may">May</div>
  <div id="october">October</div>
  <div id="december">December</div>

  <button id="februarytoggle">February</button>
  <div id="febdiv"></div>

  <button id="Marchtoggle">March</button>
  <div id="mardiv"></div>

  <button id="apriltoggle">April</button>
  <div id="aprdiv"></div>

  <button id="junetoggle">June</button>
  <div id="jundiv"></div>

  <button id="julytoggle">July</button>
  <div id="juldiv"></div>

  <button id="augusttoggle">August</button>
  <div id="augdiv"></div>

  <button id="septtoggle">September</button>
  <div id="sepdiv"></div>

  <button id="novtoggle">November</button>
  <div id="novdiv"></div>

  <button id="selftoggle">Self</button>
  <div id="selfdiv"></div>

  <button id="commissiontoggle">Commission</button>
  <div id="commdiv"></div>

  <script>
    // Hide the loading message
    $("#loadingMessage").animate(
      {
        height: "0px",
      },
      1000,
      () => {
        $("#loadingMessage").css("display", "none");
      }
    );

    // Function to set up image toggles
    function setupImageToggle(toggleId, divId, imagePath, imageCount, extraImages = []) {
      $(`${toggleId}`).click(() => {
        if ($(`${divId}`).children().length == 0) {
          $(`${divId}`).toggle(10);
          let content = "";

          // Add the images from the folder
          for (let x = 1; x <= imageCount; x++) {
            content += `<img src='./pictures/${imagePath}${x}.png' alt='Image ${x}'>`;
          }

          // Add extra images (like GIFs) if provided
          extraImages.forEach((image) => {
            content += `<img src='./pictures/${image}' alt='Extra Image'>`;
          });

          $(`${divId}`).html(content);
          $(`${divId}`).toggle(1000);
        } else {
          $(`${divId}`).toggle(1000, () => {
            $(`${divId}`).empty();
          });
          $(`${divId}`).toggle(10);
        }
      });
    }

    // Initialize toggles for specific months with images
    setupImageToggle("#februarytoggle", "#febdiv", "feb", 5);
    setupImageToggle("#Marchtoggle", "#mardiv", "mar", 5);
    setupImageToggle("#apriltoggle", "#aprdiv", "apr", 2);
    setupImageToggle("#junetoggle", "#jundiv", "jun", 2);
    setupImageToggle("#julytoggle", "#juldiv", "jul", 3, ["jul2.gif", "jul4.gif"]);
    setupImageToggle("#augusttoggle", "#augdiv", "aug", 5, ["aug1.gif"]);
    setupImageToggle("#septtoggle", "#sepdiv", "sep", 1);
    setupImageToggle("#novtoggle", "#novdiv", "nov", 10);

    // Self and Commission toggles
    setupImageToggle("#selftoggle", "#selfdiv", "self/s", 21, ["self/s1.gif"]);
    setupImageToggle("#commissiontoggle", "#commdiv", "comms/c", 12, ["comms/c1.gif", "comms/c2.gif"]);
  </script>
</body>
</html>
