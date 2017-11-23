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
Category.destroy_all
CategoryProduct.destroy_all

Category.create!(name: "All Products")
Category.create!(name: "Mens")
Category.create!(name: "Womens")
Category.create!(name: "Accessories")

User.create!(username: "alex", password: "123456")
User.create!(username: "Guest", password: "123456")
User.create!(username: "Brainzilla", password: "123456")
User.create!(username: "The Director", password: "claude11")
User.create!(username: "Samantha", password: "123456")
User.create!(username: "Jeff", password: "hey_folks!")
User.create!(username: "Ryan", password: "123456")
User.create!(username: "Edith", password: "mrspuppy.com")

Product.create!(
  title: "Ultraverse Woven",
  price: 50,
  description: "Welcome to the Ultraverse,
  a voyage into the deep manifolds of space, revealing the beauty hidden within.
  Contrasting a low key minimal exterior with bold graphic interior lining. Mens long sleeve shirt",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506178257/ultraverse_woven_kxfeda.jpg",
)

Product.create!(
  title: "Ultraverse Jacket",
  price: 85,
  description: "Welcome to the Ultraverse,
  a voyage into the deep manifolds of space, revealing the beauty hidden within.
  Contrasting a low key minimal exterior with bold graphic interior lining. Mens jacket",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506701413/ultraverse_jacket_black_model_zgxao5.jpg",
)

Product.create!(
  title: "Cosmic Colourblock Pullover Hoodie",
  price: 75,
  description: "3-N 320 GSM French Terry with Sublimated block Print, exterior and interior woven lables custom Imaginary draw cord caps. Relaxed fit.",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506702332/cosmic_colorblock_hoodie_model_front_2_mwnxg9.jpg",
)

Product.create!(
  title: "Raito Repeat Pullover Hoodie",
  price: 75,
  description: "The Golden Ratio is nature's most beautiful mystery. From mollusk shells to galaxies, the proportion is embedded throughout nature, linking mathematics with beauty.",
  seller_id: User.find_by(username: "Jeff").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506702332/golden_ratio_hoodie_model_front_o5ep2t.jpg",
)

Product.create!(
  title: "Astrosurfer Crewneck Sweatshirt",
  price: 70,
  description: "This premium sweatshirt is made from 100% Cotton Yarn Dyed Marled Knit 3-End French Terry. Giving it an extremely soft hand and an exceptionally comfortable feel.",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506702332/astrosurfer_crewneck_model_front_2_gpxhpm.jpg",
)

Product.create!(
  title: "Moonsurfer",
  price: 30,
  description: "The Astrosurfer emerges from a Cosmic shredding session. Mens t-shirt, size medium. Printed on 100% Cotton",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506178257/moonsurfer_togt0r.jpg",
  featured: true
)

Product.create!(
  title: "Infinite",
  price: 30,
  description: "The power of the imagination makes us infinite. Mens t-shirt, size medium. Printed on 100% Cotton",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506178256/infinite_ksy3rg.jpg",
)

Product.create!(
  title: "Universe Within",
  price: 30,
  description: "We are in the Universe and the Universe is in us. Mens t-shirt, size medium. Printed on 100% Cotton",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506178255/universe_within_rnq8js.jpg",
  featured: true
)

Product.create!(
  title: "Ratio Repeat Windbreaker",
  price: 85,
  description: "The Golden Ratio is nature's most beautiful mystery. From mollusk shells to galaxies, the proportion is embedded throughout nature, linking mathematics with beauty.",
  seller_id: User.find_by(username: "alex").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506701413/golden_ratio_windbreaker_model_front_2_crn9ym.jpg",
  featured: true
)

Product.create!(
  title: "Study",
  price: 30,
  description: "This sublimated t-shirt is printed on a super-lightweight 100% polyester fabric to maximize colour and resolution, whilst retaining a very soft hand. The print is on both the front and back. ",
  seller_id: User.find_by(username: "Edith").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506701413/study_remix_model_front_1_lwelvc.jpg",
  featured: false
)

Product.create!(
  title: "Wireframe Voyage",
  price: 30,
  description: "An inner voyage to outer space. Mens t-shirt, size medium. Printed on 100% Cotton",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506178255/wireframe_voyage_rbjvcz.jpg",
)

Product.create!(
  title: "Astro Wave",
  price: 30,
  description: "When you surf you’re not just “catching a wave” you're participating in an entire cosmological process.
  Mens t-shirt, size medium. Printed on 100% cotton",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506178258/astro_wave_udreli.jpg",
)

Product.create!(
  title: "Science Wonder Art",
  price: 30,
  description: "A celebration of the wonder which springs forth from the synergy of science and art.
  Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506534091/SWA_womens_tshirt_model_zfys5h.jpg",
  featured: true
)

Product.create!(
  title: "Stardust",
  price: 30,
  description: "'The cosmos is also within us. We're made of star stuff. We are a way for the cosmos to know itself.' - Carl Sagan.
  Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506534091/stardust_womens_model_white_wiwawa.jpg",
  featured: true
)

Product.create!(
  title: "Psychonaut",
  price: 30,
  description: "Rather than roaming the realms of outer space, the Psychonaut explores the depths of inner space. Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506534091/psychonaut_womens_tee_main_image_qaqhfy.jpg",
)

Product.create!(
  title: "Floatation",
  price: 39,
  description: "'The universe speaks itself around us, a vast, transcalar, multidimensional signaling system.' - Diana Slattery
  Women's t-shirt size small. Printed on 100% Polyester",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506534094/floatation_w_model_iug8pb.jpg",
  featured: false
)

