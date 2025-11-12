// 1. Select the main outer container (using a specific class)
const cardContainer = document.querySelector('.card-container');


// 2. Select the inner card element (using the 'card' class)
const innerCard = document.querySelector('.card');
console.log('Inner Card:', innerCard);

// 3. Select the profile image element
const profileImage = document.querySelector('.card img');
profileImage.src("https://images.unsplash.com/photo-1762368229295-81f2742fb8a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387")

// 4. Select the name/title div (the first div inside .p-8)
const nameElement = document.querySelector('.p-8 .uppercase');
    nameElement.textContent = 'Alex Smith';

const roleLink = document.querySelector('.p-8 a');
    roleLink.textContent = 'Senior UX Designer';

// 6. Select the short bio paragraph (<p> tag)
const bioParagraph = document.querySelector('.p-8 p');

innerCard.appendChild(profileImage)
innerCard.appendChild(nameElement)
innerCard.appendChild(roleLink)
innerCard.appendChild(bioParagraph);

cardContainer.append(innerCard)



// 1. Select the main outer container (using a specific class)
const cardContainer = document.querySelector('.card-container');
// You can manipulate the container's appearance:

console.log('Container Class List:', cardContainer.classList);

// 2. Select the inner card element (using the 'card' class)
const innerCard = document.querySelector('.card');
console.log('Inner Card:', innerCard);
// You can manipulate the inner card's appearance:
innerCard.classList.remove('bg-gray-800'); // Example: Remove old inner background


// 3. Select the profile image element
const profileImage = document.querySelector('.card img');
// ***CORRECTION: Use .src property, not a function***
profileImage.src = "https://images.unsplash.com/photo-1544723795-3fb6469e712a?q=80&w=200&h=200&fit=crop"; // Set new image source
profileImage.alt = 'New Profile Image Alt Text';
// Example: Change image sizing classes
profileImage.classList.remove('h-30', 'w-full');
profileImage.classList.add('h-40', 'w-40', 'rounded-full', 'mx-auto');
console.log('Profile Image Source:', profileImage.src);

// 4. Select the name/title div
const nameElement = document.querySelector('.p-8 .uppercase');
nameElement.textContent = 'Alex Smith';
// Example: Change name element color class
nameElement.classList.remove('text-indigo-500');
nameElement.classList.add('text-green-500');
console.log('Name Text:', nameElement.textContent);

// 5. Select the role link (the <a> tag)
const roleLink = document.querySelector('.p-8 a');
roleLink.textContent = 'Senior UX Designer';
console.log('Role Text:', roleLink.textContent);

// 6. Select the short bio paragraph (<p> tag)
const bioParagraph = document.querySelector('.p-8 p');
bioParagraph.textContent = 'A passionate designer focused on creating intuitive user experiences across web and mobile platforms.';
// Example: Add a margin utility
bioParagraph.classList.add('italic');
console.log('Bio Text:', bioParagraph.textContent);


// ❌ REMOVAL OF APPENDCHILD ERRORS:
// The elements already exist within the 'innerCard' in your HTML.
// Using appendChild here would attempt to move them out of their original
// structure (like moving the image out of the .md:shrink-0 wrapper)
// and append them to the 'innerCard' directly, which breaks the layout.
//
// If you are modifying an existing card, **do not** use appendChild.
// If you are creating a new card, you must first use document.createElement().
//
// innerCard.appendChild(profileImage) // ❌ Incorrect for existing structure
// cardContainer.append(innerCard) // ❌ InnerCard is already inside the container.