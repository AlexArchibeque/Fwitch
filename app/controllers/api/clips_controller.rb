class Api::ClipsController < ApplicationController

    def create
        category = Category.find_by(title: params[:category])
        channel = Channel.find_by(name: current_user.username.downcase)
        @clip = Clip.new(description: params[:description],
        video: params[:video], category_id: category.id,
        channel_id: channel.id)

        if @clip.save!
            @user = current_user
            render 'api/users/show'
        else
            render @clip.errors.full_messages, status: 401
        end
    end

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
