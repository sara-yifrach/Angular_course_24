export class Student{
    
   name: string="";
   subject: string="";
   average:number=0;
   userId?:Number=-1;
   StudentPriority?:Number=-1;
   /**
    *
    */
   constructor(Gname:string) {
      this.name = Gname;   
   }
}

  
