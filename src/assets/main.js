import * as $ from 'jquery';

(function($: any) {
    "use strict";

    const fullHeight = (): void => {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(() => {
            $('.js-fullheight').css('height', $(window).height());
        });
    };

    fullHeight();

    $('#sidebarCollapse').on('click', () => {
        $('#sidebar').toggleClass('active');
    });
})(jQuery);
