let l1_classes=["l1-one","l1-two","l1-three","l1-four","l1-five","l1-six","l1-seven","l1-eight","l1-nine"],l1=document.getElementsByClassName("loader-1"),l1_a=[];for(i=0;i<l1.length;i++)for(j=0;j<9;j++){l1_a[i]=l1[i].getAttribute("color");let e=document.createElement("div");l1[i].appendChild(e);e.setAttribute("class",`${l1_classes[j]} l1-innerbox`),e.setAttribute("style",`background-color: ${l1_a[i]}`)}
let l3=document.getElementsByClassName("loader-3"),l3_a=[];for(i=0;i<l3.length;i++)l3_a.push(i),l3_a[i]=l3[i].getAttribute("color"),l3_boxOne=document.createElement("div"),l3_boxTwo=document.createElement("div"),l3_innerBox_one=document.createElement("div"),l3_innerBox_two=document.createElement("div"),l3_baseBox_one=document.createElement("div"),l3_baseBox_two=document.createElement("div"),l3[i].appendChild(l3_boxOne),l3[i].appendChild(l3_boxTwo),l3_boxOne.appendChild(l3_innerBox_one),l3_boxTwo.appendChild(l3_innerBox_two),l3_boxOne.appendChild(l3_baseBox_one),l3_boxTwo.appendChild(l3_baseBox_two),l3_boxOne.setAttribute("class","l3-boxOne"),l3_boxTwo.setAttribute("class","l3-boxTwo"),l3_innerBox_one.setAttribute("class","l3-innerbox"),l3_innerBox_two.setAttribute("class","l3-innerbox"),l3_baseBox_one.setAttribute("class","l3-basebox"),l3_baseBox_two.setAttribute("class","l3-basebox"),l3_innerBox_one.setAttribute("style",`background-color: ${l3_a[i]}`),l3_innerBox_two.setAttribute("style",`background-color: ${l3_a[i]}`),l3_baseBox_one.setAttribute("style",`background-color: ${l3_a[i]}`),l3_baseBox_two.setAttribute("style",`background-color: ${l3_a[i]}`)
let l4_classes=["l4-one","l4-two","l4-three"];for(l4=document.getElementsByClassName("loader-4"),l4_a=[],i=0;i<l4.length;i++)for(j=0;j<3;j++){l4_a[i]=l4[i].getAttribute("color");let e=document.createElement("div");l4[i].appendChild(e),e.setAttribute("class",`${l4_classes[j]} l4-innerbox`),e.setAttribute("style",`border-color: ${l4_a[i]}`)}
let l5=document.getElementsByClassName("loader-5"),l5_html_str='<div class="l5-glass"><div class="l5_top l5-halfglass l5-triangle"></div><div class="l5-bottom l5-halfglass l5-triangle l5-rotate"></div></div><div class="l5-layer1"><div><div class="l5_top l5-triangle"></div></div><div class="l5-rotate"><div class="l5-bottom l5-triangle"></div></div></div><div class="l5-layer2"><div><div class="l5_top l5-triangle"></div></div><div class="l5-rotate"><div class="l5-bottom l5-triangle"></div></div></div><div class="l5-sandstream"></div><div class="l5-bonds"><div class="l5_top l5-innerbond"></div><div class="l5-bottom l5-innerbond"></div></div>';for(i=0;i<l5.length;i++)l5[i].innerHTML=l5_html_str;
