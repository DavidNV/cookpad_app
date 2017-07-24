module ApplicationHelper

  def define_actions_for_resource(user)
    if user.present?
      "shared/user_actions"
    else
      "shared/no_user_actions"
    end
  end

  def flash_messages
    flash.map do |type, text|
      { id: text.object_id, type: type, text: text }
    end
  end

end
