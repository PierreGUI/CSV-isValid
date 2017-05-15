class Checkout < ApplicationRecord
  validates :name,  presence: true
  validates :email, presence: true
  validates :phone, presence: true, allow_blank: false
end
