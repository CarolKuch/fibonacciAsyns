import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'działanie algorytmu na ciąg Fibonacciego';

  ngOnInit() {
    let resultDiv = document.body.querySelector('div');
    function resolveAfter3Seconds() {
      return new Promise(resolve => {
        let time = 0;
        setInterval(() => {
          console.log("Czas działania aplikacji to: " + time);
          time += 3;
          resultDiv.insertAdjacentHTML('beforeend', `<div class="two">Czas działania aplikacji to: ${time} sek.</div>`);
        }, 3000);
      });
    }

    async function asyncCall() {
      const result = await resolveAfter3Seconds();
    }

    asyncCall();

    function showFibonacciNumber() {
      return new Promise(resolve => {
        let arr = [0, 1];
        let i = 0;
        for (let i = 2; i <= 100; i++) {
          const a = arr[i - 1];
          const b = arr[i - 2];
          arr.push(a + b);
        }
        const myVar = setInterval(() => {
          if (arr[i] === undefined) {
            resultDiv.insertAdjacentHTML('beforeend', `<div class="two">Przykro mi, autor przewidział jedynie 100 kolejnych liczb...</div>`);
            clearInterval(myVar);
          } else {
            resultDiv.insertAdjacentHTML('beforeend', `<div class="two">${arr[i]}</div>`);
            i++;
          }
        }, 1000);
      });
    }

    async function asyncCall1() {
      const result = await showFibonacciNumber();
    }

    asyncCall1();
  }
}
