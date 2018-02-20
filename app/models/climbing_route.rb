class ClimbingRoute < ApplicationRecord
  belongs_to :area
  has_many :bolts
  has_many :anchors
end
