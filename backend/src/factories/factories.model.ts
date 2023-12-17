export class Factory {
    public id: string;
    public name: string;
    public startDate: Date;
    public endDate: Date;
    public numberOfEmployee: number;
    public isFree : boolean;
  
    constructor(id: string, name: string, startDate: Date, endDate: Date, numberOfEmployee: number, isFree: boolean) {
      this.id = id;
      this.name = name;
      this.startDate = startDate;
      this.endDate = endDate;
      this.numberOfEmployee = numberOfEmployee;
      this.isFree = this.isFree;
    }
  }
  
  export interface IFactory {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    numberOfEmployee: number;
    isFree : boolean;
  }
  