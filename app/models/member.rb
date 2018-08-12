class Member < ApplicationRecord
  t.references :user,  null: false, foreign_key: true
  t.references :group, null: false, foreign_key: true

  belongs_to :group
  belongs_to :user
end
