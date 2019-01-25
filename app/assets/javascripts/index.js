$(function(){
  var search_list = $('#user-search-result');

  function appendUser(user){
    var html = `<div class='chat-group-user clearfix'>
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class='user-search-add chat-group-user__btn chat-group-user__btn--add' data-user-id=${ user.id } data-user-name=${ user.name }>追加</a>
               </div>`;
    search_list.append(html);
  }

  function  appendNoUser(user){
    var html = `<p class="chat-group-user__name">${ user }</p>`
    search_list.append(html);
  }

  function appendUsertoGroup(user_id, user_name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${ user_id }'>
                  <p class='chat-group-user__name'>${ user_name }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    $('#chat-group-users').append(html);
  }

  $('#user-search-field').on('keyup',function(){
    //検索窓に打ち込まれた時に
    var input = $(this).val();
    //inputに文字列を代入
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      search_list.empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }else{
        appendNoUser('一致する名前がありません');
      }
    })
    .fail(function(){
      alert('ユーザーの検索に失敗しました');
    })
  });
  $("#user-search-result").on('click', '.user-search-add', function(){
    var user_id = $(this).attr('data-user-id');
    var user_name = $(this).attr('data-user-name');
    appendUsertoGroup(user_id, user_name);
    $(this).parent().remove();
    $('#user-search-field').val('');
  })
  $('#chat-group-users').on('click', '.user-search-remove', function() {
     $(this).parent().remove();
  });
});
