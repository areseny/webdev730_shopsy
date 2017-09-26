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

Category.create!(name: "Mens")
Category.create!(name: "Womens")

User.create!(username: "alex", password: "123456")
User.create!(username: "Imaginary Foundation", password: "claude11")
User.create!(username: "guest", password: "123456")

Product.create!(
  title: "Ultraverse Woven",
  price: 50,
  description: "Welcome to the Ultraverse,
  a voyage into the deep manifolds of space, revealing the beauty hidden within.
  Contrasting a low key minimal exterior with bold graphic interior lining,
  this premium quality woven shirt is wearable yet makes that cosmic statement.",
  seller_id: User.find_by(username: "Imaginary Foundation").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178257/ultraverse_woven_kxfeda.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Moonsurfer",
  price: 30,
  description: "The Astrosurfer emerges from a Cosmic shredding session. Printed on 100% Cotton",
  seller_id: User.find_by(username: "Imaginary Foundation").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178257/moonsurfer_togt0r.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Infinite",
  price: 30,
  description: "The power of the imagination makes us infinite. Printed on 100% Cotton",
  seller_id: User.find_by(username: "Imaginary Foundation").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178256/infinite_ksy3rg.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Universe Within",
  price: 30,
  description: "We are in the Universe and the Universe is in us. Printed on 100% Cotton",
  seller_id: User.find_by(username: "Imaginary Foundation").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178255/universe_within_rnq8js.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Wireframe Voyage",
  price: 30,
  description: "An inner voyage to outer space. Printed on 100% Cotton",
  seller_id: User.find_by(username: "Imaginary Foundation").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178255/wireframe_voyage_rbjvcz.jpg",
  category_id: Category.find_by(name: "Mens").id
)

Product.create!(
  title: "Astro Wave",
  price: 30,
  description: "When you surf you’re not just “catching a wave” you're participating in an entire cosmological process.
  Printed on 100% cotton",
  seller_id: User.find_by(username: "Imaginary Foundation").id,
  image_url: "http://res.cloudinary.com/brainzilla/image/upload/v1506178258/astro_wave_udreli.jpg",
  category_id: Category.find_by(name: "Mens").id
)
