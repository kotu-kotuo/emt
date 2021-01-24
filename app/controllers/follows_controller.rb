class FollowsController < ApplicationController
  before_action :authenticate_user!

  def index
    user = User.find(params[:account_id])
    follow_status = current_user.has_followed?(user)


    render json: { hasFollowed: follow_status }
  end

  def create
    user = User.find(params[:account_id])
    current_user.follow!(params[:account_id])
    follow_count = user.followers.count

    render json: { status: 'ok', followCount: follow_count }
  end

end
