//References
const copyRightDate = document.getElementById("copyRight");
const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

//Functions
//Normal Functions
const getCurrentYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  console.log(currentYear);
  return currentYear.toString();
};

const menuTransition = () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
};

// Function Handlers
const menuBtnFlipHandler = () => {
  menuButton.classList.toggle("open");
  menuTransition();
};

//eventListener
menuButton.addEventListener("click", menuBtnFlipHandler);

// Code
copyRightDate.innerHTML = `<span class="text-white">&copy; ${getCurrentYear()} Loopstudios. All Rights Reserved</span>`;
