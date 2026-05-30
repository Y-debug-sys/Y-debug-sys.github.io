(function ($) {

    new WOW().init();
    
    $(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });

    jQuery(window).load(function() {
        jQuery("#preloader").delay(100).fadeOut("slow");
        jQuery("#load").delay(100).fadeOut("slow");
    });


    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 500, 'easeOutExpo');
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (width < 768) {
                $('.navbar-toggle').click();
            }
            event.preventDefault();
        });
    });

    // Toggle publication abstract/details
    $(document).on('click', '.publication', function(e) {
        // Don't toggle when clicking links or tags
        if ($(e.target).closest('a, .tag').length) return;
        var $this = $(this);
        var $details = $this.next('.pub-details');
        $this.toggleClass('expanded');
        $details.toggleClass('show');

        if ($details.hasClass('show')) {
            var $img = $details.find('.pub-img img');
            if ($img.length && $img[0].complete) {
                $details.find('.pub-abstract').css('max-height', $img.height() + 'px');
            } else if ($img.length) {
                $img.one('load', function() {
                    $details.find('.pub-abstract').css('max-height', $(this).height() + 'px');
                });
            }
            // Also listen for window resize to keep sync
            $(window).on('resize.pubDetails', function() {
                var $i = $details.find('.pub-img img');
                if ($i.length && $details.hasClass('show')) {
                    $details.find('.pub-abstract').css('max-height', $i.height() + 'px');
                }
            });
        } else {
            $details.find('.pub-abstract').css('max-height', '');
            $(window).off('resize.pubDetails');
        }
    });

})(jQuery);
