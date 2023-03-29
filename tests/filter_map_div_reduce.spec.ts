import 'mocha';
import {expect} from 'chai';
import {FilterMapDivReduce} from '../src/filter_map_div_reduce'
import { MyAlgorithm } from '../src/abstrac_my_algorithm';

describe("Pruebas de Filter", () => {
    let myFilterMapReduce: FilterMapDivReduce;

    function clientCode(myAlgorithm: MyAlgorithm): number{
      return myAlgorithm.run();
    }


    it("DivReduce tras ejecutar  ", () => {
      const result = 0
      myFilterMapReduce = new FilterMapDivReduce((x: number): boolean => { return x%2 === 0}, (x: number): number => {return x*2}, [1,2,3,4])
      expect(clientCode(myFilterMapReduce)).to.be.equal(2);
    });

    it("DivReduce tras ejecutar  ", () => {
      const result = 0
      myFilterMapReduce = new FilterMapDivReduce((x: number): boolean => { return x%2 !== 0}, (x: number): number => {return x}, [1,2,3,4])
      expect(clientCode(myFilterMapReduce)).to.be.equal(3);
    });



    
});