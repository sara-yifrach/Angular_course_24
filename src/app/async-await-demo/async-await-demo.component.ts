import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await-demo',
  templateUrl: './async-await-demo.component.html',
  styleUrls: ['./async-await-demo.component.scss']
})
export class AsyncAwaitDemoComponent {

  async printNumbers(){
     console.log("1");
    var x = await this.getNumber(); 
    console.log(x);
        
     console.log("3");

  }

  getNumber():Promise<number>{
    return new Promise(res=>{
      setTimeout(()=>{
        res(2);
      })
    })
  }

  /**
   *
   */
  constructor() {
    this.printNumbers()    
  }

}
