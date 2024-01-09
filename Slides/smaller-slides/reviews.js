const reviews = [
    {
      id: 1,
      name: "",
      job: "",
      img: '',
      text: "",
    },
    {
      id: 2,
      name: '',
      job: '',
      img: '',
      text: ' ',
    },
    {
      id: 3,
      name: '',
      job: '',
      img: '',
      text: '',
    },
    {
      id: 4,
      name: '',
      job: '',
      img: '',
      text: ' ',
    },
  ];


const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('Info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('random-btn')


let currentItem = 0

window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name
    JSON.textContent =item.text;
});


function showPerson(person){
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.job
    job.textContent = item.job;
    info.textContent =item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;

    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem)
})

randomBtn.addEventListener('click', function () {
    console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})