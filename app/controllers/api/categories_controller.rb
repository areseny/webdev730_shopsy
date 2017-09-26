class Api::CategoriesController < ApplicationController
  def index
    # debugger
    @categories = Category.all
    render :index
  end

  def show
    @category = Category.find(params[:id])
  end
end
