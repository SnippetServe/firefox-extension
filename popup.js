document.addEventListener("submit", (e)=>{
        let text = document.getElementById("search-title").value;
        window.open("https://getcode.herokuapp.com/?search="+text, '_blank'); 
});
