class Area < ApplicationRecord
  has_many :children, class_name: "Area", foreign_key: "parent_id"
  has_many :climbing_routes, class_name: "ClimbingRoute", foreign_key: "area_id"
  belongs_to :parent, class_name: "Area"
end
