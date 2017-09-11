        // zipInput is the requested zip, we default the radius to 10 miles
        var zipInput = "08873";
        var zipArray = [];
        var zipResponse = false;

        if (zipInput === "") {
            zipInput = "08873";
        }

        console.log(zipInput.length);
        if (zipInput.length === 5) {
            // zipcodeapi.com   -   zip code api
            var request = "https://www.zipcodeapi.com/rest/" +
                "js-wAyUdNRpP6Np73vS03R6gNZ4yl9v22jyDStRFlgvr4Uz7qs8tkeK7eOGzYcC1vbE/" +
                "radius.json/" + zipInput + "/10/mile";
            console.log(request);
            console.log(zipInput);
            $.ajax({
                url: request,
                method: "GET"
            }).done(function (response) {
                if (response.zip_codes.length === 0) {
                    alert("failed zip lookup");
                    zipResponse = false;
                } else {
                    zipResponse = true;
                    console.log(response);
                    for (i = 0; i < response.zip_codes.length; i++) {
                        zipArray[i] = response.zip_codes[i].zip_code;
                    }
                }
            });
        }
        if (zipResponse === false || zipInput.length != 5) {
            //search itemName, itemDesc, itemTags
        }
