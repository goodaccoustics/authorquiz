import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const state = {
    turnData: {
      books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet', 'Macbeth', 'Romeo and Juliet'],
      author: {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
      },
    },
    highlight: 'none'
  }
  
  
describe("", () => {
	it('renders without crashing', () => {
  		const div = document.createElement('div');
  		ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}} />, div);
  		ReactDOM.unmountComponentAtNode(div);
	});
});

describe("When setting up testing", () => {
	it("should fail", () => {
		expect(1+1).toBe(3)
	});
});
