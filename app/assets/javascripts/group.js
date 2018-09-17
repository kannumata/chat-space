$(function(){

  var search_list = $(".chat-group-form")

  function  appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.data}data-user-name=${user.name}>追加</a>
                </div>`
    search_list.append(html);
  }

  function  appendNoUser(user){
    var html = `<p class="chat-group-user__name">${user}</p>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup",function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/user/index',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
    })else{
          appendNoUser("一致する名前がありません")
        }
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });
});


