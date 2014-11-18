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

require 'test_helper'

class BeachTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
