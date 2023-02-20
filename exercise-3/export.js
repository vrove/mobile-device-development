function fahrenTocelci(fah){
    let fTemp = fah;
    let hasil = (fTemp - 32) * 5/9;
    console.log(`${fTemp} Fahrenheit = ${hasil} Celcius`);
}

function BMI(berat, tinggi){
    let b = berat;
    let t = tinggi;
    let hasil = b / (t*t);

    console.log(`Hasil BMI anda ${hasil}`);

    if(hasil < 18.5){
        console.log("Berat anda kurang");
    }else if(hasil >18.5 && hasil<24.9){
        console.log("Berat anda Normal");
    }else if(hasil > 25.0 && hasil<29.9){
        console.log("Berat anda Berlebih");
    }else if(hasil > 30.0 && hasil < 34.9){
        console.log("Anda Obesitas");
    }
}

export{fahrenTocelci};
export default BMI;