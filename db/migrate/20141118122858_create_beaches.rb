class CreateBeaches < ActiveRecord::Migration
  def change
    create_table :beaches do |t|
      t.string :name
      t.string :short_description
      t.text :long_description
      t.text :whatsee
      t.text :whatdo
      t.text :activities
      t.text :restaurants
      t.text :nightlife
      t.string :img
      t.timestamps
    end
  end
end
