
json.extract! cart_item, :id
json.set! :product_id, cart_item.product.id
json.set! :title, cart_item.product.title
json.set! :price, cart_item.product.price
json.set! :description, cart_item.product.description
json.set! :image_url, cart_item.product.image_url
json.set! :seller, cart_item.product.seller
