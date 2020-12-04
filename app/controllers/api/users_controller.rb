require 'open-uri'
class Api::UsersController < ApplicationController

    def index 
        @users = User.all
        render :index
        # No index yet
    end

    def create
        @user = User.new(user_params)

        if @user.save
            defaultCategory = Category.find_by(title:"Just Chatting")
            defaultPic = open("https://fwitch-seeds.s3-us-west-1.amazonaws.com/ChannelPics/F-Logo.png")
            chan = Channel.create!(name:@user.username, owner_id: @user.id, category_id: defaultCategory.id)
            chan.channel_pic.attach(io: defaultPic, filename:'default.png')
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find_by()
    end

    def destroy
        # Soon to be destroy user/Delete account

    end

    def user_params
        params.require(:user).permit(:username,:email,:password)
    end

end
