
import blockchain from "./Blockchain.js";
import Block from "./block.js";

const richCoin=new blockchain()

richCoin.addBlock(new Block(1,{price:3000000,villa:"casa1",etage:11},new Date(2022,8,3)))
richCoin.addBlock(new Block(1,{price:1500000,villa:"casa2",etage:1},new Date(2022,8,1)))
richCoin.addBlock(new Block(1,{price:2000000,villa:"rabat",etage:4},new Date(2022,8,4)))
richCoin.addBlock(new Block(1,{price:2000000,villa:"errachidia",etage:3},new Date(2022,8,5)))


console.log(JSON.stringify(richCoin,null,4))

console.log("Blockchain is valid : ", richCoin.verifyBlockchain())

richCoin.chain[2].data = {villa: "REACT", price: 4000000,etage:2}

console.log(JSON.stringify(richCoin, null, 4))

console.log("Blockchain is valid : ", richCoin.verifyBlockchain())