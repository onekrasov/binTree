'use strict';

class TreeNode {
    constructor(value, left, right) {
        Object.assign(this, { v: value, l: left, r: right });
    }

    get value() {
        return this.v;
    }

    get right() {
        return this.r;
    }

    get left() {
        return this.l;
    }
}

module.exports = TreeNode;