let list =document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item)=>{
        item.classList.remove('active');
         this.classList.add('active');
    })
}
list.forEach((item)=>{
    item.addEventListener("click",activeLink)
})
var typed = new Typed('.animate', {
    strings: ['Web Developer', 'Front-End Dev','Back-End Dev','UI/Ux-Design'],
    typeSpeed: 50,
    loop:true,
  });

  const coords = { x:0 , y:0}; //object
  const circles = document.querySelectorAll(".circle");
  const colors =[ "#1f005c",
      "##4100c2",
       "#9200ae",
        "#c00099", 
        "#df0084",
         "#b22c5e",
          "#c5415d",
           "#d5585c",
            "#e36e5c",
             "#ef865e",
              "#f89d63",
               "#ffb56b"]; 
  circles.forEach(
      (circle,index)=>{
            circle.x=0;
            circle.y=0;
            circle.style.backgroundColor= colors[index % colors.length];
      }
  )
  
  window.addEventListener("mousemove",(e)=>{
      coords.x= e.clientX;
      coords.y= e.clientY;
      })
  
  function animateCircles(){
      let x = coords.x;
      let y = coords.y;
      circles.forEach(
          (circle,index)=>{
              circle.style.left =  x - 12 + "px";
              circle.style.top = y - 12 +"px";
              circle.style.scale = (circles.length - index) / circles.length;
               circle.x = x;
               circle.y = y;
              
  
              const nextCircle = circles[index + 1] || circles[0];
              x += (nextCircle.x - x)*0.5;
              y += (nextCircle.y - y)*0.5;
          });
  
          requestAnimationFrame(animateCircles);
  }
  animateCircles();