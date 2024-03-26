// Compare in objects
const phones = [
    {name: 'Samsung', price: 25000, camera: '12mpx', color: 'black'},
    {name: 'Xiomi', price: 30000, camera: '12mpx', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mpx', color: 'black'},
    {name: 'Walton', price: 27000, camera: '12mpx', color: 'black'},
    {name: 'Oppo', price: 28000, camera: '12mpx', color: 'black'},
]

function getCheaperPhone(phones){
    let cheap = phones[0];
    for(const phone of phones){
        if(phone.price < cheap.price){
            cheap = phone;
        }
    }
    return cheap.name;
}

const cheaper_phone = getCheaperPhone(phones);
console.log("The cheaper phone is", cheaper_phone)