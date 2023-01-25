/*                                                                                              
                                                                                                                    
                                                            dddddddd                                                
        CCCCCCCCCCCCC                                       d::::::d       iiii       lllllll                       
     CCC::::::::::::C                                       d::::::d      i::::i      l:::::l                       
   CC:::::::::::::::C                                       d::::::d       iiii       l:::::l                       
  C:::::CCCCCCCC::::C                                       d:::::d                   l:::::l                       
 C:::::C       CCCCCC        ooooooooooo            ddddddddd:::::d      iiiiiii       l::::l         ooooooooooo   
C:::::C                    oo:::::::::::oo        dd::::::::::::::d      i:::::i       l::::l       oo:::::::::::oo 
C:::::C                   o:::::::::::::::o      d::::::::::::::::d       i::::i       l::::l      o:::::::::::::::o
C:::::C                   o:::::ooooo:::::o     d:::::::ddddd:::::d       i::::i       l::::l      o:::::ooooo:::::o
C:::::C                   o::::o     o::::o     d::::::d    d:::::d       i::::i       l::::l      o::::o     o::::o
C:::::C                   o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
C:::::C                   o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
 C:::::C       CCCCCC     o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
  C:::::CCCCCCCC::::C     o:::::ooooo:::::o     d::::::ddddd::::::dd     i::::::i     l::::::l     o:::::ooooo:::::o
   CC:::::::::::::::C     o:::::::::::::::o      d:::::::::::::::::d     i::::::i     l::::::l     o:::::::::::::::o
     CCC::::::::::::C      oo:::::::::::oo        d:::::::::ddd::::d     i::::::i     l::::::l      oo:::::::::::oo 
        CCCCCCCCCCCCC        ooooooooooo           ddddddddd   ddddd     iiiiiiii     llllllll        ooooooooooo
*/

let xPos = 0;
var count = 1;
gsap.timeline()
    .set('.ring', { rotationY:180, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
    .set('.img',  { // apply transform rotations to each image
      rotateY: (i)=> i*-36,
      transformOrigin: '50% 50% 500px',
      z: -500,
      background:(i)=>"url(assets/images/"+(count++)+".jpg)",
      backgroundPosition:(i)=>getBgPos(i),
      backfaceVisibility:'hidden',
      backgroundSize : 'cover;'
    })    
    .from('.img', {
      duration:1.5,
      y:200,
      opacity:0,
      stagger:0.1,
      ease:'expo'
    })
    .add(()=>{
      $('.img').on('mouseenter', (e)=>{
        let current = e.currentTarget;
        gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
      })
      $('.img').on('mouseleave', (e)=>{
        gsap.to('.img', {opacity:1, ease:'power2.inOut'})
      })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);
      

function dragStart(e){ 
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set('.ring', {cursor:'grabbing'})
  $(window).on('mousemove touchmove', drag);
}


function drag(e){
  if (e.touches) e.clientX = e.touches[0].clientX;    

  gsap.to('.ring', {
    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
    onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
  });
  
  xPos = Math.round(e.clientX);
}


function dragEnd(e){
  $(window).off('mousemove touchmove', drag);
  gsap.set('.ring', {cursor:'grab'});
}


function getBgPos(i){ //returns the background-position string to create parallax movement in each image
  return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
}

/* 

   ____   U  ___ u  ____              _       U  ___ u 
U /"___|   \/"_ \/ |  _"\    ___     |"|       \/"_ \/ 
\| | u     | | | |/| | | |  |_"_|  U | | u     | | | | 
 | |/__.-,_| |_| |U| |_| |\  | |    \| |/__.-,_| |_| | 
  \____|\_)-\___/  |____/ uU/| |\u   |_____|\_)-\___/  
 _// \\      \\     |||_.-,_|___|_,-.//  \\      \\    
(__)(__)    (__)   (__)_)\_)-' '-(_/(_")("_)    (__)

*/