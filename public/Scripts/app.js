/* Custom JavaScript */
// IIFE -- Immediately Invoked Function Expression

/* Orrin Cruz - 300898431 
    February 16, 2019--> */

(function(){
    function Start(){
        console.log(`%c App Started...`, 
        "font-size: 20px; color: blue; font-weight: bold");

        $(".btn-danger").click(function(event){
            if(!confirm("Are you sure?")) {
                event.preventDefault();
                window.location.assign("/contact-list");
            }
        });

        /*
        document.querySelectorAll(".btn-danger").addEventListener("click", () =>{

        }); 
        */
    }

    window.addEventListener("load", Start);
    
})();