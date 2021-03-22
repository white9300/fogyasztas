let km = 0

do {
  km = prompt("Hány kilómétert mentél?", 0);
} while (km >= 1000 || km <= 1 );

let tankolas   

do {
  tankolas = prompt("Hány litert tankoltál?", 0);
} while (tankolas >= 50 || tankolas <= 1);