console.log("index.js  1connected")

let parentDiv=document.getElementById('parentDiv');

let changegrid=function(){
    parentDiv.classList.toggle('grid_parent');
    parentDiv.classList.toggle('grid_parent2');

}

$(document).ready(function(){
    console.log('document ready2');
    let flag=true

    let ham_onclick=function(e){
        console.log('nav clicked');
        if(flag==true){
            $('#sidebar').hide();
            flag=false
        }
        else if(flag==false){
            $('#sidebar').fadeIn(500);
            flag=true;
        }
        
        changegrid();    

    };

    $("#hamburger").click(ham_onclick);


    /* Automatic closing of sidebar when screen width diminishes to small size*/
    let mediaQuery = window.matchMedia('(max-width: 800px)');
    console.log(mediaQuery)
    mediaQuery.addEventListener('change', () => {
        if (mediaQuery.matches) {
            if(flag==false){
                /* do nothing */
            }
            else{
                ham_onclick();
            }
            
        }
      });

    mediaQuery2 = window.matchMedia('(min-width: 1102px)');
      console.log(mediaQuery2)
      mediaQuery2.addEventListener('change', () => {
          if (mediaQuery2.matches) {
            if(flag==true){
                /*
                screen sm with visible sidebar
                to large
                */
            }
            else{
                ham_onclick();
            }   
          }
        });
  
    
       
       parentDiv.addEventListener('click',(e)=>{
        console.log('clicked')
        ham_onclick();
       })
    /* end of document*/
});

