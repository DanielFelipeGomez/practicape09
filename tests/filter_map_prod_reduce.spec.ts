import 'mocha';
import {expect} from 'chai';
import {FilterMapProdReduce} from '../src/filter_map_prod_reduce'
import { MyAlgorithm } from '../src/abstrac_my_algorithm';

describe("Pruebas de Filter", () => {
    let myFilterMapReduce: FilterMapProdReduce;

    function clientCode(myAlgorithm: MyAlgorithm): number{
      return myAlgorithm.run();
    }


    it("ProdReduce tras ejecutar  ", () => {
      const result = 0
      myFilterMapReduce = new FilterMapProdReduce((x: number): boolean => { return x%2 === 0}, (x: number): number => {return x*2}, [1,2,3,4])
      expect(clientCode(myFilterMapReduce)).to.be.equal(32);
    });

    it("ProdReduce tras ejecutar  ", () => {
      const result = 0
      myFilterMapReduce = new FilterMapProdReduce((x: number): boolean => { return x%2 !== 0}, (x: number): number => {return x}, [1,2,3,4])
      expect(clientCode(myFilterMapReduce)).to.be.equal(3);
    });



    
});