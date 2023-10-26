// const bubbleSorting = (array) => {
//     let steps = array.length - 1;
//     let flag = true;
//     do {
//         flag = false;
//         for (let i = 0; i < steps; i += 1) {
//           if (array[i] > array[i + 1]) {
//             const temp = array[i];
//             array[i] = array[i + 1];
//             array[i + 1] = temp; 
//             flag = true;
//           }
//           steps -= 1;
//         }
//     } while (flag);
//     return array;
// };

// console.log(bubbleSorting([5, 2, 9, 7, 1, 4, 8, 3, 6, 10]));

// class LinkedListNode{
//     constructor(value, next) {
//       this.value = value;
//       this.next = next;
//     }
  
//     toString(cb) {
//       return cb ? cb(this.value) : `${this.value}`;
//     }
//   }
  
// class LinkedList{
//     constructor(head, tail){
//       this.head = head;
//       this.tail = tail;
//     }
    
//     // метод создание узла и вставка в начало
//     prepend(value) {
//       const newNode = new LinkedListNode(value, this.head);
  
//       this.head = newNode;
  
//       if(!this.tail) {
//         this.tail = newNode;
//       }
  
//       return this;
//     }

//     append(value) {
//         const newNode = new LinkedListNode(value);
    
//         if (!this.tail || !this.head) {
//           this.head = newNode;
//           this.tail = newNode;
        
//           return this;
//         }
    
//         this.tail.next = newNode;
//         this.tail = newNode;
//         return this;
//       }
//   }

const v = 3;
const a = 1;

const t1 = 125;

const t = t1 / 6;

const v0 = v - 1.6;

const s = (v0 * t) + ((a * t ** 2) / 2);

console.log('Перемещение = ', s);