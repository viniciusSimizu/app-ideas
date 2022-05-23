import { question } from 'readline-sync';

class Main {
    async execute() {

        for(
            let inputValue=question('Insert the binary number to convert, to leave insert "exit": ');
            inputValue!=='exit';
            inputValue=question('Insert the binary number to convert, to leave insert "exit": ')
        ) {

            if(!Number(inputValue) && inputValue != 0) {
                console.log('Must be binary numbers')
                continue
            }

            if(inputValue.length > 8) {
                console.log('Max: 8 Binary digits')
                continue
            }


            if(inputValue.match(/[^01]+/g)) {
                console.log('Only binaries number (0 and 1) are accepted')
                continue
            }

            console.log( parseInt(inputValue, 2) )

        };
        
    }
}

new Main().execute()
