const BinarySearchTree = require('../binTree');
const expect = require('chai').expect;

const tree = new BinarySearchTree();
const arr = [3,4,51,2,52,324,234234,2342342,1223];
const randomValue = arr[Math.floor(Math.random() * arr.length)];

describe('Test binary tree', () => {
    it('Adding new items', () => {
        arr.forEach( item => tree.add(item));
    });

    it('Check size', () => {
        expect(tree.size()).to.equal(arr.length);
    });

    it('Check root value correctness', () => {
        expect(tree.root.value).to.equal(arr[0]);
    });

    it('Left values should be greater then parent', () => {
        let current = tree.root;

        while(current.left) {
            expect(current.value).to.be.above(current.left.value);
            current = current.left;
        }
    });

    it('Right values should be smaller then parent', () => {
        let current = tree.root;

        while(current.right) {
            expect(current.value).to.be.below(current.right.value);
            current = current.right;
        }
    });

    it(`Check if tree contains ${randomValue}`, ()=>{
        expect(tree.contains(randomValue)).to.be.true;
    });

    it(`Searching node by value ${randomValue}`, () => {
        expect(tree.find(randomValue).value).to.equal(randomValue);
    });

    it(`Remove random element ${randomValue}`, () => {
        expect(tree.size()).to.equal(arr.length);
        tree.remove(randomValue);
        expect(tree.size()).to.equal(arr.length - 1);
    });
});

