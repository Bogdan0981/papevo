const engBtn = document.getElementById("eng");
const engTitle = document.getElementById("engTitle");

const rusBtn = document.getElementById("rus");
const rusTitle = document.getElementById("rusTitle");

const teamEngTitle = document.getElementById("teamEngTitle");
const teamRusTitle = document.getElementById("teamRusTitle");

engBtn.onclick = () => {
  if (
    ((rusTitle.style.display = "block"), (teamRusTitle.style.display = "block"))
  ) {
    rusTitle.style.display = "none";
    engTitle.style.display = "block";

    teamRusTitle.style.display = "none";
    teamEngTitle.style.display = "block";
  }
};

rusBtn.onclick = () => {
  if (
    ((engTitle.style.display = "block"), (teamEngTitle.style.display = "block"))
  ) {
    engTitle.style.display = "none";
    rusTitle.style.display = "block";

    teamEngTitle.style.display = "none";
    teamRusTitle.style.display = "block";
  }
};
