module SessionHandler
  extend ActiveSupport::Concern

  included do

    def after_sign_in_path_for(resource_or_scope)
      profile_path
    end

  end
end
