<script>
    $(document).ready(function() {
        // Overflow-y auto for modal body
        $('#myModal').on('show.bs.modal', function(e) {
            $(this).find('.modal-body').css('overflow-y', 'auto');
        });

        // Geolocation for location modal
        $('#locationModal').on('show.bs.modal', function(e) {
            // Check if geolocation is available
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    // Get the coordinates
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    // Set the value of the GPS coordinates input
                    $('#gpsCoordinates').val(latitude + ', ' + longitude);
                }, function(error) {
                    console.error("Error Code = " + error.code + " - " + error.message);
                    $('#gpsCoordinates').val('Unable to retrieve location');
                });
            } else {
                console.error("Geolocation is not supported by this browser.");
                $('#gpsCoordinates').val('Geolocation not supported');
            }
        });

        // Heart animation
        $(".heart").on("click", function() {
            $(this).toggleClass("is-active");
        });
    });
</script>
