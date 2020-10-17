json.extract! @category, :id, :title, :description
json.photoUrl url_for(@category.photo)