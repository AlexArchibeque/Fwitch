class Api::ClipsController < ApplicationController

    def index     
        if(params[:category_id]) 
            @category = Category.find_by(title: params[:category_id])
            @all_clips = Clip.where(category_id: @category.id)
            render :show_category
        elsif(params[:channel_id])
            @channel = Channel.find_by(name: params[:channel_id])
            @all_clips = Clip.where(channel_id: @channel.id)
            if(@all_clips.length == 0)
                render json: ["No Clips found"]
            else
            render :show_user 
            end
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
