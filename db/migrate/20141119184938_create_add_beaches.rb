class CreateAddBeaches < ActiveRecord::Migration
  def change
    create_table :add_beaches do |t|

      t.timestamps
    end
  end
end
