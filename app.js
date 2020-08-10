const getUserInputEl = document.querySelector('input');

const btn = document.querySelector('button');

let result = document.querySelector('.result');
console.log(result);



function inputChanged(){
  let x = getUserInputEl.value.split(',');
  return x.sort();
} 



function pairCalculator(n, ar) {
    ar = inputChanged();
    n = inputChanged().length;
    /* console.log(ar); */
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (ar[i] == ar[i + 1]) {
        i++;
        count++;
      }
    }
   console.log(count);
   result.innerHTML = `<h3>Number of Pairs: ${count}</h3> <br> <div>The sorted array: ${ar}</div>`
   result.style.background = 'skyblue'

  }

btn.addEventListener('click',pairCalculator)

