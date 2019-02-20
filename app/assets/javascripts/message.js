$(document).on('turbolinks:load', function() {

  function buildHTML(message){
    var Image = '';

    if ( message.image ){
      Image = `<img src = "${ message.image.url }", class="lower-message__image">`
    };

      var html = `<div class='message' message_id="${message.id}">
                    <div class='upper-message'>
                      <div class='upper-message__user-name'>
                        ${ message.name }
                      </div>
                      <div class='upper-message__date'>
                        ${ message.date }
                      </div>
                    </div>
                    <div class='lower-meesage'>
                      <p class='lower-message__content'>
                        ${ message.text }
                      </p>
                      ${ Image }
                    </div>
                  </div>`;
    return html;
  }

  function Scroll(){
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    console.log(url);
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.form__message').val("");
      $('.form__submit').prop('disabled', false);
      $('.messages').append(html);
      Scroll()
    })
    .fail(function(){
      alert('error');
    })
  });

    var group_id  = $('.left-header__title').attr('group_id');
    setInterval(function(){
      if (window.location.pathname == `/groups/${group_id}/messages`) {
      var latest_id = $('.message').last().attr('message-id')
      var data = {id: latest_id}
      $.ajax({
        type: 'GET',
        url: location.href,
        data: data,
        dataType: 'json'
      })
      .done(function(messages){
        messages.forEach(function(message){
        var html = buildHTML(message);
        $('.messages').append(html);
        Scroll()
        })
      })
      .fail(function(){
        alert("自動更新に失敗しました");
      })
    }
  }, 5000);


});
