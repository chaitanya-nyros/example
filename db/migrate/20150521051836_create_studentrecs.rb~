class CreateStudentrecs < ActiveRecord::Migration
  def change
    create_table :studentrecs do |t|
	t.string   "name"
    t.string   "address"
    t.string   "gender"
    t.string   "group"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.date     "birthday"
      t.timestamps
    end
  end
end
