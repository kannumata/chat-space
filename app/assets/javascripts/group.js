$(function(){


  function  appendProduct(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.data} data-user-name=${user.name}>追加</a>
                </div>`
  }


  function appendNoProduct(user) {
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
      if (products.length !== 0) {
        products.forEach(function(user){
          appendProduct(user);
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  })
});
