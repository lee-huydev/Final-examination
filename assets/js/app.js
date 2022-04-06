// Bai 1
const input = ['Binh', 'Hung', 'Phuoc', 'Cao', 'Khanh'];
function allLongestStrings(inputArray) {
   let value = inputArray[0].length;
   input.forEach((e) => {
      if (e.length > value) {
         value = e.length;
      }
   });
   const newValue = value - 1;
   let output = [];
   inputArray.forEach((e) => {
      if (e.length > newValue) {
         output.push(e);
      }
   });
   return output;
}
console.log(allLongestStrings(input));

// Bai 2
const input2 = [60, 40, 55, 75, 64];
function alternatingSums(a) {
   let sumTeam1 = 0;
   let sumTeam2 = 0;
   const output = [];
   for (let i = 0; i < input2.length; i++) {
      if (i % 2) {
         sumTeam2 += input2[i];
      } else {
         sumTeam1 += input2[i];
      }
   }
   output.push(sumTeam1);
   output.push(sumTeam2);
   return output;
}
console.log(alternatingSums(input2));

// Bai 3
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const color = ['#000000', '	#FF0000', '#FFFF00', '	#00FFFF', '#808080'];
const gradient = [
   {
      id: 1,
      color1: 'red',
      color2: 'yellow',
   },
   {
      id: 2,
      color1: '#b06ab3',
      color2: '#4568dc',
   },
   {
      id: 3,
      color1: '#021b79',
      color2: '#b06ab3',
   },
   {
      id: 4,
      color1: '#43c6ac',
      color2: '#f8ffae',
   },
   {
      id: 5,
      color1: '#dce35b',
      color2: '#45b649',
   },
   {
      id: 6,
      color1: '#dbe6f6',
      color2: '#c5796d',
   },
];
let i = 0;
$('.click').addEventListener('click', () => {
   $('#main').style.backgroundImage = '';
   $('#main').style.backgroundColor = color[i];
   i++;
   if (i === color.length) {
      i = 0;
   }
});

const colorBtn = $$('.gradient');
colorBtn.forEach((e) => {
   e.addEventListener('click', () => {
      let spans = document.getElementsByTagName('span');
      for (let span of spans) {
         span.innerHTML = '';
      }
      const id = e.getAttribute('id');
      gradient.forEach((d) => {
         if (Number(id) === d.id) {
            const child = e.childNodes;
            $(
               '#main'
            ).style.backgroundImage = `linear-gradient(to bottom right,${d.color1},${d.color2}`;
            child[1].innerHTML = `${d.color1}, ${d.color2}`;
         }
      });
   });
});
