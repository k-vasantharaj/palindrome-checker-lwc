🔄 Palindrome Checker - Lightning Web Component (LWC)
📖 Description

A Salesforce Lightning Web Component that checks whether a given word is a palindrome.
This project demonstrates data binding, event handling, and string manipulation in LWC.

Enter a word and check instantly if it’s a palindrome.

Displays clear results with ✅ or ❌.

Styled using Salesforce Lightning Design System (SLDS).

Can be deployed on Home Page, Record Page, or App Page.

⚙️ Installation

Clone this repository


Deploy the component to your Salesforce org using SFDX or VS Code


Open Lightning App Builder in Salesforce.

Drag and drop the Palindrome Checker component onto a Home Page, App Page, or Record Page.

▶️ Usage

Enter a word in the input box.

Click "Check Palindrome".

The component will display:

✅ Word is a palindrome

❌ Word is not a palindrome

🧩 Example Logic
handleCheckPalindrome() {
    this.reversedWord = this.word.split('').reverse().join('');
    if (this.word === this.reversedWord) {
        this.isPalindrome = '✅ Word is a palindrome';
    } else {
        this.isPalindrome = '❌ Word is not a palindrome';
    }
}
