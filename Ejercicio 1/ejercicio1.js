let plataCofla= prompt("Hola Cofla, ¿Cuánta plata tienes?");
let plataAmigo1= prompt("Hola Amigo1, ¿Cuánta plata tienes?");
let plataAmigo2= prompt("Hola Amigo2, ¿Cuánta plata tienes?");


if (plataCofla>=0.6 && plataCofla<1 ){
alert("Cofla, Comprate un palito de agua y te sobran $" + (plataCofla - 0.6));
} else if (plataCofla>=1 && plataCofla<1.6 ){
        alert("Cofla, Comprate un palito de crema y te sobran $" + (plataCofla - 1));
} else if (plataCofla>=1.6 && plataCofla<1.7 ){
        alert("Cofla, Comprate un heladix y te sobran $" + (plataCofla - 1.6));
}
 else if (plataCofla>=1.7 && plataCofla<1.8 ){
        alert("Cofla, Comprate un helardo y te sobran $" + (plataCofla - 1.7));
}
 else if (plataCofla>=1.8){
        alert("Cofla, Comprate un pote con confites o un 1/4 de kilo y te sobran $" + (plataCofla - 1.8));
} else {
    alert("Cofla, no te alcanza para nada")
}

if (plataAmigo1>=0.6 && plataAmigo1<1 ){
    alert("Amigo1, Comprate un palito de agua");
    } else if (plataAmigo1>=1 && plataAmigo1<1.6 ){
            alert("Amigo1, Comprate un palito de crema");
    } else if (plataAmigo1>=1.6 && plataAmigo1<1.7 ){
            alert("Amigo1, Comprate un heladix");
    }
     else if (plataAmigo1>=1.7 && plataAmigo1<1.8 ){
            alert("Amigo1, Comprate un helardo");
    }
     else if (plataAmigo1>=1.8){
            alert("Amigo1, Comprate un pote con confites o un 1/4 de kilo");
    } else {
        alert("Amigo1, no te alcanza para nada")
    }
    if (plataAmigo2>=0.6 && plataAmigo2<1 ){
        alert("Amigo2, Comprate un palito de agua");
        } else if (plataAmigo2>=1 && plataAmigo2<1.6 ){
                alert("Amigo2, Comprate un palito de crema");
        } else if (plataAmigo2>=1.6 && plataAmigo2<1.7 ){
                alert("Amigo2, Comprate un heladix");
        }
         else if (plataAmigo2>=1.7 && plataAmigo2<1.8 ){
                alert("Amigo2, Comprate un helardo");
        }
         else if (plataAmigo2>=1.8){
                alert("Amigo2, Comprate un pote con confites o un 1/4 de kilo");
        } else {
            alert("Amigo2, no te alcanza para nada")
        }