$(".navbar-nav .nav-item a").on("click", function(){
  let $currentActiveNavItem = $(this).parent().parent().find(".active");
  let $newActiveNavItem = $(this).parent();

  changeActiveNavbarLink($currentActiveNavItem, $newActiveNavItem);
  moveSrOnlyCurrentSpan($currentActiveNavItem, $newActiveNavItem);
});


function changeActiveNavbarLink($currentActiveNavItem, $newActiveNavItem) {
  $currentActiveNavItem.removeClass("active");
  $newActiveNavItem.addClass("active");
}


function moveSrOnlyCurrentSpan($currentActiveNavItem, $newActiveNavItem) {
  let $currentActiveNavLink = $currentActiveNavItem.find("a").first();
  let $newActiveNavLink = $newActiveNavItem.find("a").first();
  let $srOnlySpans = $currentActiveNavLink.find(".sr-only");

  $srOnlySpans.each(function() {
    if (this.textContent.indexOf("current") !== -1) {
      $currentActiveNavLink.find($(this)).remove();
      $newActiveNavLink.append(this);
    }
  });
}

