import $ from 'jquery';

export function scrollPage() {
    $(document).ready(function () {
        $('.navigation').on('click', function (event) {
            $('.navigation').removeClass('active');
            $(this).addClass('active');
            // let attHref = $(this).attr('href');
            // let attHrefOfset = $(attHref).offset().top;
            // $('html,body').animate({
            //     scrollTop: attHrefOfset
            // });
            // event.preventDefault();
        });
    });

    // $(window).scroll(function () {
    //     let thisOfs;
    //     let ActiveID;
    //     $('.section').each(function () {
    //         let sectionRowTop = $(this).offset().top;
    //         if ($(document).scrollTop() > sectionRowTop) {
    //             thisOfs = $(this).attr('id');
    //             $('.section').removeClass('active');
    //             ActiveID = $(this).addClass('active');
    //         }
    //     });

    //     $('#sidebar').each(function (i, el) {
    //         let thisChildren = $(this).children('a');
    //         let thisChildrenHref = $(this).children('a').attr('href');
    //         if (thisChildrenHref === '#' + ActiveID) {
    //             $('.navigation').removeClass('active');
    //             $(thisChildren).addClass('active');
    //         }
    //     })
    // })
}