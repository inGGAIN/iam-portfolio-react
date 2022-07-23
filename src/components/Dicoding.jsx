import React from 'react';

function Dicoding() {
  const x = 1;
  x = 2;
  console.log(x);
    // mengganti atribut img
    // let imgKocheng = document.querySelector("#catImage");
    //   imgKocheng.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");
    //   // klik
    //   imgKocheng.addEventListener('click', function(event) {
    //     document.querySelector('#count').innerText++;
    //   });
    // // mengganti atribut html
    // let caption = document.querySelector("#caption");
    //   caption.innerHTML = '<em>3 Anak Kucing</em>';

    // // mengganti atribut text
    // const capt = document.querySelector("#capt");
    //   capt.innerText = '<em>Anak Kucing</em>';

    // const newLment = document.createElement('p');
    //     newLment.innerHTML = 'anda menekan gambar kucing';
    //     document.body.appendChild(newLment);
        
  return (
    <figure>
        <img id="catImage" src="https://i.ibb.co/9WT6LG6/two-three.jpg" alt="three-cats" width="600px"/>
        <figcaption id="caption">Tiga Anak Kucing</figcaption>
        <div id="capt">Kamu klik sebanyak <span id='count'></span></div>
    </figure>
  )
}

export default Dicoding