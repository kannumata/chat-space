$(function(){
  function buildHTML(message){
    var Image = "";

    if ( message.image ){
      Image = `<img src = "${ message.image }", class="lower-message__image">`
    };

      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${ message.name }
                      </div>
                      <div class="upper-message__date">
                        ${ message.data }
                      </div>
                    </div>
                    <div class="lower-meesage">
                      <p class="lower-message__content">
                        ${ message.text }
                      </p>
                      ${ Image }
                    </div>
                  </div>`;
    return html;
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".messages").append(html);
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
      $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight
      });
    })
    .fail(function(){
      alert("error");
    });
  });
});
