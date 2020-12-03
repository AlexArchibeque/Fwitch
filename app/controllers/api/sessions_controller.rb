class Api::SessionsController < ApplicationController

    def create
        if params[:searchData]
            searchData = params[:searchData]
            users = []
            categories = []
            if searchData != ''   
                User.all.each do |user|
                    if user.username.downcase.include?(searchData)
                        users.push(user)
                    end
                end

                Category.all.each do |category|
                    if category.title.downcase.include?(searchData)
                        categories.push(category)
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
