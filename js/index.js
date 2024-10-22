console.log("index.js  1connected")
$(document).ready(function(){
    /* Initialization of variables and other setups*/
    let parentDiv=document.getElementById('parentDiv');
    let flag=true;
    let sidebar=document.getElementById('sidebar');
    // let main_content=document.getElementById('main_content');

    if(window.innerWidth<=800){
        parentDiv.classList.add('grid_parent2');
    }
    else{
        parentDiv.classList.add('grid_parent');
    }

    /*End initialization */

    /* FUNCTIONS */

    let changegrid=function(){
        parentDiv.classList.toggle('grid_parent');
        parentDiv.classList.toggle('grid_parent2');
    
    }
    
    let sm_grid=function(){
        // console.log('i was ran')
        if(window.innerWidth>800){
            if(flag==false && parentDiv.classList.contains('grid_parent2')){
                $('#sidebar').fadeIn(500);
                flag=true;
            }
            changegrid();
        }

    
    }
    
    let hideandSeek=function(){
        if(flag==true){
            $('#sidebar').hide();
            flag=false
        }
        else if(flag==false){
            $('#sidebar').fadeIn(500);
            flag=true;
        }
    }

    /* END FUNCTIONS */


    let ham_onclick=function(e){
        // console.log('nav clicked');
        hideandSeek();
        sm_grid();
    };
    
    /* This adds the callback function to the hamburger icon*/
    $("#hamburger").click(ham_onclick);

    /* MEDIA QUERIES */

    let mediaQuery2 = window.matchMedia('(max-width: 800px)');
    mediaQuery2.addEventListener('change', () => {
        if (mediaQuery2.matches) {
            parentDiv.classList.add('grid_parent2');
            parentDiv.classList.remove('grid_parent');
        }
      });
    
    /* Automatic closing of sidebar when screen width diminishes to small size*/
    let mediaQuery = window.matchMedia('(min-width: 801px)');
    // console.log(mediaQuery)
    mediaQuery.addEventListener('change', () => {
        if (mediaQuery.matches) {
            sm_grid();
        }
      });
       
    /* END MEDIA QUERIES */

    /* Event Listeners*/

    sidebar.addEventListener('click',(e)=>{
        console.log('sidebar clicked');
        e.stopPropagation();
    });
    
    parentDiv.addEventListener('click',(e)=>{
    console.log('parentDiv clicked')
    if((flag==true) && (window.innerWidth<=800) ){
        ham_onclick();
    };
    

})
/* end of document*/


    
    
});