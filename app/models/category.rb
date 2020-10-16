# == Schema Information
#
# Table name: categories
#
#  id          :bigint           not null, primary key
#  description :text
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Category < ApplicationRecord
    validates :title, presence: true

    has_one_attached :photo
end
