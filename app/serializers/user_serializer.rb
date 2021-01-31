class UserSerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers

    attributes :id, :username, :avatar_with_image
    has_many :comments
    has_one :profile

    def avatar_with_image
        rails_blob_path(object.profile.avatar) if object.profile.avatar.attached?
    end
end
