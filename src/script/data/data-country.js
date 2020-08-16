import $ from 'jquery';

export function dataCountry() {
    $(document).ready(() => {
        $.ajax({
            type: 'get',
            url: 'https://covid19.mathdro.id/api/countries',
            datatype: 'json',
            success: (result) => {
                $.each(result.countries, (i, country) => {
                    $('#country-list').append(`
                        <option value="` + country.name + `">` + country.name + `</option>
                    `);
                });
            }
        });
        countryChoosen();
    });
}

function countryChoosen() {
    $("#country-list").on("change", function () {
        let name = $(this).val();
        if (name !== null) {
            $.ajax({
                type: 'get',
                url: 'https://covid19.mathdro.id/api/countries/' + name,
                datatype: 'json',
                success: (result) => {
                    $('#country-result').empty();
                    $('#last-update-country').empty();

                    let treated = result.confirmed.value - (result.recovered.value - result.deaths.value);

                    $('#country-result').append(`          
                        <span class="image c">Confirmed : <br><p>` + result.confirmed.value + `</p></span>                    
                        <span class="image t">Treated : <br><p>` + treated + `</p></span>
                        <span class="image r">Recovered : <br><p>` + result.recovered.value + `</p></span>
                        <span class="image d">Death : <br><p>` + result.deaths.value + `</p></span>
                    `);

                    $('#last-update-country').append(`
                        <h6>Last Update : ` + result.lastUpdate + `</h6>
                    `);
                }
            });
        }
    });
}