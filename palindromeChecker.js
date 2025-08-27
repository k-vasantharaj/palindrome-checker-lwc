import { LightningElement } from 'lwc';

export default class PalindromeChecker extends LightningElement {
    word = '';     
    reversedWord = '';  
    isPalindrome = '';

    handleWordChange(event) {
        this.word = event.target.value;
        this.isPalindrome = ''; // clear old result
    }

    handleCheckPalindrome() {
        this.reversedWord = this.word.split('').reverse().join('');
        if (this.word === this.reversedWord) {
            this.isPalindrome = '✅ Word is a palindrome';
        } else {
            this.isPalindrome = '❌ Word is not a palindrome';
        }
    }
}
