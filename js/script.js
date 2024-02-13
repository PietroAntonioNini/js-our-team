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
    console.log(card);

    //creo un elemento per il nome per ogni membro
    const name = document.createElement("h2");
    name.textContent = members.nome;
    card.appendChild(name);
    console.log(name);
}