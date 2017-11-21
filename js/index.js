$(document).ready(function () {

            $.LoadingOverlay("show");

            $.when(jQuery.getJSON('')).done(function (data) {
                $.LoadingOverlay("hide");

                var versions = data.versions.split(',');
                versions_urls = eval(JSON.parse(data.versions_urls));

            }).fail(function () {
                $.LoadingOverlay("hide");
            });

            function getData() {
                $.ajax({
                    url: ,
                    type: "GET",
                    async: true,
                    success: function (data) {


                    }
                });
            }

            getData();

});