Product.create!(
  title: "Face Off",
  price: 30,
  description: "'Identity and self are fluid constructs. Reinvent yourself every day. Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506534094/face_off_womens_model_pcny5v.jpg",
)

Product.create!(
  title: "Order of the Dolphin",
  price: 30,
  description: "Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "Samantha").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506534093/dolphin_womens_tee_model_hhzkhp.jpg",
)

Product.create!(
  title: "After the Jump",
  price: 30,
  description: "Leap before you look. Women's t-shirt size small. Printed on 100% cotton.",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506534091/after_the_jump_womens_model_lznwol.jpg",
)

Product.create!(
  title: "1.618 Snapback",
  price: 30,
  description: "1.618 is a key number that unlocks the universal patterns found in nature.",
  seller_id: User.find_by(username: "Jeff").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506703765/1.618_snapback_main_image_kaikcq.jpg",
  featured: true
)

Product.create!(
  title: "Stardust Snapback",
  price: 35,
  description: "All-over engineered sublimation art. Rear embroidered logo. Fully adjustable plastic snap closure.",
  seller_id: User.find_by(username: "Brainzilla").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506704354/stardus_snapback_main_image_3_yeyicx.jpg",
  featured: true
)

Product.create!(
  title: "Flow State Snapback",
  price: 35,
  description: "You feel utterly at one with what you are doing and truly in the present moment. This is the flow state. All-over engineered sublimation art. Rear embroidered logo. Fully adjustable plastic snap closure.",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506704351/flow_state_snapback_main_image_t2lqau.jpg",
  featured: true
)

Product.create!(
  title: "Science Art Wonder Snapback",
  price: 35,
  description: "A celebration of the wonder which emerges from the union of science and art. Solid Black Twill 6 Panel Snap Back hat, with our classic Venn Diagram Exterior woven label, adjustable closure and rear logo label. We didn't make many, so don't let inertia get the better of you.",
  seller_id: User.find_by(username: "Edith").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506704348/swa_snapback_main_image_yjqjmg.jpg",
  featured: true
)

Product.create!(
  title: "Ratio Repeat Snapback",
  price: 35,
  description: "The Golden Ratio is nature's most beautiful mystery. This Black cotton twill snapback features a subtle black on black screen print, embossed metal logo and hidden interior message. Cover your head with Art, Math and Beauty today.",
  seller_id: User.find_by(username: "alex").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506705846/golden_ratio_snapback_black_main_image_f88hzm.jpg",
  featured: true
)

Product.create!(
  title: "Aspirational Logo Snapback",
  price: 35,
  description: "You will become as great as your dominant aspiration. Heather two tone 5 Panel Snap Back with pop stitch logo embroidery.",
  seller_id: User.find_by(username: "The Director").id,
  image_url: "https://res.cloudinary.com/brainzilla/image/upload/v1506705846/aspirational_logo_snapback_main_image_grzvtu.jpg",
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
  body: "I like this colorful design!",
  user_id: User.find_by(username: "The Director").id,
  product_id: Product.find_by(title: "Floatation").id
)

Comment.create!(
  body: "This is very nice and colorful shirt! Great job!",
  user_id: User.find_by(username: "Jeff").id,
  product_id: Product.find_by(title: "Study").id
)

Comment.create!(
  body: "This is a great sweathshirt! I want one!",
  user_id: User.find_by(username: "Jeff").id,
  product_id: Product.find_by(title: "Cosmic Colourblock Pullover Hoodie").id
)

Comment.create!(
  body: "Cool jacket!",
  user_id: User.find_by(username: "Jeff").id,
  product_id: Product.find_by(title: "Ratio Repeat Windbreaker").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Ultraverse Woven").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Ultraverse Jacket").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Cosmic Colourblock Pullover Hoodie").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Raito Repeat Pullover Hoodie").id,
  category_id: Category.find_by(name: "Mens").id
  )
  
CategoryProduct.create!(
  product_id: Product.find_by(title: "Astrosurfer Crewneck Sweatshirt").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Moonsurfer").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Infinite").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Universe Within").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Ratio Repeat Windbreaker").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Study").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Wireframe Voyage").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Astro Wave").id,
  category_id: Category.find_by(name: "Mens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Science Wonder Art").id,
  category_id: Category.find_by(name: "Womens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Stardust").id,
  category_id: Category.find_by(name: "Womens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Psychonaut").id,
  category_id: Category.find_by(name: "Womens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Floatation").id,
  category_id: Category.find_by(name: "Womens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Face Off").id,
  category_id: Category.find_by(name: "Womens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Order of the Dolphin").id,
  category_id: Category.find_by(name: "Womens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "After the Jump").id,
  category_id: Category.find_by(name: "Womens").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "1.618 Snapback").id,
  category_id: Category.find_by(name: "Accessories").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Stardust Snapback").id,
  category_id: Category.find_by(name: "Accessories").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Flow State Snapback").id,
  category_id: Category.find_by(name: "Accessories").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Science Art Wonder Snapback").id,
  category_id: Category.find_by(name: "Accessories").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Ratio Repeat Snapback").id,
  category_id: Category.find_by(name: "Accessories").id
)

CategoryProduct.create!(
  product_id: Product.find_by(title: "Aspirational Logo Snapback").id,
  category_id: Category.find_by(name: "Accessories").id
)

Product.all.each do |product|
  CategoryProduct.create!(
    product_id: product.id,
    category_id: Category.find_by(name: "All Products").id
  )
end 