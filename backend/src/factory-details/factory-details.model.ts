export class FactoryDetail {
    public id: string;
    public factoryId: string;
    public department: string;
    public startDate: Date;
    public endDate: Date;
    public usage: number;
    public usageFee: number;
    public discountedPrice: boolean;
  
    constructor(id: string, factoryId: string, department: string, startDate: Date, endDate: Date,usage: number, usageFee: number, discountedPrice: boolean) {
        this.id = id;
        this.factoryId = factoryId;
        this.department = department;
        this.startDate = startDate;
        this.endDate = endDate;
        this.usage= usage;
        this.usageFee = usageFee;
        this.discountedPrice = discountedPrice;
    }
  }
  
  export interface IFactoryDetail {
    id: string;
    factoryId: string;
    department: string;
    startDate: Date;
    endDate: Date;
    usage: number;
    usageFee: number;
    discountedPrice: boolean;
  }