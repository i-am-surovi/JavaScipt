/**
 * chair --> 3 cft [cubic feet]
 * table --> 10 cft
 * bed --> 50 cft
 */ 
 
function woodQuantity(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const TotalChairWood = chair * perChairWood;
    const TotalTableWood = table * perTableWood;
    const TotalBedWood = bed * perBedWood;

    const totalWood = TotalChairWood + TotalTableWood + TotalBedWood;

    return totalWood;
}

const wood = woodQuantity(0,0,1);
console.log("Wood needed",wood)