export class Action {

  
    constructor(    public name: string,
      public objective: string,
      public beneficiaries: number,
      public responsible?: Member,
      public creationDate?: Date,
      public isSuccess: boolean = false) {
      this.name = name;
      this.objective = objective;
      this.beneficiaries = beneficiaries;
      
      this.creationDate = new Date();
      this.isSuccess = false;
    }
  }
  
  export class Member {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  