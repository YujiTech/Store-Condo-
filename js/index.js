const navbar = document.getElementById("navbar");
        window.onscroll = (e) =>{
          const scrollValue = window.scrollY;
          console.log(scrollValue);
          const valuescroll = 150;
          if(window.scrollY > valuescroll){
            navbar.style.backgroundColor = "black";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "0px 0px";
          }
          else{
            navbar.style.backgroundColor = "transparent";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "14px 0px";
          }
        }