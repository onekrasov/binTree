'use strict';

const Node = require('./treeNode');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Add a new element to the tree
     * @param value
     */
    add(value) {
        const node = new Node(value, null, null);

        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.l = node;
                    break;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (current.right === null) {
                    current.r = node;
                    break;
                } else {
                    current = current.right;
                }
            } else {
                break;
            }
        }
    }

    /**
     * Check if element exist in the tree
     * @param value
     * @returns {boolean}
     */
    contains(value) {
        let current = this.root;

        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }

    /**
     * Find tree node by value
     * @param value
     * @returns {Object} Tree node
     */
    find(value) {
        let current = this.root;

        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }

        return null;
    }

    /**
     * Remove tree node by value
     * @param value
     */
    remove(value) {
        const array = this.toArray();
        const index = array.indexOf(value);

        if (index > -1) {
            array.splice(index, 1);

            this.root = null;

            array.forEach(item => this.add(item));
        }
    }

    /**
     * Run through binary tree and run callback per node
     * @param {function} callback
     */
    traverse(callback) {
        const inOrder = node => {
            if (!node) {
                return;
            }

            if (node.left !== null) {
                inOrder(node.left);
            }

            if (node.right !== null) {
                inOrder(node.right);
            }

            callback.call(this, node);
        };

        inOrder(this.root);
    }

    /**
     * Get count of tree nodes
     * @returns {number}
     */
    size() {
        let length = 0;

        this.traverse(node => length++);

        return length;
    }

    /**
     * Convert tree to array
     * @returns {Array}
     */
    toArray() {
        const result = [];

        this.traverse(node => result.push(node.value));

        return result;
    }

    /**
     * Convert tree to string
     * @returns {string}
     */
    toString() {
        return this.toArray().toString();
    }
}

module.exports = BinarySearchTree;