$(document).ready(function () {
    $('body').bootstrapMaterialDesign();


    JF.initialize( {apiKey: "7d7ba832de08daf7ed84f989d65eefc9"} );

    JF.getSubmissions(function(response){
     
            for(var i=0; i<response.length; i++){
                var answers_dict = response[i]['answers'];
                for (var key in answers_dict){
                    if (answers_dict.hasOwnProperty(key)) {
                    console.log(answers_dict[key])           
                        $('#main-cont').append("<div class='card' id='card'><div class='card-body'><h4 class='card-title'>"+answers_dict[key]['name']+"</h4><p class='card-text'>"+""+"</p></div></div><br>");
                    }
                }
            }    
        });

});

