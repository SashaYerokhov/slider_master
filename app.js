let content = document.querySelector('.card__content-text');
let namePerson = document.querySelector('.card__content-name');
let rolePerson = document.querySelector('.card__content-role');

let prevBtn = document.querySelector('.card__imges-nav-prev');
let nextBtn = document.querySelector('.card__imges-nav-next');

const imgPerson = document.querySelector('#img_person');


const persons = [
    {
        name: 'Tanya Sinclair',
        imgageUrl: './images/image-tanya.jpg',
        testimonial: '“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”',
        role: 'UX Engineer'
    },
    {
        name: 'John Tarkpor',
        imgageUrl: './images/image-john.jpg',
        testimonial: '“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”',
        role: 'Junior Front-end Developer'
    }
]

// console.log(persons[0].role);

const personInfo = () => {
    imgPerson.setAttribute('src', persons[imageIndex].imgageUrl);
    content.textContent = persons[imageIndex].testimonial;
    namePerson.textContent = persons[imageIndex].name;
    rolePerson.textContent = persons[imageIndex].role;
}

let imageIndex = 0;


prevBtn.addEventListener('click', () => {
    if (imageIndex === 0) {
        imageIndex = persons.length - 1
    } else {
        imageIndex--;
    }
    personInfo();
});

nextBtn.addEventListener('click', () => {
    if (imageIndex === persons.length - 1) {
        imageIndex = 0;
    } else {
        imageIndex++;
    }
    personInfo();
})