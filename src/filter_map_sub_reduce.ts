import { MyAlgorithm } from "./abstrac_my_algorithm";

/**
 * Concrete classes have to implement all abstract operations
 * and could override some operations with a default behaviour
 */
export class FilterMapSubReduce extends MyAlgorithm {
  
  constructor(protected filterLogic: (x: number)=> boolean,
  protected mapLogic: (x: number)=> number,public numberList: number[]) {
    super(filterLogic, mapLogic, numberList);
  }

  
  
  protected reduceList() {
    let reduceResult = 0;
    this.numberList.forEach((elem) => {
      reduceResult -= elem;
    })
    this.numberList = [reduceResult]
    return reduceResult  

  }

}