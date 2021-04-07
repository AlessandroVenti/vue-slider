                       //Ricreare lo slider visto in jquery, con tecnologia Vue.

function myNewVue() {
     new Vue({
          el : '#js-vue',
          data : {
               nameArray : ['judy', 'panam', 'rogue', 'johnny'],
               starterRoad: 'img/',
               name: 'judy',
               finalRoad: '.jpg',
               nameCount: 0
          },
          methods: {

               next: function() {
                    this.nameCount++;
                    for (let i = 0; i < this.nameArray.length; i++) {
                         if( i == this.nameCount ) {
                              console.log(i, this.nameCount);
                              this.name = this.nameArray[i];
                         } 
                    }
               },

               prev: function() {
                    this.nameCount--;
                    for (let i = 0; i < this.nameArray.length; i++) {
                         if( i == this.nameCount) {
                              this.name = this.nameArray[i];
                         }
                    }
               }
          }
     })
}

$(document).ready(myNewVue);
