class Api::ClipsController < ApplicationController

    def index      
        if(params[:category_id]) 
            @category = Category.find_by(title: params[:category_id])
            @all_clips = Clip.where(category_id: @category.id)
            render :show_category
        else  
            @clips = Clip.all
            render :index
        end

    end

    def show   
        @clip = Clip.find_by(id: params[:id])
        render :show
    end
end
