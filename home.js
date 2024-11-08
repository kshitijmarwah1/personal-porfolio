console.log("hello");

const about = document.getElementById("About");
const contact = document.getElementById("Contact");
const home = document.getElementById("Home");
let main_cont = document.getElementById("container");
console.log(main_cont);
// Reloads Home
home.addEventListener("click",function(){
    fetch('./index.html')
    .then(Response => Response.text())
    .then(data => {
        // Condition to ensure no duplicate divs are created
        if (!document.getElementById("social")){
        const parser = new DOMParser();
        const parsed = parser.parseFromString(data, 'text/html');
        const container = parsed.querySelector('.main-container');
        let social = parsed.querySelector('.social');
        let duct = document.getElementById('main-container');
        duct.outerHTML=container.outerHTML+social.outerHTML;
        }
    })

})
// About Page, dynamic HTML 
about.addEventListener("click", function(){
    let duct = document.getElementById("main-container");
    main_cont.removeChild(duct);
    if (document.getElementById("social")){
        main_cont.removeChild(document.getElementById("social"));
    }

    const rediv = document.createElement("div");
    rediv.classList = "jsabout";
    rediv.id = "main-container";

    const heading = document.createElement("h1");
    heading.innerText = "About Me";

    const para = document.createElement("p");
    para.innerText = "Lorem ipsum , dolor sit amet consectetur adipisicing elit. Distinctio asperiores impedit mollitia vero quae minima labore natus ad assumenda incidunt! Facere sequi nihil earum fuga ex aut praesentium ipsum odit?";

    para.classList = "jspara";
    rediv.appendChild(heading);
    rediv.appendChild(para);
    main_cont.appendChild(rediv);
});
// Contact Page, Dynamic HTML
contact.addEventListener("click", function(){
    let duct = document.getElementById("main-container");
    main_cont.removeChild(duct);
    if (document.getElementById("social")){
        main_cont.removeChild(document.getElementById("social"));
    }

    const rediv = document.createElement("div");
    rediv.classList = "Contact";
    rediv.id = "main-container";
    
    const heading = document.createElement("h1");
    heading.innerText = "Contact Me";
    heading.classList = "heading-contact"

    const contactDetails = document.createElement("div");
    contactDetails.classList = "contact-details";

    const phone = document.createElement("div");
    phone.classList = "contact-item";
    phone.innerHTML = `
        <ion-icon name="call"></ion-icon>
        <h3>Phone</h3>
        <p>+91 8802888123</p>
        <p>Monday - Friday from 7am - 5pm</p>
    `;
    

    const location = document.createElement("div");
    location.classList = "contact-item";
    location.innerHTML = `
        <ion-icon name="home"></ion-icon>
        <h3>Location</h3>
        <p>Hari Nagar Mig Flats</p>
        <p> F1 - 12/D </p>
    `;
    

    const email = document.createElement("div");
    email.classList = "contact-item";
    email.innerHTML = `
        <ion-icon name="mail"></ion-icon>
        <h3>Email</h3>
        <p>kmarwah@gmail.com</p>
        <p>Contact me anytime!</p>
    `;

    contactDetails.appendChild(phone);
    contactDetails.appendChild(location);
    contactDetails.appendChild(email);
    rediv.appendChild(heading);
    rediv.appendChild(contactDetails);
    main_cont.appendChild(rediv);
});