                       //Ricreare lo slider visto in jquery, con tecnologia Vue.
                       //aggiungere un timer che permetta di ciclare le immagini in automatico (cambio ogni 3sec)

function myNewVue() {
     new Vue({
          el : '#js-vue',
          data : {
               namesArray : ['judy', 'panam', 'rogue', 'johnny'],
               starterRoad: 'img/',
               name: 'judy',
               finalRoad: '.jpg',
               switchCount: 0
          },
          mounted: function() {
               setInterval(this.next, 3000);
          },
          methods: {

               next: function() {
                    this.switchCount++;
                    for (let i = 0; i < this.namesArray.length; i++) {
                         if( i == this.switchCount ) {
                              this.name = this.namesArray[i];
                         } else if ( this.switchCount == this.namesArray.length) {
                              this.switchCount = 0;
                              this.name = this.namesArray[this.switchCount];
                         }
                    }
               },

               prev: function() {
                    this.switchCount--;
                    for (let i = 0; i < this.namesArray.length; i++) {
                         if( i == this.switchCount) {
                              this.name = this.namesArray[i];
                         } else if ( this.switchCount < 0) {
                              this.switchCount = this.namesArray.length - 1;
                              this.name = this.namesArray[this.switchCount];
                         }
                    }
               }
          }
     })
}

$(document).ready(myNewVue);
