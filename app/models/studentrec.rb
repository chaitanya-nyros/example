class Studentrec < ActiveRecord::Base
  has_attached_file :image
  attr_accessible :address, :gender, :group, :name, :image, :birthday
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  validates_attachment_file_name :image, :matches => [/png\Z/, /jpe?g\Z/, /gif\Z/]
  attr_accessible :title, :description, :price, :quantity, :vat, :total_price, :pid
  validates :name, :presence => 'true'
  validates :address, :presence => 'true'
  validates :birthday, :presence => 'true'
 
  validates :gender, :presence => 'true'
end
