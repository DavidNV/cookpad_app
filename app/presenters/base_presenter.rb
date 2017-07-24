require 'delegate'

class BasePresenter < SimpleDelegator
  include ActionView::Helpers
  attr_reader :source

  def initialize(source, **args)
    @source = source
    @params = args[:params]
    @args = args
    super(source)
  end

end
