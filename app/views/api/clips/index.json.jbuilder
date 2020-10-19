@clips.each do |clip|
    json.set! clip.id do 
        json.extract! clip, :id, :description, :category_id, :channel_id
        json.videoUrl url_for(clip.video)
    end
end