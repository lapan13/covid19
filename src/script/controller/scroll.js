import $ from 'jquery';

export function scrollPage() {
    $(document).ready(function () {
        $('.navigation').on('click', function (event) {
            $('.navigation').removeClass('active');
            $(this).addClass('active');
        });
    });
}