const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength: () => {
    return chainMaker.chain.length;
  },
  addLink: (value) => {
    chainMaker.chain.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink: (position) => {

    console.log(chainMaker.chain.length);
    if (position >= chainMaker.chain.length || position <= 0 || typeof (position) != "number")
      throw new Error('You can\'t remove incorrect link!');

    [chainMaker.chain[chainMaker.chain.length - 1], chainMaker.chain[position - 1]] = [chainMaker.chain[position - 1], chainMaker.chain[chainMaker.chain.length - 1]];
    chainMaker.chain.pop();
    return chainMaker;

  },
  reverseChain: () => {
    chainMaker.chain.reverse();
    return chainMaker;
  },
  finishChain: () => {
    return chainMaker.chain.map((e, i) => {
      if (i == 0)
        return e;
      return '~~' + e;
    }).join('');
  }


}

module.exports = {
  chainMaker
};
