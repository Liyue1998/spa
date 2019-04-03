$(function(){
    var $img=$('img');
    var $inp=$('input');
    $img.mouseover(()=>{
      $inp.attr("type","text");
      $img.attr("src","open.png");
                  
    });
    $img.mouseout(()=>{
      $inp.attr('type',"password");
      $img.attr('src',"close.png");
                  
    })
    console.log('hello world');

});
