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

"use strict";
$(document).ready(() => {
    $('#email').hide();
    $('#message').hide();
    setTimeout(() => {
        //Reset after animation
        $('.letter').removeClass('animate');
        $('#email').fadeIn(500);
        $('#message').fadeIn(500);
        //Event on send email
        $('#sendEmail').on('click', () => {
            $('.letter').addClass('animate');
            $('#email').fadeOut(500);
            $('#message').fadeOut(500);
            $('#sendEmail')
                .addClass('animate')
                .val('...');
            setTimeout(() => {
                $('#sendEmail')
                    .val('تمام')
                    .removeAttr('id');
            }, 2000);
        });
    }, 1000);
});

/* 

   ____   U  ___ u  ____              _       U  ___ u 
U /"___|   \/"_ \/ |  _"\    ___     |"|       \/"_ \/ 
\| | u     | | | |/| | | |  |_"_|  U | | u     | | | | 
 | |/__.-,_| |_| |U| |_| |\  | |    \| |/__.-,_| |_| | 
  \____|\_)-\___/  |____/ uU/| |\u   |_____|\_)-\___/  
 _// \\      \\     |||_.-,_|___|_,-.//  \\      \\    
(__)(__)    (__)   (__)_)\_)-' '-(_/(_")("_)    (__)

*/