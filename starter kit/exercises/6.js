let accordion = document.querySelectorAll(".accordion");
let weather = document.querySelectorAll(".weather");
let footer = document.querySelectorAll(".footer-container");
let bottom = document.querySelectorAll(".bottom");
let upper = document.querySelectorAll(".upper");



let count = -1;
let newItem = accordion[0]
accordion.forEach(((item, i) => {
    item.addEventListener("click",function toggleAccordion() {
        if(item.classList.contains("opened")){
            item.classList.remove("opened");
          bottom[i].classList.remove("is-opened");
          upper[i].classList.remove("is-opened");
          weather[i].style.display = "none";
          footer[i].style.display = "none";
          console.log("clicked");
        }else if (count !== -1 && count !== i) {
          newItem.classList.remove("opened");
          bottom[count].classList.remove("is-opened");
          upper[count].classList.remove("is-opened");
          weather[count].style.display = "none";
          footer[count].style.display = "none";
          console.log("clicked");
        }
        
        console.log(count);
          item.classList.add("opened");
          bottom[i].classList.add("is-opened");
          upper[i].classList.add("is-opened");
          weather[i].style.display = "inline";
          footer[i].style.display = "grid";
          count = i
          newItem = item
      console.log(count);
      
        
      } )
}))


console.log({accordion});
