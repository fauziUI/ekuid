//input here exp => [23000, 4] //
let input = [65000, 3]
let pecahanIDR = [1000,2000,5000,10000,20000,50000,100000]

function soalNo3(infoPenjual) {
  let total = 0
  let lembar= 0
  let hasil = []
  
  //Jika Penjual ingin dibayar hanya dengan selembar Uang
  if (infoPenjual[1]==1){
      for (let i = pecahanIDR.length; i >= 0 ; i--) {
          if(infoPenjual[0]/pecahanIDR[i]>1){
              hasil.push(pecahanIDR[i+1])
              break
          }
      }
  }
  
  //Jika Penjual ingin dibayar dengan lebih dari 1 lembar
  else {
    let sisa = infoPenjual[0]-total
    let sisaLembar = infoPenjual[1]-lembar
    
    while(sisaLembar!==0){
  
      // untuk menentukan lembar uang awal hingga sisa 1 lembar
      for (let i = 0; i < pecahanIDR.length; i++) {
        if(sisa/pecahanIDR[i]<=sisaLembar && sisa/pecahanIDR[i]>=1 ){
          lembar+= Math.floor(sisa/pecahanIDR[i])
          total += pecahanIDR[i]*Math.floor(sisa/pecahanIDR[i])
          for (let j = 0; j < Math.floor(sisa/pecahanIDR[i]) ; j++) {
            hasil.push(pecahanIDR[i])
          }
        }
        sisa = infoPenjual[0]-total
      }
      
      //untuk menentukan lembar terakhir 
      if (sisaLembar==1 && sisa>0){
        for (let i = pecahanIDR.length; i >= 0 ; i--) {
            if(sisa/pecahanIDR[i]>1){
              lembar++
              if(pecahanIDR[i]>sisa){hasil.push(pecahanIDR[i])}
              else {hasil.push(pecahanIDR[i+1])}
              break
            }
        }
      }
      sisaLembar = infoPenjual[1]-lembar
    }
  }
  console.log(hasil)
}

soalNo3(input)