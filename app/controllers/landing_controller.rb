# frozen_string_literal: true

class LandingController < ApplicationController
  layout "landing"

  def index
  end
  
  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end
  
end
