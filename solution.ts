// 1
type FormatValueT = (input: string | number | boolean) => (string | number | boolean);

const formatValue: FormatValueT = (input) => {
   if (typeof input === "string") return input.toUpperCase();
   if (typeof input === "number") return input*10;
   if (typeof input === "boolean") return !input;
   
   throw new Error("Unexpected type for pr0blem-1. It must be a string, number or boolean, as given in the assignment");
}

// 2
const getLength = (input: (string | any[])): number => {
   if (typeof input === "string") return input.length;
   if (Array.isArray(input)) return input.length;

   throw new Error("Unexpected type for pr0blem-2. It must be a string or an array of any, as given in the assignment");
}

// 3
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

// 4
interface BookT {
   title: string;
   rating: number;
} 

function filterByRating(books: BookT[]): BookT[]{
   const filtered = books.filter(book=> book.rating >= 4);
   return filtered;
}

// 5
interface UsersT {
   id: number,
   name: string,
   email: string,
   isActive: boolean
}
type filterActiveUsersT = (users: UsersT[]) => UsersT[];

const filterActiveUsers: filterActiveUsersT = (users) =>{
   const filtered = users.filter(user => user.isActive);
   return filtered;
}

// 6
interface Book{
   title: string;
   author: string;
   publishedYear: number;
   isAvailable: boolean;
}

function printBookDetails(book: Book): void {
   const {title, author, publishedYear, isAvailable} = book;

   console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? "Yes" : "No"}`)
}

// 7

// 8
interface ProductT {
   name: string;
   price: number;
   quantity: number;
   discount?: number;
}

const calculateTotalPrice = (products: ProductT[]):number => {
   const totalProductPrice = products.reduce((total, current)=>{
      const {price, quantity, discount} = current;
      
      let productsPrice = price * quantity;

      if(discount){
         productsPrice = productsPrice - (productsPrice * (discount/100))
      }

      return total + productsPrice;

   }, 0);

   return totalProductPrice;
}