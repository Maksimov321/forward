        let slideIndex = 1;
        /* Вызываем функцию, которая реализована ниже: */
        showSlides(slideIndex);

        /* Увеличиваем индекс на 1 — показываем следующий слайд: */
        function nextSlide() {
           showSlides(slideIndex += 1);
        }

        /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
        function previousSlide() {
           showSlides(slideIndex -= 1);  
        }

        /* Устанавливаем текущий слайд: */
        function currentSlide(n) {
           showSlides(slideIndex = n);
        }

        /* Функция перелистывания: */
        function showSlides(n) {
        /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
           let slides = document.getElementsByClassName("item");
    
        /* Проверяем количество слайдов: */
        if (n > slides.length) {
         slideIndex = 1
        }
        if (n < 1) {
         slideIndex = slides.length
        }
  
        /* Проходим по каждому слайду в цикле for: */
        for (let slide of slides) {
         slide.style.display = "none";
        }
        /* Делаем элемент блочным: */
        slides[slideIndex - 1].style.display = "flex";    
        }


        let slideIndex2 = 1;
        showSlides2(slideIndex2);

        function nextSlides(){
                showSlides2(slideIndex2 += 1);
        }

        function previousSlides(){
                showSlides2(slideIndex2 -= 1);
        }

        function showSlides2(n){
        let slides2 = document.getElementsByClassName("item-2");

        if(n > slides2.length) {
         slideIndex2 = 1
        }
        if ( n < 1){
         slideIndex2 = slides2.length
        }

        for(let slide2  of slides2){
         slide2.style.display = "none";
        }
        slides2[slideIndex2 - 1].style.display = "flex";
        }
        
        window.addEventListener("mousewheel", function(e) {
         if (e.ctrlKey) {
         e.preventDefault();
         return false;
        }
        });
        const viewBtn = document.querySelector(".view-modal"),
        popup = document.querySelector(".popup"),
        close = popup.querySelector(".close"),
        field = popup.querySelector(".field"),
        input = field.querySelector(".input");

        viewBtn.onclick = () => {
         popup.classList.toggle("show");
        }
        close.onclick = () =>{
         viewBtn.click();
        } 
      
        copy.onclick = ()=>{
         inputs.select();
         if(document.execCommand("copy")){
         field.classList.add("active");
         copy.innerText = "Copied";
         setTimeout(()=>{
         window.getSelection().removeAllRanges();
         field.classList.remove("active");
         copy.innerText = "copy";
        }, 3000);
        }
        }

        
