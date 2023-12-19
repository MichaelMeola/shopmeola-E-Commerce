import { User, Product } from "./models.js";

const user1 = await User.create({
    email: 'meola@shopmeola.com',
    phone: '801-318-9195'
})

const product1 = await Product.create({
    name: 'MEOLA OG Logo Sticker',
    description: 'The Original Black Circle MEOLA Logo Sticker',
    price: '$3.00',
    image: "../../pictures/MEOLA Sticker.png"
})

const product2 = await Product.create({
    name: 'Vinyl - MEOLA "IN2U"',
    description: 'Vinyl Record Version Of The MEOLA Single "IN2U"',
    price: '$40.00',
    image: "../../pictures/IN2U vinyl.png"
})

const product3 = await Product.create({
    name: 'Classic Oversized Hoodie (Cream)',
    description: 'Our Classic Oversized Hoodie In Our Cream Color',
    price: '$80.00',
    s: 27,
    m: 50,
    l: 83,
    xl: 19,
    image: "../../pictures/MEOLA cream hoodie.png"
})