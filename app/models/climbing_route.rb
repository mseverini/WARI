class ClimbingRoute < ApplicationRecord
  belongs_to :area
  has_many :bolts
end
