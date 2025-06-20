// window.onload = function () {
  const openButtons = document.querySelectorAll(".openModalBtn");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  openButtons.forEach((btn, index) => {
    btn.onclick = function () {
      modals[index].style.display = "block";
    };
  });

  closeButtons.forEach((btn, index) => {
    btn.onclick = function () {
      modals[index].style.display = "none";
    };
  });

  window.onclick = function (event) {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };
;
