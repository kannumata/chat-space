class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members
  has_many :messages
  validates :name, presence: true

  def show_last_message
    if (last_message = messages.last).present?
      if last_message.body?
       last_message.body
      else
        '画像が投稿されています'
      end
    else
      'まだメッセージがありません'
    end
  end
end
