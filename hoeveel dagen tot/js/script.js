const setup = () => {
  dagNu = new Date().getDate();
uurNu = new Date().getHours();
minNu = new Date().getMinutes();
secNu = new Date().getSeconds();

dagEinde = 10;
uurEinde = 10;
minEinde = 0;
secEinde = 0;

dag = 0;
uur = 0;
min = 0;
sec = 0;

if(dagNu > dagEinde || dagNu == dagEinde  && uurNu >= uurEinde && minNu >= minEinde && secNu >= secEinde){
  document.getElementById("hoelang").innerHTML = "It arrived";
}
else{

  if(secEinde <secNu){
    sec = (secEinde+60)-secNu;
    minEinde-= 1;
  }
  else{
    sec = secEinde-secNu;
  }
  if(minEinde < minNu){
    min = (minEinde+60)-minNu;
    uurEinde -= 1
  }
  else{
    min = minEinde-minNu;
  }
  if (uurEinde < uurNu){
    uur = uurEinde + 24 - uurNu;
    dagEinde -= 1
  }
  else{
    uur = uurEinde - uurNu;
  }
  dag = dagEinde - dagNu

  if(sec == 0){
    document.getElementById("secMv").innerHTML = "seconde";
  }
  if(min == 1){
    document.getElementById("minMv").innerHTML = "minuut";
  }
  if(uur == 1){
    document.getElementById("uurMv").innerHTML = "uur";
  }
  if(dag == 1){
    document.getElementById("dagMv").innerHTML = "dag";
  }
}

setInterval(per_sec, 1000)
}

function per_sec() {
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("min").innerHTML = min;
  document.getElementById("uur").innerHTML = uur;
  document.getElementById("dagen").innerHTML = dag;

    sec--;
    if(sec == -1){
      sec = 59;
      min--;
      if(min == -1){
        min = 59;
        uur--;
        if(uur == -1){
          uur == 23;
          dag--;
          if(dag == -1){
            document.getElementById("hoelang").innerHTML = "It arrived";
          }
          else if(dag == 1){
            document.getElementById("dagMv").innerHTML = "dag";
          }
          else{
            document.getElementById("dagMv").innerHTML = "dagen";
          }
        }
        else if(uur == 1){
          document.getElementById("uurMv").innerHTML = "uur";
        }
        else{
          document.getElementById("uurMv").innerHTML = "uren";
        }
      }
      else if(min == 1){
        document.getElementById("minMv").innerHTML = "minuut";
      }
      else{
        document.getElementById("minMv").innerHTML = "minuten";
      }
    }
    else if(sec == 0){
      document.getElementById("secMv").innerHTML = "seconde";
    }
    else{
      document.getElementById("secMv").innerHTML = "secondes";
    }

}

window.addEventListener("load", setup);
