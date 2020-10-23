class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.all
        render :index
    end

    def show 
        @channel = Channel.find_by(name: params[:id].downcase) || Channel.find(params[:id])
        if @channel
            render :show
        else
            render json: ['Channel not found']
        end
    end
end
