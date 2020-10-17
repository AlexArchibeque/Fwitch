class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render :index
    end

    def show
        decoded = URI.decode(params[:id])
        @category = Category.find_by(title: decoded )
        render :show
    end
end
