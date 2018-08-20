class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  has_many :groups

  validates :body, presence: true, unless: :image?
end
