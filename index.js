let sideOpen = false

// NavBar
// Algne kood võetud: https://www.w3schools.com/howto/howto_js_sidenav.asp
// Kirjutaja: Jürmo Harak 
// SideBar navikaatori lahti kinni nuppu funktsioon
function btnNav() {
  // Kui SideBar ei ole lahti ja kasutaja tahab seda lahti teha
  if (!sideOpen) {
    // Liikuda vasak piir tagasi sinna kus ta ilma muutatusteda on.
    document.getElementById('sidebar').style.left = "0";
    // Muuta nuppu tekst 'x'
    document.getElementById('sidebtn').textContent = 'x'
    // SideBar on nüüd lahti
    sideOpen = true
  // Kui SideBar on juba lahti ja kasutaja tahab seda kinni panna
  } else if (sideOpen) {
    //Liikuda vasak piir 8.75remi vasakule et ta enam vähem eest ära saada, aga mitte piisavalt, et nupp ära kaoks.
    document.getElementById('sidebar').style.left = "-8.75rem";
    // Muuta nuppu tekst ära parem nooleks, et kasutajale edasi anda, et see teeb midagi lahti.
    document.getElementById('sidebtn').textContent = '>'
    // SideBar on nüüd kinni
    sideOpen = false
  }
}