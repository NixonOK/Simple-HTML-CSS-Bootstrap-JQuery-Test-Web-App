
$(document).ready(function() {
    $("#top-navbar").sticky({
        topSpacing: 0
    });
});

var $rot = $('.go-round-yo');
var $win = $(window);

$win.on('scroll', function() {
    var top = $win.scrollTop();
    $rot.css('transform', 'rotate(' + top + 'deg)');
});

$('#bar1').barfiller({
    // color of bar
    barColor: '#0F283E',
    // shows a tooltip
    tooltip: true,
    // duration in ms
    duration: 1000,
    // re-animate on resize
    animateOnResize: true,
    // custom symbol
    symbol: "%"
});

$('#bar2').barfiller({
    // color of bar
    barColor: '#0F283E',
    // shows a tooltip
    tooltip: true,
    // duration in ms
    duration: 1000,
    // re-animate on resize
    animateOnResize: true,
    // custom symbol
    symbol: "%"
});

$('#bar3').barfiller({
    // color of bar
    barColor: '#0F283E',
    // shows a tooltip
    tooltip: true,
    // duration in ms
    duration: 1000,
    // re-animate on resize
    animateOnResize: true,
    // custom symbol
    symbol: "%"
});

$('#bar4').barfiller({
    // color of bar
    barColor: '#0F283E',
    // shows a tooltip
    tooltip: true,
    // duration in ms
    duration: 1000,
    // re-animate on resize
    animateOnResize: true,
    // custom symbol
    symbol: "%"
});

$('#bar5').barfiller({
    // color of bar
    barColor: '#0F283E',
    // shows a tooltip
    tooltip: true,
    // duration in ms
    duration: 1000,
    // re-animate on resize
    animateOnResize: true,
    // custom symbol
    symbol: "%"
});

$(document).ready(function() {
    $('.product-collumn').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.product-item',
        percentPosition: true,
    })

    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.product-collumn').isotope({
            filter: filterValue
        });
    });
});

$(document).ready(function() {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})

$(document).ready(function() {
    var progressbar = $('#progress_bar');
    max = progressbar.attr('max');
    time = (1000 / max) * 5;
    value = progressbar.val();

    var loading = function() {
        value += 1;
        addValue = progressbar.val(value);

        $('.progress-value').html(value + '%');
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100;
        if (value > 50) {
            $ppc.addClass('gt-50');
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
        $('.ppc-percents span').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };


    var animate = setInterval(function() {
        loading();
    }, time);
});