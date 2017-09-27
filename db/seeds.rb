# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.
Product.destroy_all
User.destroy_all
Category.destroy_all
Comment.destroy_all

Category.create!(name: "Mens")
Category.create!(name: "Womens")

User.create!(username: "alex", password: "123456")
User.create!(username: "guest", password: "123456")
User.create!(username: "Brainzilla", password: "123456")
User.create!(username: "The Director", password: "claude11")
User.create!(username: "Samantha", password: "123456")

Product.create!(
  title: "Ultraverse Woven",
  price: 50,
  description: "Welcome to the Ultraverse,
  a voyage into the deep manifolds of space, revealing the beauty hidden within.
  Contrasting a low key minimal exterior with bold graphic interior lining. Mens long sleeve shirt",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178257/ultraverse_woven_kxfeda.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Moonsurfer",
  price: 30,
  description: "The Astrosurfer emerges from a Cosmic shredding session. Mens t-shirt, size medium. Printed on 100% Cotton",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178257/moonsurfer_togt0r.jpg",
  category_id: Category.find_by(name: "Mens").id,
  featured: true
)

Product.create!(
  title: "Infinite",
  price: 30,
  description: "The power of the imagination makes us infinite. Mens t-shirt, size medium. Printed on 100% Cotton",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178256/infinite_ksy3rg.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Universe Within",
  price: 30,
  description: "We are in the Universe and the Universe is in us. Mens t-shirt, size medium. Printed on 100% Cotton",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178255/universe_within_rnq8js.jpg",
  category_id: Category.find_by(name: "Mens").id,
  featured: true
)

Product.create!(
  title: "Wireframe Voyage",
  price: 30,
  description: "An inner voyage to outer space. Mens t-shirt, size medium. Printed on 100% Cotton",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178255/wireframe_voyage_rbjvcz.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Astro Wave",
  price: 30,
  description: "When you surf you’re not just “catching a wave” you're participating in an entire cosmological process.
  Mens t-shirt, size medium. Printed on 100% cotton",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178258/astro_wave_udreli.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Science Wonder Art",
  price: 30,
  description: "A celebration of the wonder which springs forth from the synergy of science and art.
  Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506534091/SWA_womens_tshirt_model_zfys5h.jpg",
  category_id: Category.find_by(name: "Womens").id,
  featured: true
)

Product.create!(
  title: "Stardust",
  price: 30,
  description: "'The cosmos is also within us. We're made of star stuff. We are a way for the cosmos to know itself.' - Carl Sagan.
  Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506534091/stardust_womens_model_white_wiwawa.jpg",
  category_id: Category.find_by(name: "Womens").id,
  featured: true
)

Product.create!(
  title: "Psychonaut",
  price: 30,
  description: "Rather than roaming the realms of outer space, the Psychonaut explores the depths of inner space. Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506534091/psychonaut_womens_tee_main_image_qaqhfy.jpg",
  category_id: Category.find_by(name: "Womens").id
)

Product.create!(
  title: "Floatation",
  price: 39,
  description: "'The universe speaks itself around us, a vast, transcalar, multidimensional signaling system.' - Diana Slattery
  Women's t-shirt size small. Printed on 100% Polyester",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506534094/floatation_w_model_iug8pb.jpg",
  category_id: Category.find_by(name: "Womens").id,
  featured: true
)

Product.create!(
  title: "Face Off",
  price: 30,
  description: "'Identity and self are fluid constructs. Reinvent yourself every day. Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506534094/face_off_womens_model_pcny5v.jpg",
  category_id: Category.find_by(name: "Womens").id
)

Product.create!(
  title: "Order of the Dolphin",
  price: 30,
  description: "Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506534093/dolphin_womens_tee_model_hhzkhp.jpg",
  category_id: Category.find_by(name: "Womens").id
)

Product.create!(
  title: "After the Jump",
  price: 30,
  description: "Leap before you look. Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506534091/after_the_jump_womens_model_lznwol.jpg",
  category_id: Category.find_by(name: "Womens").id
)

Comment.create!(
  body: "That's a handsome space man!",
  user_id: User.find_by(username: "Samantha").id,
  product_id: Product.find_by(title: "Moonsurfer").id
)

Comment.create!(
  body: "What a great shirt! A beautiful design and high quality print!",
  user_id: User.find_by(username: "alex").id,
  product_id: Product.find_by(title: "Universe Within").id
)

Comment.create!(
  body: "This shirt is chill af",
  user_id: User.find_by(username: "Brainzilla").id,
  product_id: Product.find_by(title: "Order of the Dolphin").id
)

Comment.create!(
  body: "Thanks!",
  user_id: User.find_by(username: "Samantha").id,
  product_id: Product.find_by(title: "Order of the Dolphin").id
)

Comment.create!(
  body: "Beautiful shirt!",
  user_id: User.find_by(username: "alex").id,
  product_id: Product.find_by(title: "Wireframe Voyage").id
)

Comment.create!(
  body: "I lik this colorful design!",
  user_id: User.find_by(username: "The Director").id,
  product_id: Product.find_by(title: "Floatation").id
)
