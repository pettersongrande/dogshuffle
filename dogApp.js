//DOG IMGS


const input = document.getElementById('dogInput');
const form = document.getElementById('dogForm');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getDogByBreed(input.value);
    input.value = '';
});


async function getRandomDog(){

    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    const img = document.getElementById('dog');
    img.src = res.data.message;
    img.classList.add('imgBox')
    // console.log(res.data);

};

async function getDogByBreed(breed){
    try {
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;
        const res = await axios.get(url);
        const img = document.getElementById('dog');          
        img.src = res.data.message;
        img.classList.add('imgBox');
         
    } catch(e) {
        alert('BREED NOT FOUND! Meanwhile, Enjoy this random dog in your screen...');
        getRandomDog();
    }
};
///try and catch 



