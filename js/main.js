(function () {
  addEventListener("DOMContentLoaded", () => {
    const workExItems = document.querySelectorAll("#resume > ul > li");

    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        } else {
          entry.target.classList.remove("in");
        }
      });
    });

    Array.from(workExItems).forEach((item) => {
      intersection.observe(item);
    });

    document.querySelector(".wrapper").addEventListener(
      "scroll",
      throttle((e) => {
        if (e.target.scrollTop > document.body.scrollHeight) {
          document.querySelector("#go-up-btn").classList.add("active");
          document.querySelector("nav").classList.add("active");
        } else {
          document.querySelector("#go-up-btn").classList.remove("active");
          document.querySelector("nav").classList.remove("active");
        }
      }, 300),
    );

    document.querySelector("#go-up-btn").addEventListener("click", () => {
      document
        .querySelector(".wrapper")
        .scrollTo({ top: 0, behavior: "smooth" });
    });

    navIntersection("about-me-nav", "about-me");
    navIntersection("resume-nav", "resume");
    navIntersection("skills-nav", "skills");
    navIntersection("projects-nav", "projects");

    navIntersection("", "interesting", resetActiveIndicator);
    navIntersection("", "hero", resetActiveIndicator);
  });
})();

function navIntersection(idNav, idIntersection, callback) {
  new IntersectionObserver(
    (entries) => {
      Array.from(entries).forEach((entry) => {
        const navItem = document.getElementById(idNav);
        if (entry.isIntersecting) {
          if (callback) {
            callback();
            return;
          }
          const indicator = document.getElementById("indicator");
          const { offsetWidth, offsetLeft } = navItem;

          resetNavActive();

          navItem.classList.add("active");
          indicator.style.left = offsetLeft + 4 + "px";
          indicator.style.width = offsetWidth - 4 + "px";
        } else {
          this.unobserve(entry);
        }
      });
    },
    { threshold: 0.25 },
  ).observe(document.getElementById(idIntersection));
}

function resetNavActive() {
  const navItems = document.querySelectorAll("nav > ul > li");
  Array.from(navItems).forEach((item) => {
    item.classList.remove("active");
  });
}

function resetActiveIndicator() {
  const indicator = document.getElementById("indicator");
  indicator.style.width = 0;
  resetNavActive();
}

function throttle(fn, ms) {
  let now = new Date().getTime();
  return (...args) => {
    console.log(new Date().getTime() - now, ms);
    if (new Date().getTime() - now >= ms) {
      console.log("call");
      fn(...args);
      now = new Date().getTime();
    }
  };
}
