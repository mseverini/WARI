class Area < ApplicationRecord
  has_many :children, class_name: "Area", foreign_key: "parent_id"
  belongs_to :parent, class_name: "Area"
end
