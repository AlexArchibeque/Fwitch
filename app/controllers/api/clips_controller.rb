class Api::ClipsController < ApplicationController

    def index
        @clips = Clip.all
        render :index
    end

    def show
        @clip = Clip.find_by
    end
end
