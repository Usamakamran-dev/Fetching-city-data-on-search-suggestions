'use strict';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const inputfield=document.querySelector('.input-field');
const suggestions=document.querySelector('.suggestions');


inputfield.addEventListener('input',function(e){
    e.preventDefault();
    const enteredInput=this.value;
 // Fetch Api
 fetch(endpoint)
 .then(response=> response.json())
 .then(data=> {
     const filteredData=data.filter(element => {
          
          const filtered=element.city.toLowerCase();
          const matchingCity=filtered.includes(enteredInput);
          return matchingCity;
     })
             suggestions.innerHTML='';
             filteredData.forEach(ele => { 
             const html=`<li><span class="highlight">${ele.city}</span>${ele.state}----- ${ele.population}</li>`;
             suggestions.insertAdjacentHTML("afterbegin",html);
         });
        });
    });


