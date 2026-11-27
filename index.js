let sideOpen = false

// NavBar
function btnNav() {
  if (!sideOpen) {
    document.getElementById('sidebar').style.left = "0";
    document.getElementById('sidebtn').textContent = 'x'
    sideOpen = true
  } else if (sideOpen) {
    document.getElementById('sidebar').style.left = "-8.75rem";
    document.getElementById('sidebtn').textContent = '>'
    sideOpen = false
  }
}