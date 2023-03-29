import { MyAlgorithm } from "./abstrac_my_algorithm";

/**
 * Concrete classes have to implement all abstract operations
 * and could override some operations with a default behaviour
 */
export class FilterMapProdReduce extends MyAlgorithm {
  
  constructor(protected filterLogic: (x: number)=> boolean,
  protected mapLogic: (x: number)=> number,public numberList: number[]) {
    super(filterLogic, mapLogic, numberList);
  }

  
  
  protected reduceList() {
    let reduceResult = 1;
    this.numberList.forEach((elem) => {
      reduceResult *= elem;
    })
    this.numberList = [reduceResult] 
    return reduceResult  

  }

}

function clientCode(myAlgorithm: MyAlgorithm) {
    myAlgorithm.run();
  }
  
  clientCode(new FilterMapProdReduce((x: number): boolean => { return x%2 === 0}, (x: number): number => {return x*2}, [1,2,3,4]));
  