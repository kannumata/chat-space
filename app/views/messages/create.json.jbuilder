  json.image      @message.image.url
  json.name       @message.user.name
  json.data       @message.created_at.strftime('%Y/%m/%d %H:%M:%S')
  json.id         @message.id
  json.text       @message.body
