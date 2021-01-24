class UnfollowsController < ApplicationController
  before_action :authenticate_user!

  def create
    user = User.find(params[:account_id])
    current_user.unfollow!(params[:account_id])
    follow_count = user.followers.count

    render json: { status: 'ok', followCount: follow_count }
  end
end
