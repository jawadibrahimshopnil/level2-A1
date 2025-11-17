type FormatValueT = (input: string | number | boolean) => (string | number | boolean);

const formatValue: FormatValueT = (input) => {
   if (typeof input === "string") return input.toUpperCase();
   if (typeof input === "number") return input*10;
   if (typeof input === "boolean") return !input;
   
   throw new Error("Unexpected type for pr0blem-1. It must be string, number or boolean, as given in the assignment");
}

const getLength = (input: (string | any[])): number => {
   if (typeof input === "string") return input.length;
   if (Array.isArray(input)) return input.length;

   throw new Error("Unexpected type for pr0blem-2. It must be string or array of any, as given in the assignment");
}
