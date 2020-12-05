class Api::FollowsController < ApplicationController

    def show
        @user = current_user
        render '/api/users/show'
    end

    def create
        @follow = Follow.new(follow_params)
        @user = current_user
        if @follow.save
            render '/api/users/show'
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.where(user_id: current_user.id, channel_id: params[:id])
        if @follow
            Follow.destroy(@follow.id)
            render '/api/users/show'
        else
            render json: ["Don't know what happened"]
        end
    end

    def follow_params
        params.require(:follow).permit(:channel_id, :user_id)
    end
end
