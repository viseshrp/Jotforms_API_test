$(document).ready(function () {
    $('body').bootstrapMaterialDesign();

    $.LoadingOverlay("show");

    JF.initialize( {apiKey: "7d7ba832de08daf7ed84f989d65eefc9"} );

    JF.getSubmissions(function(response){

        if(response!==null) {
            $.LoadingOverlay("hide");
                 var j=0;
                for(var i=0; i<2; i++){
                    var answers_dict = response[i]['answers'];
                    
                    for (var key in answers_dict){
                        if (answers_dict.hasOwnProperty(key)) {
                        // console.log(answers_dict[key])           
                            $('#main-cont').append("<div class='card' id='maincard_"+j+"'><div class='card-body'><p class='card-text'><strong>Name:</strong>&nbsp;&nbsp;<span class='searchcontent' id='cardcontent_"+j+"'>"+answers_dict[key]['name']+"</span></p><p class='card-text'><strong>Text:</strong>&nbsp;&nbsp;"+answers_dict[key]['text']+"</p><p class='card-text'><strong>Type:</strong>&nbsp;&nbsp;"+answers_dict[key]['type']+"</p></div></div><br>");
                        }
                        j++;
                    }
                }

            }    
        });


        //SEARCH
    $('#dash_search').on('input', function () {
        var filter = $(this).val();

        $('.searchcontent').each(function () {

            var div_id = $(this).attr('id').split("content_")[1];

            if ($(this).text().search(new RegExp(filter, "gi")) < 0) {
                $('#maincard_' + div_id).hide();
            } else {
                $('#maincard_' + div_id).show();
                // console.log(div_id);
            }
        });
    });


});

