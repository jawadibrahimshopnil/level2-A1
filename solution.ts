type FormatValueT = (input: string | number | boolean) => (string | number | boolean);

const formatValue: FormatValueT = (input) => {
   if (typeof input === "string") return input.toUpperCase();
   if (typeof input === "number") return input*10;
   if (typeof input === "boolean") return !input;
   
   throw new Error("Unexpected type for pr0blem-1. It must be a string, number or boolean, as given in the assignment");
}

const getLength = (input: (string | any[])): number => {
   if (typeof input === "string") return input.length;
   if (Array.isArray(input)) return input.length;

   throw new Error("Unexpected type for pr0blem-2. It must be a string or an array of any, as given in the assignment");
}

class Person {
   name:string;
   age:number;

   constructor(name:string, age:number){
      this.name = name;
      this.age = age;
   }

   getDetails():string{
      return `'Name: ${this.name}, Age: ${this.age}'`
   }

}

