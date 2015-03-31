var site = {};


site.ready = function() {

  var
    $stripe       = $('.stripe'),
    $menuItem     = $('.fixed .menu a.item'),
    $problemGrid  = $('.problem .grid .column'),
    $solutionGrid = $('.solution .grid .column, .solution .items .item'),
    slideOffset   = 200,
    handler
  ;

  handler = {
    setActiveSlide: function() {
      var
        index = $('.stripe').index($(this))
      ;
      $menuItem
        .removeClass('active')
        .eq(index)
          .addClass('active')
      ;
      if( $(this).hasClass('problem') && !$problemGrid.filter('.visible, .animating').length > 0) {
        $problemGrid
          .eq(0)
          .transition('fly down in', 1500, function() {
            $problemGrid
              .slice(1)
              .transition({
                animation : 'scale in',
                interval  : 200
              })
            ;
          })
        ;
      }
      if( $(this).hasClass('solution') && !$solutionGrid.filter('.visible, .animating').length > 0) {
        $solutionGrid
          .eq(0)
          .transition('fly down in', 1500, function() {
            $solutionGrid
              .slice(1)
              .transition({
                animation : 'scale in',
                interval  : 200
              })
            ;
          })
        ;
      }
    }
  };

  $('.me.segment .three img')
    .popup()
  ;

  $menuItem
    .on('click', function() {
      var
        index = $menuItem.index($(this)),
        scroll = $stripe.eq(index).offset().top
      ;
      $(document).scrollTop(scroll);
    })
  ;

  $('body')
    .visibility({
      once: false,
      offset: -1,
      onTopPassed: function() {
        $('.fixed .segment').removeClass('basic').addClass('raised');
        //$('.fixed .menu').addClass('inverted');
      },
      onTopPassedReverse: function() {
        $('.fixed .segment').addClass('basic').removeClass('inverted');
        //$('.fixed .menu').removeClass('inverted');
      }
    })
  ;

  $stripe
    .visibility({
      offset: slideOffset,
      once: false,
      onTopPassed: handler.setActiveSlide,
      onBottomPassedReverse: handler.setActiveSlide
    })
  ;

  $('.example .menu:not(.accordion) .item')
    .on('click', function() {
      $(this)
        .addClass('active')
        .siblings()
          .removeClass('active')
      ;
    })
  ;

  $('.ui.dropdown')
    .dropdown()
  ;
  $('.ui.checkbox')
    .checkbox()
  ;
  $('.ui.accordion')
    .accordion()
  ;

  $('.ui.progress')
    .progress()
  ;

};

$(document)
  .ready(site.ready)
;