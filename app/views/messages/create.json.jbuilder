  json.image      @message.image.url
  json.name       @message.user.name
  json.data       @message.zcreated_at.to_formatted_s(:datetime)
  json.id         @message.id
  json.text       @message.body
