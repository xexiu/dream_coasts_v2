# == Schema Information
#
# Table name: beaches
#
#  id                :integer          not null, primary key
#  name              :string(255)
#  short_description :string(255)
#  long_description  :text
#  img               :string(255)
#  created_at        :datetime
#  updated_at        :datetime
#

class Beach < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :short_description, presence: true
  validates :long_description, presence: true, length: { maximum: 500 }
  validates :img, presence: true

  def to_param
  "#{name}".parameterize
  end

end
