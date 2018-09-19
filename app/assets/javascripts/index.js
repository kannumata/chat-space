$(function(){
  var search_list = $("#user_search_result")

  function  appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${ user.id }data-user-name=${ user.name }>追加</a>
                </div>`
    search_list.append(html);
    return html;
  }

  function  appendNoUser(user){
    var html = `<p class="chat-group-user__name">${ user }</p>`
    search_list.append(html);
    return html;
  }

  $("#user-search-field").on("keyup",function(){
    //検索窓に打ち込まれた時に
    var input = $(this).val();
    //inputに文字列を代入
    console.log("成功");
    console.log(input);
    console.log(this);
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      search_list.empty();
      console.log("だん");
      console.log(users);
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }else{
        appendNoUser("一致する名前がありません");
      }
    })
    .fail(function(){
      alert('ユーザーの検索に失敗しました');
    })
  });
});


