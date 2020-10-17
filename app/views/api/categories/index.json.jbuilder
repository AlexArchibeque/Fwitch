@categories.each do |category|
    json.set! category.title do 
        json.extract! category, :id, :title, :description
        json.photoUrl url_for(category.photo)
    end
end