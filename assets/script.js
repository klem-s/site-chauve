// Génère des avatars de crânes chauves illustrés en SVG (aucune photo réelle utilisée).

function svgHead({ skin = "#f2c29b", shade = "#d9a67a", glasses, mustache, beard, earring, bandana, tie }) {
  return `
  <svg viewBox="0 0 120 130" width="96" height="104" xmlns="http://www.w3.org/2000/svg">
    ${tie ? `<rect x="40" y="110" width="40" height="20" fill="${tie}" />` : ""}
    <ellipse cx="60" cy="118" rx="34" ry="14" fill="#333b44" opacity="0.08" />
    <circle cx="60" cy="60" r="42" fill="${skin}" />
    <path d="M18 60 a42 42 0 0 1 84 0" fill="${shade}" opacity="0.35" />
    ${bandana ? `<path d="M18 48 a42 42 0 0 1 84 0 l-4 4 a38 38 0 0 0 -76 0 Z" fill="${bandana}" />` : ""}
    <ellipse cx="22" cy="62" rx="6" ry="9" fill="${skin}" />
    <ellipse cx="98" cy="62" rx="6" ry="9" fill="${skin}" />
    ${earring ? `<circle cx="98" cy="74" r="2.6" fill="#d4af37" />` : ""}
    <ellipse cx="44" cy="58" rx="5" ry="6" fill="#2b2420" />
    <ellipse cx="76" cy="58" rx="5" ry="6" fill="#2b2420" />
    <path d="M36 48 q8 -6 16 0" stroke="#2b2420" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M68 48 q8 -6 16 0" stroke="#2b2420" stroke-width="2.5" fill="none" stroke-linecap="round" />
    ${glasses ? `
      <rect x="32" y="52" width="24" height="16" rx="6" fill="none" stroke="#2b2420" stroke-width="3" />
      <rect x="64" y="52" width="24" height="16" rx="6" fill="none" stroke="#2b2420" stroke-width="3" />
      <line x1="56" y1="58" x2="64" y2="58" stroke="#2b2420" stroke-width="3" />
    ` : ""}
    <path d="M48 78 q12 10 24 0" stroke="#8a5a3a" stroke-width="3.5" fill="none" stroke-linecap="round" />
    ${mustache ? `<path d="M42 76 q18 10 36 0 q-4 8 -18 6 q-14 2 -18 -6 Z" fill="#3a2b22" />` : ""}
    ${beard ? `<path d="M22 70 a38 38 0 0 0 76 0 l-4 20 a34 40 0 0 1 -68 0 Z" fill="#3a2b22" opacity="0.9" />` : ""}
    <ellipse cx="42" cy="40" rx="14" ry="7" fill="#fff" opacity="0.35" />
  </svg>`;
}

const CELEBS = [
  { name: "Dwayne Johnson", role: "Acteur & catcheur", fact: "Son crâne rasé est devenu une véritable marque de fabrique à Hollywood.", photo: "dwayne-johnson.jpg", credit: "Harald Krichel, CC BY-SA 4.0" },
  { name: "Bruce Willis", role: "Acteur", fact: "Révélé chauve dès les années 90, il a transformé un défi capillaire en style iconique.", photo: "bruce-willis.jpg", credit: "Gage Skidmore, CC BY-SA 3.0" },
  { name: "Vin Diesel", role: "Acteur", fact: "Chauve assumé depuis ses débuts, il n'a jamais cherché à le cacher.", photo: "vin-diesel.jpg", credit: "Gage Skidmore, CC BY-SA 3.0" },
  { name: "Jason Statham", role: "Acteur", fact: "Ancien plongeur olympique, il garde le crâne rasé depuis toute sa carrière d'action.", photo: "jason-statham.jpg", credit: "MTV International, CC BY 3.0" },
  { name: "Zinédine Zidane", role: "Footballeur", fact: "Le milieu de terrain français a dégagé son crâne jusqu'au sommet du foot mondial.", photo: "zinedine-zidane.jpg", credit: "Hadi Abyar, CC BY 4.0" },
  { name: "Patrick Stewart", role: "Acteur", fact: "Chauve depuis l'âge de 19 ans, il en a fait un atout de charisme au théâtre et à l'écran.", photo: "patrick-stewart.jpg", credit: "Gage Skidmore, CC BY-SA 3.0" },
  { name: "Michael Jordan", role: "Basketteur", fact: "Icône du basket, son crâne rasé est aussi reconnaissable que son maillot numéro 23.", photo: "michael-jordan.jpg", credit: "Zach Catanzareti Photo, CC BY 2.0" },
  { name: "Mahatma Gandhi", role: "Figure historique", fact: "Son crâne rasé symbolisait la simplicité et le renoncement matériel.", photo: "mahatma-gandhi.jpg", credit: "Elliott & Fry, domaine public" },
];

const GALLERY = [
  { label: "Le Classique", skin: "#f2c29b", shade: "#d9a67a" },
  { label: "Le Barbu", skin: "#c68642", shade: "#8d5524", beard: true },
  { label: "Le Lunettes", skin: "#ffdbac", shade: "#e0b48c", glasses: true },
  { label: "Le Moustachu", skin: "#e0a872", shade: "#b67f4a", mustache: true },
  { label: "Le Bandana", skin: "#c68642", shade: "#8d5524", bandana: "#d97b3f" },
  { label: "Le Costard", skin: "#f2c29b", shade: "#d9a67a", tie: "#2f4f6f" },
  { label: "Le Zen", skin: "#8d5524", shade: "#6b3f17" },
  { label: "Le Sportif", skin: "#ffdbac", shade: "#e0b48c", earring: true },
  { label: "L'Élégant", skin: "#e0a872", shade: "#b67f4a", glasses: true, tie: "#5a3b6f" },
  { label: "Le Sage", skin: "#f2c29b", shade: "#d9a67a", beard: true, glasses: true },
];

function renderCelebs() {
  const grid = document.getElementById("celeb-grid");
  grid.innerHTML = CELEBS.map(c => `
    <div class="celeb-card">
      <div class="photo-wrap">
        <img src="assets/photos/${c.photo}" alt="${c.name}" loading="lazy" width="160" height="160" />
      </div>
      <h3>${c.name}</h3>
      <div class="role">${c.role}</div>
      <p class="fact">${c.fact}</p>
      <p class="credit">📷 ${c.credit}</p>
    </div>
  `).join("");
}

function renderGallery() {
  const grid = document.getElementById("gallery");
  grid.innerHTML = GALLERY.map(g => `
    <div class="avatar-wrap" title="${g.label}">${svgHead(g)}</div>
  `).join("");
}

renderCelebs();
renderGallery();
document.getElementById("year").textContent = new Date().getFullYear();
