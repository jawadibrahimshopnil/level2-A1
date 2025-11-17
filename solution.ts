
function formatValue(input: (string | number | boolean)): string | number | boolean {
   if (typeof input === "string") return input.toUpperCase();
   if (typeof input === "number") return input*10;
   if (typeof input === "boolean") return !input;

   return "Unexpected type for pr0blem-1. It must be a string, number, or boolean, as given in the assignment.";
} 

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
console.log(formatValue(false));
