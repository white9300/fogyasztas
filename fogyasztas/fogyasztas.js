
let km = 0

do {
  km = prompt("Hány kilómétert mentél?", 0);
} while (km >= 1000 || km <= 1 );

let tankolas   

do {
  tankolas = prompt("Hány litert tankoltál?", 0);
} while (tankolas >= 50 || tankolas <= 1);


let autok = {
    evjarat:"2007",
    marka:"Suzuki",
    utca:"Szabadság",
    garazs:     function(){
        
    },
    fogyaszt:   function(tan,km){
        let fogy = (tan/km)*100
        return this.evjarat + " évjáratú " + this.marka + " fogyasztása " + fogy
    }
   
}
console.log(autok.fogyaszt(tankolas,km))

if(tankolas > 20){
    console.log("Nem sajnálod az üzemanyagot!")
}
if(km > 700){
    console.log("Nem kellene ennyit utaznod!")
}
else{
    console.log("Csak így tovább!")
}