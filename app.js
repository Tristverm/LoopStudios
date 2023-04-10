//References
const copyRightDate = document.getElementById("copyRight");



//Functions
const getCurrentYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    console.log(currentYear)
    return currentYear.toString();
  }
  
  copyRightDate.innerHTML =`<span class="text-white">&copy; ${getCurrentYear()} Loopstudios. All Rights Reserved</span>`;