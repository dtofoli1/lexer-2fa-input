import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lexer-2fa-input';

  jumpTo(currentInput:string, nextInput:string, previousInput:string) {
    var key = eval("event.key;")
    var tamanho = eval("document.F1."+ currentInput +".value.length;");

                if (tamanho == 1){
                    if (nextInput != ''){
                        eval("document.F1."+ nextInput +".focus();");
                    } else {
                        alert("POST!!!");
                        location.reload();
                    }
                } else if (key == 'Backspace' && previousInput != ''){
                    eval("document.F1."+ previousInput +".focus();");
                } 
  };
}
