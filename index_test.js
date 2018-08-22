import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My test', async t => {	
        const nameInput = Selector('#developer-name');
	const radioBtns = Selector('input[type=radio]');

	await t
      	  .typeText(nameInput, 'Peter Parker');
        	
	console.log("Found '#developer-name' elements " + await nameInput.count);
	console.log("Found radio buttons " + await radioBtns.count);
   
});
