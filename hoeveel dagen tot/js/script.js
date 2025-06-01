let global =  {
  NU: new Date(Date.now()),
  EINDE: new Date("2025/06/10 10:45")
}

const setup = () => {

  setInterval(bereken_tijd, 1000);
}

let bereken_tijd = () => {
  sec();
  let tijd_tussen = global.EINDE - global.NU;
  if(tijd_tussen > 0){
  let dagen = Math.floor(tijd_tussen/1000/60/60/24);
  let dagen_elem = create_elem(dagen, 'dag', 'dagen');
  tijd_tussen -= dagen*1000*60*60*24;
  let uren = Math.floor(tijd_tussen / 1000/60/60);
  let uren_elem = create_elem(uren, 'uur', 'uren')
  tijd_tussen -= uren*1000*60*60;
  let minuten = Math.floor(tijd_tussen / 1000/60);
  let minuten_elem = create_elem(minuten, 'minuut', 'minuten');
  tijd_tussen -= minuten*1000*60;
  let secondes = Math.floor(tijd_tussen / 1000);
  let secondes_elem = create_elem(secondes, 'seconde', 'secondes');

  let hoelang = document.getElementById("hoelang");
  hoelang.innerHTML = "Nog: ";
  hoelang.appendChild(dagen_elem);
  hoelang.innerHTML += " ";
  hoelang.appendChild(uren_elem);
  hoelang.innerHTML += "<br>";
  hoelang.appendChild(minuten_elem);
  hoelang.innerHTML += " ";
  hoelang.appendChild(secondes_elem);
  }
  else{
    let hoelang = document.getElementById("hoelang");
    hoelang.innerHTML='YAY WE ARE FINALY BACK TOGETHER';
  }
}

let create_elem = (tijd, enkelvoud, meervoud) => {
  let dagen_elem = document.createElement('span');
  dagen_elem.innerHTML = tijd;
  if(tijd === 1){
    dagen_elem.innerHTML += " " + enkelvoud;
  }
  else{
    dagen_elem.innerHTML += " " + meervoud;
  }
  return dagen_elem;
}

let sec = () =>{
  global.NU = global.NU - 0 + 1000;
}

window.addEventListener("load", setup);
