
function formatValue(input: (string | number | boolean)): string | number | boolean {
   if (typeof input === "string") return input.toUpperCase();
   if (typeof input === "number") return input*10;
   return !input;
}