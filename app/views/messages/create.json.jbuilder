json.id         @message.id
json.text       @message.body
json.image      @message.image.url
json.data       @message.created_at.strftime('%Y/%m/%d %H:%M:%S')
json.name       @message.user.name
