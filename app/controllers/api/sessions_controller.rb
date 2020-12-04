class Api::SessionsController < ApplicationController

    def create
        if params[:searchData]
            searchData = params[:searchData]
            users = []
            categories = []
            if searchData != ''   
                Channel.all.each do |channel|
                    if channel.user.username.downcase.include?(searchData)
                        json = channel.as_json
                        json["username"] = channel.user.username
                        json["pictureUrl"] = url_for(channel.channel_pic)
                        users.push(json)
                    end
                end

                Category.all.each do |category|
                    if category.title.downcase.include?(searchData)
                        json = category.as_json
                        json["pictureUrl"] = url_for(category.photo)
                        categories.push(json)
                    end
                end
            end
                
            render json: [users, categories], status: 200
        else
            @user = User.find_by_credentials(
                params[:user][:username],
                params[:user][:password]
            )
            if @user
                login!(@user)
                render 'api/users/show'; 
            else
                render json: ['Invalid Username or Password'], status: 401
            end
        end
    end

    def destroy
        logout!
        render json: { message: 'Logout Successful' }
    end

end
