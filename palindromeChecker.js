import { LightningElement } from 'lwc';

export default class LwcBinding extends LightningElement {
word;     
reversedWord;  
isPalindrome;
result;
handleWordChange(event) 
{
        this.word = event.target.value;
}

handleCheckPalindrome() 
{
        if (this.word ==='') 
        {
            this.isPalindrome = '';
            this.result = '';
            return;
        }
        this.reversedWord = this.word.split('').reverse().join('');
        if(this.word === this.reversedWord)
        {
                this.isPalindrome= ' Word is a palindrome';
                this.result='palindrome';
        }
        else  
        {
                this.isPalindrome= ' Word is not a palindrome';
                this.result='not-palindrome';
        }
        

}


}
       
