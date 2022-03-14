const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=254",
        "author": {
            "name": "Matteo Anselmo",
            "image": "https://unsplash.it/300/300?image=68"
        },
        "likes": 1,
        "created": "2022-03-14"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=625",
        "author": {
            "name": "Gianni Morandi",
            "image": "https://unsplash.it/300/300?image=99"
        },
        "likes": 18986,
        "created": "2021-12-31"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=584",
        "author": {
            "name": "Beppino Ammiocuggino",
            "image": null,
        },
        "likes": 63,
        "created": "2022-02-14"
    }
];




posts.forEach((element) =>{
    let imgLikeName ='';
    if(element.author.image == null){
        imgLikeName =  element.author.name.substring(0, 1) + element.author.name.substring((element.author.name).length -1).toUpperCase();
    }
    document.getElementById('container').innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${element.author.image}" alt="${imgLikeName}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${element.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${element.content}</div>
    <div class="post__image">
        <img src="${element.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div>            
    `;
    
})

const likeBtn = document.getElementsByClassName('likes__cta');
    
let miPiace = document.getElementsByClassName('like-button');
for(let i = 0; i < posts.length; i++){
    likeBtn[i].addEventListener('click' , function(){
        miPiace[i].classList.add('like-blu');
        posts[i].likes += 1;
        document.getElementById(`like-counter-${posts[i].id}`).innerHTML = posts[i].likes;
    })
}

