//PROGRAMMA INFO UTENTI DEL TEAM

//creo un object con i vari utenti
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
];

//con ciclo for creo una lista a cui aggiungo i membri e le proprie info
for (const members of teamMembers) {

    //creo un elemento HTML per ogni membro del team
    const card = document.createElement("div");
    card.classList.add("card");

    //creo un elemento per il nome per ogni membro
    const name = document.createElement("h2");
    name.textContent = members.nome;
    card.appendChild(name);

    //creo un elemento per il ruolo per ogni membro
    const role = document.createElement("span");
    role.textContent = members.ruolo;
    card.appendChild(role);
    console.log(role);

    //creo un elemento per l'immagine per ogni membro
    const img = document.createElement("img");
    img.src = `../img/${members.foto}`;
    img.alt = members.nome;
    card.appendChild(img);

    //aggiungo la card al container
    const container = document.getElementById("team-members");
    container.appendChild(card);
}