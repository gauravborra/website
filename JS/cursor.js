let mouseCursorsmall = document.querySelector(".cursorsmall");
let mouseCursor = document.querySelector(".cursormain");
let glowCursor = document.querySelector(".glowcursor");
let navLinks = document.querySelectorAll('.navlinks');
let socialIcons = document.querySelectorAll('.icons');
let viewCursor = document.querySelectorAll('.viewcursor');
let buttonLink = document.querySelectorAll('.buttonlink');
let hyperLinks = document.querySelectorAll('.links');
let customLinks = document.querySelectorAll('.custlinks');
let glowText = document.querySelectorAll('.cursorglow');



window.addEventListener("mousemove",cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
  mouseCursorsmall.style.top = e.pageY + "px";
  mouseCursorsmall.style.left = e.pageX + "px";
  glowCursor.style.top = e.pageY + "px";
  glowCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
  link.addEventListener("mouseleave",() =>{
  mouseCursor.classList.remove("navlink-grow");
 link.classList.remove("hovered-navlink"); 
mouseCursorsmall.classList.remove("cursorsmallhide");
 
});
  link.addEventListener("mouseover",() => {
  mouseCursor.classList.add("navlink-grow");
  link.classList.add("hovered-navlink");
  mouseCursorsmall.classList.add("cursorsmallhide");

});
link.addEventListener("onclick",() => {
  mouseCursor.classList.add("ripple");
  link.classList.add("hovered-link");
});
});

socialIcons.forEach(icon => {
  icon.addEventListener("mouseleave",() =>{
  mouseCursor.classList.remove("icon-grow");
 icon.classList.remove("hovered-icon");
 mouseCursorsmall.classList.remove("cursorsmallhide");

});
  icon.addEventListener("mouseover",() => {
  mouseCursor.classList.add("icon-grow");
  icon.classList.add("hovered-icon");
  mouseCursorsmall.classList.add("cursorsmallhide");

});
});


viewCursor.forEach(view => {
    view.addEventListener("mouseleave",() =>{
    mouseCursor.classList.remove("viewcursor-hover");
   mouseCursorsmall.classList.remove("cursorsmallhide");
  
  });
    view.addEventListener("mouseover",() => {
    mouseCursor.classList.add("viewcursor-hover");
    mouseCursorsmall.classList.add("cursorsmallhide");

  });
  });


buttonLink.forEach(butlink => {
    butlink.addEventListener("mouseleave",() =>{
    mouseCursor.classList.remove("cursormainhide");
   mouseCursorsmall.classList.remove("cursorsmallhide");
   
  
  });
    butlink.addEventListener("mouseover",() => {
    mouseCursor.classList.add("cursormainhide");
    mouseCursorsmall.classList.add("cursorsmallhide");

  });
  });


hyperLinks.forEach(butlink => {
    butlink.addEventListener("mouseleave",() =>{
    mouseCursor.classList.remove("link-grow");
  
  });
    butlink.addEventListener("mouseover",() => {
    mouseCursor.classList.add("link-grow");

   
  });
  });

customLinks.forEach(butlink => {
    butlink.addEventListener("mouseleave",() =>{
    mouseCursor.classList.remove("link-grow");
    mouseCursorsmall.classList.remove("cursorsmallhide");

  
  });
    butlink.addEventListener("mouseover",() => {
    mouseCursor.classList.add("link-grow");
    mouseCursorsmall.classList.add("cursorsmallhide");
   
  });
  });

  glowText.forEach(glow => {
    glow.addEventListener("mouseleave",() =>{
    glowCursor.classList.remove("cursorglow")
    glowCursor.classList.remove("glowcursorshow");


  
  });
    glow.addEventListener("mouseover",() => {
    glowCursor.classList.add("cursorglow")
    glowCursor.classList.add("glowcursorshow");


   
  });
  });




