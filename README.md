# level2-A1

## Blog 1 (question-3): Difference between `any`, `unknown`, and `never` types in TypeScript.

`any` : কীওয়ার্ডটি ব্যবহার করা হয় যখন টাইপ যেকোনো কিছু হতে পারে এবং TypeScript এটির টাইপ Checking বন্ধ করে দেয়। যার ফলে যেকোনো oparetion করা করা যায় এবং TS কোনো error দেখায় না।

`unknown` : এটি `any` এর মতো তবে নিরাপদ, কারণ এটি Type narrowing করতে বাধ্য করে যার ফলে unknown type error ছাড়া ব্যবহার করা যায়।

`never` : এটি এমন এক value কে বুজায় যা কখনো হবে না। যখন type checking করি এবং সকল টাইপ চেক করা শেষ হয় তখন এটি বেবহার হয়। আবার এমন কোনো function যা কখনো কোনো কিছু return করবেন তখন এটি বেবহার হয়।

## Blog 2 (question-4): use of `enums` in TypeScript with example of a numeric and string enum.

code এ sensitive constant সরাসরি ব্যবহার করলে maintainability কমে, যার কারণে নাম যুক্ত দ্রুবক ব্যবহার করতে `enums` ব্যবহার করা হয়।   

Numaric Enums:
```
enum Direction {
    Up = 1,
    Down = 0,
    Left = 3,
    Right = 4,
}
```
String Enums:
```
enum UserRole {
    Admin = "ADMIN",
    Manager = "MANAGER",
    User = "USER",
    Guest = "GUEST",
}
```