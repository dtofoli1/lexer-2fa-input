import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lexer-2fa-input';

  jumpTo(currentInput:string, nextInput:string, previousInput:string) {
    var key = eval("event.key;")
    var size = eval("document.F1."+ currentInput +".value.length;");

                if (size == 1){
                    if (nextInput != ''){
                        eval("document.F1."+ nextInput +".focus();");
                    } else {
                        this.openSnackBar('POST');
                        eval("document.F1" + ".reset();")
                    }
                } else if (key == 'Backspace' && previousInput != ''){
                    eval("document.F1."+ previousInput +".focus();");
                } 
  };

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string){
    this._snackBar.open(message, 'Fechar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3 * 1000
    });
  }
}
