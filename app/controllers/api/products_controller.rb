class Api::ProductsController < ApplicationController

  def index
    if params[:search]
      @products = Product.search_by_product_details(params[:search])
    else
      @products = Product.includes(:seller)
    end
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def featured
    @products = Product.where("featured = true").includes(:seller)
    render :index
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render :show
    else 
      render json: @product.errors.full_messages, status: 422
    end 
  end 

  private

  def product_params
    params.require(:product).permit(:title,
                                    :price,
                                    :description,
                                    :image_url
                                    )
  end
end
