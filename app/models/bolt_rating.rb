class BoltRating < ApplicationRecord
  belongs_to :user
  belongs_to :bolt
end
