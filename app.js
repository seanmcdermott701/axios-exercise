const key = 'lpRHlFR6hBdmF3PXV123daajW0dz0Aph';
const form = document.querySelector("#searchForm");
const container = document.querySelector("#container");
const removeBtn = document.querySelector('#removeGifs');


const searchGif = async (q) => {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}`);
    console.log(res);
    let link = res.data.data[0].images.downsized.url;
    const newGif = document.createElement('img');
    newGif.src = link;
    newGif.class = 'gif';
    container.append(newGif);
};

const removeAllGifs = () => {
    container.innerHTML = '';
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let term = e.target[0].value;
    console.log(searchGif(term));

});

removeBtn.addEventListener('click', removeAllGifs);