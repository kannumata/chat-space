json.id         @message.id
json.image      @message.image.url
json.name       @message.user.name
json.date       @message.created_at.to_formatted_s(:datetime)
json.text       @message.body
