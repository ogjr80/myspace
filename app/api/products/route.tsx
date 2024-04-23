const products = [
    {
      "id": 1,
      "name": "Smartphone",
      "price": 299.99,
      "category": "Electronics",
      "description": "Latest model with high-resolution camera and long-lasting battery."
    },
    {
      "id": 2,
      "name": "Leather Wallet",
      "price": 49.99,
      "category": "Accessories",
      "description": "Genuine leather wallet with multiple card slots and a sleek design."
    },
    {
      "id": 3,
      "name": "Running Shoes",
      "price": 119.99,
      "category": "Sportswear",
      "description": "Lightweight and breathable for optimal running comfort."
    },
    {
      "id": 4,
      "name": "Bluetooth Headphones",
      "price": 89.99,
      "category": "Electronics",
      "description": "Noise-canceling headphones with 12-hour battery life."
    },
    {
      "id": 5,
      "name": "Electric Kettle",
      "price": 34.99,
      "category": "Home Appliances",
      "description": "Fast boiling with auto shut-off and energy-saving features."
    },
    {
      "id": 6,
      "name": "Yoga Mat",
      "price": 19.99,
      "category": "Fitness",
      "description": "Non-slip surface and cushioned support for all types of yoga."
    },
    {
      "id": 7,
      "name": "Backpack",
      "price": 59.99,
      "category": "Accessories",
      "description": "Durable and spacious, perfect for school or travel."
    },
    {
      "id": 8,
      "name": "Espresso Machine",
      "price": 199.99,
      "category": "Home Appliances",
      "description": "Barista-quality coffee at home with easy-to-use features."
    },
    {
      "id": 9,
      "name": "Water Bottle",
      "price": 14.99,
      "category": "Fitness",
      "description": "Stainless steel, keeps liquids cold or hot for hours."
    },
    {
      "id": 10,
      "name": "Smart Watch",
      "price": 159.99,
      "category": "Electronics",
      "description": "Track your fitness activity and receive smartphone notifications."
    },
    {
      "id": 11,
      "name": "Camping Tent",
      "price": 99.99,
      "category": "Outdoor",
      "description": "Spacious and weather-resistant, ideal for outdoor adventures."
    },
    {
      "id": 12,
      "name": "Novel: The Great Escape",
      "price": 15.99,
      "category": "Books",
      "description": "Thrilling story of adventure and courage."
    },
    {
      "id": 13,
      "name": "Sunglasses",
      "price": 85.99,
      "category": "Accessories",
      "description": "Stylish and protective against UV rays."
    },
    {
      "id": 14,
      "name": "Gaming Mouse",
      "price": 75.99,
      "category": "Electronics",
      "description": "High precision and customizable buttons for gamers."
    },
    {
      "id": 15,
      "name": "Acoustic Guitar",
      "price": 249.99,
      "category": "Musical Instruments",
      "description": "Rich sound and fine craftsmanship for beginners and professionals."
    },
    {
      "id": 16,
      "name": "Indoor Plant",
      "price": 22.99,
      "category": "Home Decor",
      "description": "Low maintenance and improves air quality."
    },
    {
      "id": 17,
      "name": "Desk Lamp",
      "price": 39.99,
      "category": "Furniture",
      "description": "LED light with adjustable brightness and flexible arm."
    },
    {
      "id": 18,
      "name": "Barbell Set",
      "price": 129.99,
      "category": "Fitness",
      "description": "Adjustable weights for a custom workout experience."
    },
    {
      "id": 19,
      "name": "Grill",
      "price": 180.99,
      "category": "Outdoor",
      "description": "Perfect for family barbecues and outdoor gatherings."
    },
    {
      "id": 20,
      "name": "Blender",
      "price": 55.99,
      "category": "Home Appliances",
      "description": "Powerful and easy to clean, great for smoothies and soups."
    }
  ]

  
  import { NextResponse } from "next/server"


  export async function GET(){
    return NextResponse.json(products); 
  }