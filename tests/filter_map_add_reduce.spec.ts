import 'mocha';
import {expect} from 'chai';
import {FilterMapAddReduce} from '../src/filter_map_add_reduce'
import { MyAlgorithm } from '../src/abstrac_my_algorithm';

describe("Pruebas de Filter", () => {
    let myFilterMapReduce: FilterMapAddReduce;

    function clientCode(myAlgorithm: MyAlgorithm): number{
      return myAlgorithm.run();
    }


    it("AddReduce tras ejecutar  ", () => {
      const result = 0
      myFilterMapReduce = new FilterMapAddReduce((x: number): boolean => { return x%2 === 0}, (x: number): number => {return x*2}, [1,2,3,4])
      expect(clientCode(myFilterMapReduce)).to.be.equal(12);
    });

    it("AddReduce tras ejecutar  ", () => {
      const result = 0
      myFilterMapReduce = new FilterMapAddReduce((x: number): boolean => { return x%2 !== 0}, (x: number): number => {return x}, [1,2,3,4])
      expect(clientCode(myFilterMapReduce)).to.be.equal(4);
    });



    
});