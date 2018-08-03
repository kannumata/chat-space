# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true|
|mail|string|null: false, unique: true

### Association
- has_many :messages
- has_many :members
- has_many :groups, through :members



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group

