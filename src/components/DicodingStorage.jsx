import React from 'react'

function DicodingStorage() {
    const cacheKey = 'NUMBER';
    if (typeof (Storage) !== 'undefined') {
        if (sessionStorage.getItem(cacheKey) === 'undefined') {
            sessionStorage.setItem(cacheKey, 0)
        }

    const button = document.querySelector('#button');
    // menghapus data di localStorage
    const clearButton = document.querySelector('#clear');
    const count = document.querySelector('#count');

    // tombol aksi klik untuk menambahkan data sessionStorage
    button.addEventListener('click', function (event) {
        let number = sessionStorage.getItem(cacheKey);
        number++;

        // menginput data di localStorage
        localStorage.setItem(cacheKey, number);
        count.innerText = localStorage.getItem(cacheKey);

        // menginput data di sessionStorage
        sessionStorage.setItem(cacheKey, number);
        count.innerText = sessionStorage.getItem(cacheKey);
    });

    // tombol klik untuk menghapus localStorage
    clearButton.addEventListener('click', function (event) {
        localStorage.removeItem(cacheKey);
    });
    } else {
        alert ('Browser tidak mendukung Web Storage');
    }
  return (
    <div>
    <p>anda menekan tombol sebanyak <span id="count"></span> kali</p>
    <button id="button">Klik disini</button>
    <button id="clear">Hapus Data</button>
    </div>
    
  )
}

export default DicodingStorage