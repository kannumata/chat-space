json.array! @users do |user|
  json.name      user.name
  json.data      user.id
end
