

/**1tab**/
  $('.tab-buttons span').first().addClass('active');
$('.tab-content>div').hide();
$('.tab-content>div').first().slideDown();
  $('.tab-buttons span').click(function(){
    $('.tab-buttons span').removeClass('active');
    var thisclass=$(this).attr('class');
    $(this).addClass('active');
    $('.tab-content>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(800);
      }
      else{
        $(this).hide();
      }
    });
  });

  /**end of 1tab**/


/**2tab**/
  $('.tab-buttonss span').first().addClass('active');
$('.tab-contentt>div').hide();
$('.tab-contentt>div').first().slideDown();
  $('.tab-buttonss span').click(function(){
    $('.tab-buttonss span').removeClass('active');
    var thisclass=$(this).attr('class');
    $(this).addClass('active');
    $('.tab-contentt>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(800);
      }
      else{
        $(this).hide();
      }
    });
  });

  /**end of 1tab**/


  /**3tab**/
  $('.tab-buttonsss span').first().addClass('active');
$('.tab-contenttt>div').hide();
$('.tab-contenttt>div').first().slideDown();
  $('.tab-buttonsss span').click(function(){
    $('.tab-buttonsss span').removeClass('active');
    var thisclass=$(this).attr('class');
    $(this).addClass('active');
    $('.tab-contenttt>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(800);
      }
      else{
        $(this).hide();
      }
    });
  });

  /**end of 3tab**/


/**hide and show**/

$(document).ready(function(){
  $(".addsection").hide();
  $(".buttonshide").click(function(){
    $(".addsection").toggle();
     $(".buttonshide").hide();
  });
});



$(document).ready(function(){
  $(".addbutton0101").hide();
  $(".downbtn").click(function(){
    $(".addbutton0101").toggle();
    $(".downbtn").hide();
  });
});
/**end of hide and show**/

function changeSelect(obj) {
  let ind = obj.selectedIndex;
  if (ind > 0) {
    obj.classList.add('selected');
  } else {
    obj.classList.remove('selected');
  }
}
