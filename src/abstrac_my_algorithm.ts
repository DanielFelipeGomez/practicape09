

export abstract class MyAlgorithm {
  
    constructor(protected filterLogic: (x: number)=> boolean,
    protected mapLogic: (x: number)=> number, protected numberList: number[]) {
    }
  
    /**
     * Template method that defines the skeleton of an My Algorithm.
     */
    public run(): number {

      console.log(this.beforeFilterList());

      //FIltramos la lista 
      this.filterList(this.filterLogic);

      console.log(this.afterFilterList());

      // Aplicamos map a la lista
      this.mapList(this.mapLogic);

      console.log(this.afterMapList());

      //reduce la lista
      const result = this.reduceList();

      console.log(this.afterReduceList());

      return result;
    }

    protected filterList(func: (x: number)=> boolean) {
      let new_list: number[] = [];
      this.numberList.forEach((elem) => {
        if (func(elem) === true) {
          new_list.push(elem)
        }
      })
      this.numberList = new_list;
    }

    protected mapList(func: (x: number)=> number) {
      let new_list: number[] = [];
      this.numberList.forEach((elem) => {
        new_list.push(func(elem))
      })
      this.numberList = new_list;
    }

    protected abstract reduceList(): number;

    //hooks

    public beforeFilterList(): string {
      return this.numberList.toString();
    }
  
    public afterFilterList(): string {
      return this.numberList.toString();
      
    }
  
    public afterMapList(): string {
      return this.numberList.toString();
      
    }
  
    public afterReduceList(): string {
      return this.numberList.toString();
    }
  
  }