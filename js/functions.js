function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}
if (isTouchDevice() === true) {
    //alert('Touch Device'); //your logic for touch device here
    $('#portfolio-index').addClass('touch');
} else {
    //alert('Not a Touch Device'); //your logic for non touch device here
    $('#portfolio-index').addClass('project-grid');
}


if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
   alert("Oops, this is embarrassing! My website currently does not look its best when viewed with Safari. It's a problem I'm aware of, and I'm working on fixing it. You can still proceed, but I recommend using Chrome instead for now.");          
}
