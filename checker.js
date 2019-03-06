for(i=1;i<=13;i++){
  str = 'choice'+i+ '-'+Math.floor(Math.random() * Math.floor(3) + 3)
  console.log(str)
  document.getElementById(str).checked = true;
}
