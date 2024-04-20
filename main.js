let drinks = [
  { name: "Beer", price: 2 },
  { name: "Whiskey", price: 5 },
  { name: "Wine", price: 8 },
];

// $(document).ready(function () {
//   $("#btn").click(function () {
//     console.log("Clicked");
//     $("#title").hide();
//   });
// });

const exampleTarget = document.getElementById("example");

const inputTarget = document.getElementById("randomInput");

// console.log(exampleTarget.innerText);
console.log(exampleTarget.textContent);

inputTarget.addEventListener("keypress", (e) => {
  const key = e.key;

  const convertToCharCode = key.charCodeAt(0);

  console.log(key);
  console.log(convertToCharCode);
});

// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });

let keyPressed = {};

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  keyPressed[e.key] = true;

  if (keyPressed["a"] && keyPressed["s"] && keyPressed["d"]) {
    alert("Combination successful");
    keyPressed = {};
  }
});

document.addEventListener("keyup", (e) => {
  keyPressed[e.key] = false;
});

$(() => {
  // drinks.forEach((value, i)=> console.log(i, value.name))

  $.each(drinks, (i, value) => {
    const li = $(`<li>${i + 1}.${value.name}</li>`);
    $("ul").append(li);
  });

  $("#btnToggle").on("click", () => {
    console.log("Clicked");
    $(".img").toggle(1000);
  });

  $("#btnShow").on("click", () => {
    console.log("Clicked");
    $(".img").show(2000);
  });

  $("#btnHide").on("click", () => {
    console.log("Clicked");
    $(".img").hide(5000);
  });

  $("#btnStop").on("click", () => {
    console.log("Clicked");
    $(".img").stop(true, true);
  });

  $("#btnCss").on("click", () => {
    console.log("Clicked");
    // $("h1").css("color", "red");
    // $("h1").css("background-color", "blue");
    $("h1").toggleClass("titleStyle");
  });

  $("#btnChangeInput").on("click", () => {
    // $("#randomInput").attr("type", "password");
    // $("#randomInput").val("random");
  });

  $("#btnChangeTitle").on("click", () => {
    // $("#randomInput").attr("type", "password");
    // $("#title").text("New title");
    $("#title").html("<h2>New title</h2>");
  });

  $("#btnAddTitle").on("click", () => {
    $("#empty").html("<h2>New title</h2>");
  });

  $("#btnSlideUp").on("click", () => {
    $("img").slideUp(2000);
  });

  $("#btnSlideDown").on("click", () => {
    $("img").slideDown(2000);
  });

  $("#btnSlideToggle").on("click", () => {
    $("img").slideToggle({
      duration: 5000,
      easing: "linear",
      start: () => {
        console.log("Animation started");
      },
      progress: () => {
        console.log("Animation in progress");
      },
      complete: () => {
        console.log("Animation completed");
      },
      step: () => {
        console.log("Animation step");
      },
    });
  });

  $("#btnFadeIn").on("click", () => {
    $("img").fadeIn(2000);
  });

  $("#btnFadeOut").on("click", () => {
    $("img").fadeOut(2000);
  });

  $("#btnFadeToggle").on("click", () => {
    $("img").fadeToggle(2000);
  });

  $("#btnAnimate").on("click", () => {
    $("img").animate(
      {
        width: "800px",
        opacity: 0.4,
      },
      3000
    );
  });
});

// const titleElement = document.getElementById("title");
// const btnElement = document.getElementById("btn");

// btnElement.addEventListener("click", () => {
//   titleElement.style.display = "none";
// });
