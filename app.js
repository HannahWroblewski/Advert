// One
function setActive (sectionNumber) {
    let sctNum = $('.sectionNumber')
    $('.left-nav .active, .content .active').removeClass('active')

    const dataSectionSelector = "[data-section=" + sectionNumber + "]";
    const dataLinkToSelector = "[data-link-to=" + sectionNumber + "]";
    $(dataSectionSelector).addClass('active')
    $(dataLinkToSelector).addClass('active')

}

setActive();

// Two
$('.left-nav a').click(function () {
    let id = $(this).data('link-to')

    setActive(id);
})

