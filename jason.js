const user = {id: 1, name: 'Galib', jon: 'bekar'};
// javaScript object Notation (Json)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified)
const shop = {
    owner: 'galib',
    address: {
        street: 'goalkhali',
        city: 'Khulna',
        country: 'bd'
    },
    products: ['laptop', 'Mic', 'monitor','earPhone'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopbj = JSON.parse(shopJson);
console.log(shopbj);
