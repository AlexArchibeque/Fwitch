json.extract! @clip, :id, :description, :category_id, :channel_id
json.photoUrl url_for(@clip.photo)