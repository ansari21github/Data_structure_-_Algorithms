/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    // let i = -1;
    // let plantIndex;
    // let count = 0;
    // let canCap = capacity;
    // while(i<plants.length){
    //     if(plants[i] <= canCap){
    //         canCap -= plants[i];
    //         count++;
    //         i++;
    //     }else{
    //         plantIndex = i-1;
    //         count += plantIndex+1;
    //         canCap = capacity;
    //         count += i+1;
    //     }
    // }
    // return count;

     let steps = 0;
    let can = capacity;

    for (let i = 0; i < plants.length; i++) {
        if (plants[i] > can) {
            // not enough water → go back to river and return
            steps += i * 2;   // i steps back + i steps forward again
            can = capacity;   // refill
        }
        // water current plant
        can -= plants[i];
        steps++;  // move one step to plant i
    }

    return steps;
};