const data =  [
  {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "category": "Electronics",
    "price": 2499,
    "quantity": 100,
    "inStock": true,
    "description": "Over-ear wireless headphones with noise cancellation and 30 hours of battery life.",
    "image": "https://picsum.photos/id/180/400/300"
  },
  {
    "id": 2,
    "name": "Smart LED TV 43 inch",
    "category": "Electronics",
    "price": 28999,
    "quantity": 100,
    "inStock": true,
    "description": "43-inch 4K Ultra HD Smart LED TV with built-in apps like Netflix and YouTube.",
    "image": "https://picsum.photos/id/1080/400/300"
  },
  {
    "id": 3,
    "name": "Classic Leather Wallet",
    "category": "Fashion",
    "price": 899,
    "quantity": 100,
    "inStock": true,
    "description": "Men’s genuine leather wallet with 6 card slots and 2 compartments for cash.",
    "image": "https://picsum.photos/id/1062/400/300"
  },
  {
    "id": 4,
    "name": "Running Sports Shoes",
    "category": "Fashion",
    "price": 1999,
    "quantity": 100,
    "inStock": true,
    "description": "Lightweight running shoes with breathable mesh and slip-resistant sole.",
    "image": "https://picsum.photos/id/21/400/300"
  },
  {
    "id": 5,
    "name": "Wooden Study Table",
    "category": "Furniture",
    "price": 5499,
    "quantity": 100,
    "inStock": true,
    "description": "Compact wooden study table with storage drawers, ideal for home or office use.",
    "image": "https://picsum.photos/id/1060/400/300"
  },
  {
    "id": 6,
    "name": "Ceramic Coffee Mug Set",
    "category": "Home & Kitchen",
    "price": 699,
    "quantity": 100,
    "inStock": true,
    "description": "Set of 6 microwave-safe ceramic coffee mugs in assorted colors.",
    "image": "https://picsum.photos/id/292/400/300"
  },
  {
    "id": 7,
    "name": "Digital Smartwatch",
    "category": "Electronics",
    "price": 3499,
    "quantity": 100,
    "inStock": true,
    "description": "Smartwatch with heart rate monitor, sleep tracking, and multiple sports modes.",
    "image": "https://picsum.photos/id/1044/400/300"
  },
  {
    "id": 8,
    "name": "Cotton Printed T-Shirt",
    "category": "Fashion",
    "price": 499,
    "quantity": 100,
    "inStock": true,
    "description": "100% cotton round-neck t-shirt with modern graphic print, available in multiple sizes.",
    "image": "https://picsum.photos/id/1051/400/300"
  },
  {
    "id": 9,
    "name": "Non-Stick Frying Pan",
    "category": "Home & Kitchen",
    "price": 1299,
    "quantity": 100,
    "inStock": true,
    "description": "Durable non-stick frying pan with heat-resistant handle, 28cm size.",
    "image": "https://picsum.photos/id/318/400/300"
  },
  {
    "id": 10,
    "name": "Backpack Laptop Bag",
    "category": "Accessories",
    "price": 1799,
    "quantity": 100,
    "inStock": true,
    "description": "Water-resistant laptop backpack with multiple compartments, fits up to 15.6-inch laptops.",
    "image": "https://picsum.photos/id/1000/400/300"
  },
  {
    "id": 11,
    "name": "Electric Kettle 1.5L",
    "category": "Home & Kitchen",
    "price": 1499,
    "quantity": 100,
    "inStock": true,
    "description": "Stainless steel electric kettle with auto shut-off and boil-dry protection.",
    "image": "https://picsum.photos/id/830/400/300"
  },
  {
    "id": 12,
    "name": "Gaming Mechanical Keyboard",
    "category": "Electronics",
    "price": 4599,
    "quantity": 100,
    "inStock": true,
    "description": "RGB backlit mechanical gaming keyboard with blue switches.",
    "image": "https://picsum.photos/id/112/400/300"
  },
  {
    "id": 13,
    "name": "Office Ergonomic Chair",
    "category": "Furniture",
    "price": 7499,
    "quantity": 100,
    "inStock": true,
    "description": "Ergonomic mesh office chair with lumbar support and adjustable height.",
    "image": "https://picsum.photos/id/1061/400/300"
  },
  {
    "id": 14,
    "name": "Stainless Steel Water Bottle",
    "category": "Home & Kitchen",
    "price": 599,
    "quantity": 100,
    "inStock": true,
    "description": "750ml insulated stainless steel water bottle keeps liquids hot or cold for 12 hours.",
    "image": "https://picsum.photos/id/250/400/300"
  },
  {
    "id": 15,
    "name": "Portable Bluetooth Speaker",
    "category": "Electronics",
    "price": 2299,
    "quantity": 100,
    "inStock": true,
    "description": "Compact portable speaker with deep bass and 12 hours of playtime.",
    "image": "https://picsum.photos/id/1084/400/300"
  },
  {
    "id": 16,
    "name": "Men’s Analog Watch",
    "category": "Fashion",
    "price": 3199,
    "quantity": 100,
    "inStock": true,
    "description": "Stylish men’s analog wristwatch with leather strap and water resistance.",
    "image": "https://picsum.photos/id/433/400/300"
  },
  {
    "id": 17,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "quantity": 100,
    "inStock": true,
    "description": "Ergonomic wireless mouse with 2.4GHz connectivity and long battery life.",
    "image": "https://picsum.photos/id/1025/400/300"
  },
  {
    "id": 18,
    "name": "Kitchen Knife Set",
    "category": "Home & Kitchen",
    "price": 1899,
    "quantity": 100,
    "inStock": true,
    "description": "6-piece stainless steel knife set with wooden block stand.",
    "image": "https://picsum.photos/id/292/400/300"
  },
  {
    "id": 19,
    "name": "Foldable Yoga Mat",
    "category": "Fitness",
    "price": 999,
    "quantity": 100,
    "inStock": true,
    "description": "Anti-slip foldable yoga mat, lightweight and easy to carry.",
    "image": "https://picsum.photos/id/330/400/300"
  },
  {
    "id": 20,
    "name": "Wireless Earbuds",
    "category": "Electronics",
    "price": 1999,
    "quantity": 100,
    "inStock": true,
    "description": "True wireless earbuds with touch control and charging case.",
    "image": "https://picsum.photos/id/64/400/300"
  },
  {
    "id": 21,
    "name": "Stylish Sunglasses",
    "category": "Fashion",
    "price": 1199,
    "quantity": 100,
    "inStock": true,
    "description": "UV-protected stylish sunglasses with lightweight frame.",
    "image": "https://picsum.photos/id/1011/400/300"
  },
  {
    "id": 22,
    "name": "Induction Cooktop",
    "category": "Home & Kitchen",
    "price": 3499,
    "quantity": 100,
    "inStock": true,
    "description": "Portable induction cooktop with 8 preset cooking modes.",
    "image": "https://picsum.photos/id/395/400/300"
  },
  {
    "id": 23,
    "name": "Wooden Bookshelf",
    "category": "Furniture",
    "price": 6499,
    "quantity": 100,
    "inStock": true,
    "description": "5-tier wooden bookshelf with modern design for home and office.",
    "image": "https://picsum.photos/id/1056/400/300"
  },
  {
    "id": 24,
    "name": "Casual Sneakers",
    "category": "Fashion",
    "price": 1599,
    "quantity": 100,
    "inStock": true,
    "description": "Unisex casual sneakers with comfortable sole and breathable material.",
    "image": "https://picsum.photos/id/22/400/300"
  },
  {
    "id": 25,
    "name": "Electric Mixer Grinder",
    "category": "Home & Kitchen",
    "price": 3799,
    "quantity": 100,
    "inStock": true,
    "description": "500W mixer grinder with 3 stainless steel jars and multi-speed settings.",
    "image": "https://picsum.photos/id/823/400/300"
  },
  {
    "id": 26,
    "name": "Laptop Stand",
    "category": "Accessories",
    "price": 1299,
    "quantity": 100,
    "inStock": true,
    "description": "Adjustable aluminum laptop stand for better ergonomics.",
    "image": "https://picsum.photos/id/1012/400/300"
  },
  {
    "id": 27,
    "name": "Leather Office Bag",
    "category": "Accessories",
    "price": 2899,
    "quantity": 100,
    "inStock": true,
    "description": "Premium leather office bag with padded laptop compartment.",
    "image": "https://picsum.photos/id/1063/400/300"
  },
  {
    "id": 28,
    "name": "Smartphone Tripod Stand",
    "category": "Electronics",
    "price": 899,
    "quantity": 100,
    "inStock": true,
    "description": "Lightweight adjustable tripod stand compatible with all smartphones.",
    "image": "https://picsum.photos/id/1041/400/300"
  },
  {
    "id": 29,
    "name": "Bedside Table Lamp",
    "category": "Furniture",
    "price": 1599,
    "quantity": 100,
    "inStock": true,
    "description": "Modern bedside table lamp with fabric shade and wooden base.",
    "image": "https://picsum.photos/id/1067/400/300"
  },
  {
    "id": 30,
    "name": "Rechargeable Torch",
    "category": "Electronics",
    "price": 799,
    "quantity": 100,
    "inStock": true,
    "description": "Powerful LED torch with rechargeable battery and 3 light modes.",
    "image": "https://picsum.photos/id/807/400/300"
  }
]
export default data;