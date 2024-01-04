# "Typescript for Beginners"

### Full Course - 17 Chapters

---

### Author Links

👋 Hello, I'm Dave Gray.

✅ [Check out my YouTube Channel with all of my tutorials](https://www.youtube.com/DaveGrayTeachesCode).

🚩 [Subscribe to my channel](https://bit.ly/3nGHmNn)

☕ [Buy Me A Coffee](https://buymeacoffee.com/DaveGray)

🚀 Follow Me:

- [Twitter](https://twitter.com/yesdavidgray)
- [LinkedIn](https://www.linkedin.com/in/davidagray/)
- [Blog](https://yesdavidgray.com)
- [Reddit](https://www.reddit.com/user/DaveOnEleven)

---

### Description

📺 [YouTube Playlist](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b) for this repository.

🚀 This repository shares ALL of the resources referenced during the Typescript for Beginners tutorial series.

- 👉 Chapters 1-10 introduce TypeScript fundamentals. 
- 👉 Chapters 12-17 cover Typescript with React. 

### 📚 Recommended Prerequisites
- 🔗 [JavaScript for Beginners Course](https://youtu.be/EfAl9bwzVZk)
- 🔗 [React for Beginners Course](https://youtu.be/RVFAyFWO4go)

---

### 🎓 Academic Honesty

**DO NOT COPY FOR AN ASSIGNMENT** - Avoid plagiarism and adhere to the spirit of this [Academic Honesty Policy](https://www.freecodecamp.org/news/academic-honesty-policy/).

---

### ⚙ Free Web Dev Tools
- 🔗 [Vite](https://vitejs.dev/)
- 🔗 [Google Chrome Web Browser](https://google.com/chrome/)
- 🔗 [Visual Studio Code (aka VS Code)](https://code.visualstudio.com/)
- 🔗 [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### 📚 References
- 🔗 [Typescript Official Site](https://www.typescriptlang.org/)
- 🔗 [Node.js & npm](https://nodejs.org/)
- 🔗 [Anders Hejlsberg, Creator of Typescript and C# Interview](https://dev.to/destrodevshow/typescript-and-c-both-created-by-the-same-person-named-anders-hejlsberg-42g4)
- 🔗 [Stackoverflow Survey Results](https://survey.stackoverflow.co/2022/#technology-most-popular-technologies)
- - 🔗 [TypeScript + React Cheatsheet](https://github.com/typescript-cheatsheets/react)
- 🔗 [React Official Site](https://reactjs.org/)
  
### 📚 Terminology
- 🔗 [MDN - Static Typing](https://developer.mozilla.org/en-US/docs/Glossary/Static_typing)
- 🔗 [MDN - Dynamic Typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)
- 🔗 [MDN - Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
- 🔗 [TypeScript - Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

---
### Notes
# Chapter-1 [ Start Here ]

- Created by Microsoft
- Andres Hejlsberg - Typescirpt & C#
- Strictly typed
- Build - compiled codes
- src - raw files eg . ts
- tsc [ts file name] -w
- tsc —init - Config file
- outDir rootDir for specifying folders of the ts and js file
- we can simply run tsc -w it will compile all files which is inside of the rootDir
- Normally compiles file which are not in src too
- FIX: go to ts config atlast create include array and include src
- versions js can also be modified "target": "es2016",
- noEmitOnError:true will not also compile if there is an error in the ts file , otherwise it will compile and give the js

# Chapter-2 [Basic Types]

- Strongly typed -ts, loosely typed - js
    
    but both have statically typed and dynamically typed languages
    
    js is dynamically typed - types are checked at run time
    
    ts is statically typed - types are checked at compile time
    
- string , number , boolean , any
- if it doesn’t knows the type it will make as any
- Union type - ( | )- assign or types for it

# Chapter-3 [Arrays & Objects]

## Arrays

- array.unshift()→ add element to the beginning of array
- let array1:string[] =[]
- let array2:(string | number )[]=[]
- ~~array1=array2~~ not acceptable
- array2=array1 - acceptable

## Tuples

- let myTuple:[string,number,boolean]→follows the order
- tuple can be assigned to the array
- but array can’t be assigned to tuple

## Objects

- let myObject:object, let myObject:{}
- let obj:{ prop1:number,prop2:string }
- type is used to create the type of obj or anything in advance
- at type (=) is used

```
type myobject**=**{
    name:string,
    id:number
}

let obj1:myobject={
    name:'harith',
    id:1
}
```

- can exist or undefined id?:number either its number or undefined (we dont add it in object it works)
- ?→used wherever the obj can be undefined
- Instead of type we can also use interface but no (=) needed,both works as the name

```jsx
interface myobject{
    name:string,
    id:number
}

let obj1:myobject={
    name:'harith',
    id:1
}
```

## Enums

- To create small set of predefined values
- It is the additional feauture provided by ts which is not available in js

### 💻 Source Code

- 🔗 [Chapter 1 - Introduction, Setup & Config](https://github.com/gitdagray/typescript-course/tree/main/lesson01)
- 🔗 [Chapter 2 - Basic Types](https://github.com/gitdagray/typescript-course/tree/main/lesson02)
- 🔗 [Chapter 3 - Arrays, Tuples, Objects & Enums](https://github.com/gitdagray/typescript-course/tree/main/lesson03)
- 🔗 [Chapter 4 - Type Aliases, Literals, Functions & Never Type](https://github.com/gitdagray/typescript-course/tree/main/lesson04)
- 🔗 [Chapter 5 - Type Assertions & Type Casting](https://github.com/gitdagray/typescript-course/tree/main/lesson05)
- 🔗 [Chapter 6 - Classes & Interfaces](https://github.com/gitdagray/typescript-course/tree/main/lesson06)
- 🔗 [Chapter 7 - Index Signatures & keyof Assertions](https://github.com/gitdagray/typescript-course/tree/main/lesson07)
- 🔗 [Chapter 8 - Generics](https://github.com/gitdagray/typescript-course/tree/main/lesson08)
- 🔗 [Chapter 9 - Utility Types](https://github.com/gitdagray/typescript-course/tree/main/lesson09)
- 🔗 Chapter 10 - Vite Introduction (_no source code_)
- 🔗 [Chapter 11 - Beginners Project / Challenges](https://github.com/gitdagray/typescript-course/tree/main/lesson11)
- 🔗 [Chapter 12 - React + Typescript Starter](https://github.com/gitdagray/typescript-course/tree/main/lesson12)
- 🔗 [Chapter 13 - React Hooks + Typescript](https://github.com/gitdagray/typescript-course/tree/main/lesson13)
- 🔗 [Chapter 14 - React useReducer + Typescript](https://github.com/gitdagray/typescript-course/tree/main/lesson14)
- 🔗 [Chapter 15 - React useContext + Typescript](https://github.com/gitdagray/typescript-course/tree/main/lesson15)
- 🔗 [Chapter 16 - React + Typescript Project - Part 1](https://github.com/gitdagray/typescript-course/tree/main/lesson16)


### 🎉 Bonus!
- 🔗 [TypeScript "as const" Assertions - Youtube Short](https://youtube.com/shorts/jEuIp5NU3TU)
