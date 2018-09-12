$(function(){
  function buildHTML(data){
    var Image = '';

    if (massage.image) {
      Image = `<img src = ${message.image} class = "lower-message__image">`
    }

    var html = `<div class="message" data-message-id=${ message.id }>
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
                        $ { Image }
                  </div>
                </div>`;
      return html;
    }
  $(".form_message").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData($(this);
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    });
    .done(function(data) {
      var html = buildHTML(data);
      $('.message').append(html);
    })
    .fail(function(){
      alert('error');
    });
  });
});
