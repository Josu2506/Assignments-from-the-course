var virtualPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false
    }
}

console.log(virtualPet);
virtualPet.nap()
console.log(virtualPet);