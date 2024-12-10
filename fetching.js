    // $(".modalbuttons").toggle(1000);
    $("#loadingMessage").animate(
      {
        height: "0px",
      },
      1000,
      () => {
        $("#loadingMessage").css("display", "none");
      }
    );

    let prevtext = $("#january").text();
    document.querySelector("#january").addEventListener("click", () => {
      let currtext = $("#january").text();

      if (currtext === prevtext) {
        $("#january").toggle(1000, () => {
          $("#january").html("<h2>" + "I was busy writing the game plot for stranded" + "</h2>");
        });

        $("#january").toggle(1000);

        setTimeout(() => {
          $("#january").toggle(1000, () => {
            $("#january").html("<h2>" + prevtext + "</h2>");
          });

          $("#january").toggle(1000);
        }, 3000);
      }
    });
    let prevtext2 = $("#may").text();
    document.querySelector("#may").addEventListener("click", () => {
      let currtext2 = $("#may").text();

      if (currtext2 === prevtext2) {
        $("#may").toggle(1000, () => {
          $("#may").html("<h2>" + "It was the finals for my second year I couldn't risk it" + "</h2>");
        });

        $("#may").toggle(1000);

        setTimeout(() => {
          $("#may").toggle(1000, () => {
            $("#may").html("<h2>" + prevtext2 + "</h2>");
          });

          $("#may").toggle(1000);
        }, 3000);
      }
    });

    let prevtext3 = $("#october").text();
    document.querySelector("#october").addEventListener("click", () => {
      let currtext3 = $("#october").text();

      if (currtext3 === prevtext3) {
        $("#october").toggle(1000, () => {
          $("#october").html("<h2>" + "my month, my rest" + "</h2>");
        });

        $("#october").toggle(1000);
        setTimeout(() => {
          $("#october").toggle(1000, () => {
            $("#october").html("<h2>" + prevtext3 + "</h2>");
          });

          $("#october").toggle(1000);
        }, 3000);
      }
    });

    let prevtext4 = $("#december").text();
    document.querySelector("#december").addEventListener("click", () => {
      let currtext4 = $("#december").text();

      if (currtext4 === prevtext4) {
        $("#december").toggle(1000, () => {
          $("#december").html("<h2>" + "I will start around 25" + "</h2>");
        });

        $("#december").toggle(1000);

        setTimeout(() => {
          $("#december")
            .toggle(1000, () => {
              $("#december").html("<h2>" + prevtext4 + "</h2>");
            })
            .toggle(1000);
        }, 3000);
      }
    });

    $("#februarytoggle").click(() => {
      if ($("#febdiv").children().length == 0) {
        $("#febdiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 5; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "feb" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        $("#febdiv").html(content);
        $("#febdiv").toggle(1000, () => {
          $(
            "#march, #april, #june, #july, #august,#september,#november"
          ).toggle(1000);
        });
      } else {
        $("#febdiv").toggle(1000, () => {
          $("#febdiv").empty();
          $(
            "#march, #april, #june, #july, #august,#september,#november"
          ).toggle(1000);
        });
        $("#febdiv").toggle(10);
      }
    });

    $("#Marchtoggle").click(() => {
      if ($("#mardiv").children().length == 0) {
        $("#mardiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 5; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "mar" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        $("#mardiv").html(content);
        $("#mardiv").toggle(1000, () => {
          $(
            "#february, #april, #june, #july, #august,#september,#november"
          ).toggle(1000);
        });
      } else {
        $("#mardiv").toggle(1000, () => {
          $("#mardiv").empty();
          $(
            "#february, #april, #june, #july, #august,#september,#november"
          ).toggle(1000);
        });
        $("#mardiv").toggle(10);
      }
    });

    $("#apriltoggle").click(() => {
      if ($("#aprdiv").children().length == 0) {
        $("#aprdiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 2; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "apr" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        $("#aprdiv").html(content);
        $("#aprdiv").toggle(1000, () => {
          $(
            "#february, #march, #june, #july, #august,#september,#november"
          ).toggle(1000);
        });
      } else {
        $("#aprdiv").toggle(1000, () => {
          $("#aprdiv").empty();
          $(
            "#february, #march, #june, #july, #august,#september,#november"
          ).toggle(1000);
        });
        $("#aprdiv").toggle(10);
      }
    });

    $("#junetoggle").click(() => {
      if ($("#jundiv").children().length == 0) {
        $("#jundiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 2; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "jun" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        $("#jundiv").html(content);
        $("#jundiv").toggle(1000, () => {
          $(
            "#february, #march, #april, #july, #august,#september,#november"
          ).toggle(1000);
        });
      } else {
        $("#jundiv").toggle(1000, () => {
          $("#jundiv").empty();
          $(
            "#february, #march, #april, #july, #august,#september,#november"
          ).toggle(1000);
        });
        $("#jundiv").toggle(10);
      }
    });

    $("#julytoggle").click(() => {
      if ($("#juldiv").children().length == 0) {
        $("#juldiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 3; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "jul" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        content +=
          "<img src='" +
          "/pictures/" +
          "jul" +
          2 +
          ".gif' alt='Image " +
          2 +
          "'>";

        content +=
          "<img src='" +
          "/pictures/" +
          "jul" +
          4 +
          ".gif' alt='Image " +
          4 +
          "'>";

        $("#juldiv").html(content);
        $("#juldiv").toggle(1000, () => {
          $(
            "#february, #march, #april, #june, #august,#september,#november"
          ).toggle(1000);
        });
      } else {
        $("#juldiv").toggle(1000, () => {
          $("#juldiv").empty();
          $(
            "#february, #march, #april, #june, #august,#september,#november"
          ).toggle(1000);
        });
        $("#juldiv").toggle(10);
      }
    });

    $("#augusttoggle").click(() => {
      if ($("#augdiv").children().length == 0) {
        $("#augdiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 5; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "aug" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        content +=
          "<img src='" +
          "/pictures/" +
          "aug" +
          1 +
          ".gif' alt='Image " +
          1 +
          "'>";

        $("#augdiv").html(content);
        $("#augdiv").toggle(1000, () => {
          $(
            "#february, #march, #april, #june, #july,#september,#november"
          ).toggle(1000);
        });
      } else {
        $("#augdiv").toggle(1000, () => {
          $("#augdiv").empty();
          $(
            "#february, #march, #april, #june, #july,#september,#november"
          ).toggle(1000);
        });
        $("#augdiv").toggle(10);
      }
    });

    $("#septtoggle").click(() => {
      if ($("#sepdiv").children().length == 0) {
        $("#sepdiv").toggle(10);

        content =
          "<img src='" +
          "/pictures/" +
          "sep" +
          1 +
          ".png' alt='Image " +
          1 +
          "'>";

        $("#sepdiv").html(content);
        $("#sepdiv").toggle(1000, () => {
          $("#march, #april, #june, #july, #august,#february,#november").toggle(
            1000
          );
        });
      } else {
        $("#sepdiv").toggle(1000, () => {
          $("#sepdiv").empty();
          $("#march, #april, #june, #july, #august,#february,#november").toggle(
            1000
          );
        });
        $("#sepdiv").toggle(10);
      }
    });

    $("#novtoggle").click(() => {
      if ($("#novdiv").children().length == 0) {
        $("#novdiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 10; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "nov" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        $("#novdiv").html(content);
        $("#novdiv").toggle(1000, () => {
          $(
            "#march, #april, #june, #july, #august,#september,#february"
          ).toggle(1000);
        });
      } else {
        $("#novdiv").toggle(1000, () => {
          $("#novdiv").empty();
          $(
            "#march, #april, #june, #july, #august,#september,#february"
          ).toggle(1000);
        });
        $("#novdiv").toggle(10);
      }
    });

    $("#selftoggle").click(() => {
      if ($("#selfdiv").children().length == 0) {
        $("#selfdiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 21; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "self/s" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        content +=
          "<img src='" +
          "/pictures/" +
          "self/s" +
          1 +
          ".gif' alt='Image " +
          1 +
          "'>";

        $("#selfdiv").html(content);
        $("#selfdiv").toggle(1000, () => {
          $("#commission").toggle(1000);
        });
      } else {
        $("#selfdiv").toggle(1000, () => {
          $("#selfdiv").empty();
          $("#commission").toggle(1000);
        });
        $("#selfdiv").toggle(10);
      }
    });

    $("#commissiontoggle").click(() => {
      if ($("#commdiv").children().length == 0) {
        $("#commdiv").toggle(10);
        let content = "";
        for (let x = 1; x <= 12; x++) {
          content +=
            "<img src='" +
            "/pictures/" +
            "comms/c" +
            x +
            ".png' alt='Image " +
            x +
            "'>";
        }
        content +=
          "<img src='" +
          "/pictures/" +
          "comms/c" +
          1 +
          ".gif' alt='Image " +
          1 +
          "'>";
        content +=
          "<img src='" +
          "/pictures/" +
          "comms/c" +
          2 +
          ".gif' alt='Image " +
          2 +
          "'>";

        $("#commdiv").html(content);
        $("#commdiv").toggle(1000, () => {
          $("#self").toggle(1000);
        });
      } else {
        $("#commdiv").toggle(1000, () => {
          $("#commdiv").empty();
          $("#self").toggle(1000);
        });
        $("#commdiv").toggle(10);
      }
    });