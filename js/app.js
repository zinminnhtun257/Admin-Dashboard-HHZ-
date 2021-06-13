$(".show-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft:"0"});
});

$(".hide-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft:"-100%"});
});

function go(url){
    setTimeout(function(){
        location.href =`${url}`;
    },500);
};

$(".full-screen-btn").click(function () {
    $(this).closest(".card").toggleClass("full-screen-card").find(".a").toggleClass("feather-maximize-2").toggleClass("feather-minimize-2");
});

$(document).ready(function() {
    $('#list').DataTable();
} );






