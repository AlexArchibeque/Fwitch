class Api::FollowsController < ApplicationController


    def create
        @follow = Follow.new(follow_params)

        if @follow.save
            render json: ["Successfully followed!"], status 200
        else
            rend json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.where(user_id: current_user.id, channel_id: params[:id])
        if @follow
            Follow.destroy(@follow.id)
            render json: ["Successfully Destoryed!"], status 200
        else
            render json: ["Don't know what happened"]
        end
    end

    def show

    end

    def follow_params
        params.require(:follow).permit(:channel_id, :user_id)
    end
end
