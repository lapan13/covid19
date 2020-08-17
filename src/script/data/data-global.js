import $ from 'jquery';

export function dataSource() {
    $(document).ready(() => {
        $.ajax({
            type: 'get',
            url: 'https://covid19.mathdro.id/api',
            datatype: 'json',
            success: (result) => {

                let treated = result.confirmed.value - (result.recovered.value - result.deaths.value);

                $('#global-result').append(`
                    <span class="image c">Confirmed : <br><p>${result.confirmed.value}</p></span>                    
                    <span class="image t">Treated : <br><p>${treated}</p></span>
                    <span class="image r">Recovered : <br><p>${result.recovered.value}</p></span>
                    <span class="image d">Death : <br><p>${result.deaths.value}</p></span>
                `);

                $('#last-update-global').append(`
                <h6>Last Update : ${result.lastUpdate}</h6>
                `);
            }
        });
    });
}