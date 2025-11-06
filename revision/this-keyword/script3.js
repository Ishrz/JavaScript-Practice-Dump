let form=document.querySelector("form");
let username=document.querySelector("#name");
let role=document.querySelector("#role");
let bio=document.querySelector("#bio");
let url=document.querySelector("#url");

let card=document.querySelector("#card");

let userManager={
    users:[],
    init: function(){
        form.addEventListener("submit", this.bindFnc.bind(this));
    },

    bindFnc:function(evt){
        evt.preventDefault();
        this.addUser();
        console.dir("form submitted");
        console.log(this.users);
    },
    addUser:function(){
        this.users.push({
            name:username.value,
            role:role.value,
            bio:bio.value,
            url: url.value,
        });
        form.reset();
        this.renderUi();
    },
    renderUi: function(){

        document.querySelector(".card-container").innerHTML="";

        this.users.forEach(function(user) {

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Image: <img>
    const img = document.createElement('img');
    
    // Name: <h3>
    const nameHeading = document.createElement('h3');
    
    // Role: <h6>
    const roleHeading = document.createElement('h6');
    
    // Bio: <p>
    const bioParagraph = document.createElement('p');

    // --- 2. Set content, attributes, and classes ---
    
    // Set Image attributes
    img.src = user.url;
    
    // Set Text Content
    nameHeading.textContent = user.name;
    roleHeading.textContent = user.role;
    bioParagraph.textContent = user.bio;

    // --- 3. Assemble the final structure (Append Children) ---

    // Append all children to the main card container (cardDiv)
    cardDiv.appendChild(img);
    cardDiv.appendChild(nameHeading);
    cardDiv.appendChild(roleHeading);
    cardDiv.appendChild(bioParagraph);
    
    // Return the completed, assembled element
    // return cardDiv;
    document.querySelector(".card-container").appendChild(cardDiv);

        })
    },


    removeUser: function(){

    },
};

userManager.init();