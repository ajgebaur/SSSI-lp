jQuery.noConflict();
(function($) {
  var docu, diff_h;
  var regex_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
  function col_ul(el){
    if (el.length>0 && el.find('ul').length>1) {
      el.each(function(){
        var tmp_ul = $(this).find('ul');
        var tmp_col = Math.floor(12/tmp_ul.length);
        tmp_ul.addClass('col-sm-'+tmp_col);
        tmp_ul.addClass('col-bs3');
      });
    }    
  }
  function homeheader(){
    if ($('#header-home').length>0) {
      $('#header-home').height('auto');
      if ($(window).width()>767 && $('#header-home').outerHeight()<$(window).height()) {
        $('#header-home').height($(window).height()-parseInt($('#header-home').css('padding-top'))-parseInt($('#header-home').css('padding-bottom')))
      }
    }
  }
  
  
  
  
  $(document).ready(function(){
    $("body").addClass('js');
    docu = $('html, body');
    homeheader();
    diff_h = $('#menu').outerHeight();
    $('a').each(function(){
      if ($(this).attr('href')!=undefined) {
        var this_link = $(this).attr('href');
        if (this_link.slice(0,1)=="#") {
          var link_div = this_link.slice(1);
          if (link_div!="" && $('#'+link_div).length>0 && !$('#'+link_div).hasClass('tab-pane') && !$(this).hasClass('popup')) {
            $(this).click(function(ev){
              ev.preventDefault();
              var link_pos = $('#'+link_div).offset();
              docu.stop().animate({scrollTop:link_pos.top-diff_h}, 500);
            });
          }
        }
      }      
    });
    $('#gototop').click(function(){
      docu.stop().animate({scrollTop:0}, 500);
    });    
    col_ul($('.class-prices #content-bottom .tabs .in-content'));
    col_ul($('.class-features .items-leading .item-content'));
    if ($('.aitonic_contact_form').length>0) {
      $('.aitonic_contact_form textarea, .aitonic_contact_form input').each(function(){
        var tmp_el = $(this);
        tmp_el.focus(function(){
          if (tmp_el.val()==tmp_el.attr('placeholder')) tmp_el.val('');
        });
        tmp_el.blur(function(){
          if (tmp_el.val()=="") tmp_el.val(tmp_el.attr('placeholder'));
        });
      });
      $('.aitonic_contact_form').submit(function(){
        $('.aitonic_contact_form .has-error').removeClass('has-error');
        var err=0;
        $('.aitonic_contact_form .required').each(function(){
          var tmp_el = $(this);
          var tmp_val = tmp_el.val();
          if (tmp_val=="" || (tmp_el.attr('placeholder')!=undefined && tmp_val==tmp_el.attr('placeholder')) || (tmp_el.hasClass('email') && !regex_email.test($(this).val()))) {
            tmp_el.parent().addClass('has-error');
            err++;
          }
        });
        if (err>0) return false;
        else return true;
      });
    }
    if ($('a.popup').length>0) {
      var modal_box = $('#modal');
      var modal_content = $('#modal .modal-body');
      $('a.popup').each(function(){
        var tmp_popup = $(this);
        var tmp_link = tmp_popup.attr('href');
        if (tmp_link.slice(0,1)!="#") {
          if (tmp_link.indexOf("tmpl=modal")<0) {
            var tmp_i = "?";
            if (tmp_link.indexOf("?")>0) tmp_i = "&";
            tmp_link = tmp_link+tmp_i+"tmpl=modal";
          }
          tmp_popup.click(function(ev){
            ev.preventDefault();
            modal_box.addClass('loading-text');
            modal_content.empty().load(tmp_link,function(){
              modal_box.removeClass('loading-text');
            });
            modal_box.modal('show');
          });
        } else tmp_popup.attr('data-toggle','modal');
      });
    }
  });
  $(window).scroll(function(){
    if ($(window).scrollTop()>50) $('body').addClass('scrolled');
    else $('body').removeClass('scrolled');
  });
  $(window).resize(function(){
    homeheader();
  });
  $(window).load(function(){
    var loc_hash = location.hash;    
    if (loc_hash.length>0 && loc_hash.slice(0,1)=="#") {
      loc_hash = loc_hash.slice(1);
      if($('#'+loc_hash).length>0) {
        var tmp_link_pos = $('#'+loc_hash).offset();
        docu.stop().scrollTop(tmp_link_pos.top-diff_h);
      }      
    }
  });
})(jQuery);
