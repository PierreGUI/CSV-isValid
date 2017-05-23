class Checkout < ApplicationRecord
  belongs_to :checkout

  validates :id, presence: true, allow_blank: false
end
