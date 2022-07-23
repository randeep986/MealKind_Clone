
    let homeTab=document.getElementById("Home_tab");
    let articleTab=document.getElementById("article_Tab")
    let mealTab=document.getElementById("Meal_Tab");
    document.getElementById("Articles").addEventListener("click",function(event){
        event.preventDefault();
        articleTab.classList.remove("articleH")
        homeTab.classList.add("articleH");
        mealTab.classList.add("mealH")


    })
    document.getElementById("Home").addEventListener("click",function(event){
        event.preventDefault();
        homeTab.classList.remove("articleH")
        articleTab.classList.add("articleH")
        mealTab.classList.add("mealH")
        homeTab.classList.remove("mealH")
        
    })
    document.getElementById("Meal").addEventListener("click",function(event){
        event.preventDefault();
        mealTab.classList.remove("mealH")
        homeTab.classList.add("mealH");
        articleTab.classList.add("articleH")
    })

    let joinTab=document.getElementById("Join_KindMeal")
    joinTab.addEventListener("click",function(e){
        e.preventDefault();
        document.location.href="signup.html"
        
    })
    

    let imagesLink=[
        "https://www.kindmeal.my/photos/deal/5/590-3137-m.jpg",
    "https://www.kindmeal.my/photos/deal/4/424-1404-m.jpg",
    "https://www.kindmeal.my/photos/deal/6/664-4296-m.jpg"
    ]
    let leftBtn=document.getElementById("left-btn")
    let rightBtn=document.getElementById("right-btn")
    let crouser=document.getElementById("jaja")
    let imageState=0;
    rightBtn.addEventListener("click", function(){
        imageState++;
        if(imageState===imagesLink.length){
            imageState=0;
        }

            jaja.src=imagesLink[imageState];
    
    
    })
    leftBtn.addEventListener("click", function(){
        imageState--;
        if(imageState<0){
            imageState=imagesLink.length-1
        }
        jaja.src=imagesLink[imageState];
    })

    function signupFunc(){
        
        document.location.href="signup.html"
        
    }
    function signinFunc(){
        
        document.location.href="signin.html"
        
    }

    function fac(){
        document.location.href="https://www.facebook.com/"
    }
