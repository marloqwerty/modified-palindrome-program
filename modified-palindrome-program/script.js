const _check = document.querySelector('#form');
const _input = document.querySelector('.input');
const _resultBox = document.querySelector('.result-box');

class Palindrome {
	checkIfPalindrome(text) {
		const letters = []; //this is a stack

		const word = text.toUpperCase();

		let rword = '';

		// put letters of word into stack
		for (let i = 0; i < word.length; i++) {
			letters.push(word[i]);
		}

		//pop off the stack in reverse order
		for (let i = 0; i < word.length; i++) {
			rword += letters.pop();
		}

		if (rword === word) {
			_resultBox.innerHTML = `"${word}" is palindrome`;
		} else {
			_resultBox.innerHTML = `"${word}" is not palindrome`;
		}
	}
}

const palindrome = new Palindrome();

_check.addEventListener('submit', (e) => {
	e.preventDefault();

	palindrome.checkIfPalindrome(_input.value);
});
