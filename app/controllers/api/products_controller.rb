class Api::ProductsController < ApplicationController

  def index
    if params[:search]
      @products = Product.search_by_product_details(params[:search]).includes(:seller)
    elsif params[:user_id]
      @products = User.find(params[:user_id]).products.includes(:seller)
    else
      @products = Product.includes(:seller)
    end
    render :index
  end

  def show
    @product = Product.includes(:seller, :categories).find(params[:id])
    render :show
  end

  def featured
    @products = Product.where("featured = true").includes(:seller)
    render :index
  end

  def create
    @product = Product.new(product_params)

    @product.seller_id = current_user.id
    if @product.save
      if params["categories"]
        cat_ids = params["categories"]
        cat_ids.each do |cat_id|
          create_category_product(cat_id, @product.id)
        end 
      end 
      render :show
    else 
      render json: @product.errors.full_messages, status: 422
    end 
  end 

  def update 
    @product = Product.find(params[:id])

    if @product.update_attributes(product_params)
      if params["categories"]
        @product.categories.destroy_all
        cat_ids = params["categories"]
        cat_ids.each do |cat_id|
          create_category_product(cat_id, @product.id)
        end 
      end 
      render :show
    else 
      render json: @product.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @product = current_user.products.find(params[:id])
    @product.destroy!
    render :show
  end

  private

  def product_params
    params.require(:product).permit(:title,
                                    :price,
                                    :description,
                                    :image_url,
                                    :public_id
                                    )
  end

  def create_category_product(cat_id, product_id)
    category_product = CategoryProduct.new(category_id: cat_id, product_id: product_id)

    if category_product.save
    else 
      render json: category_product.errors.full_messages, status: 422
    end 
  end
end
