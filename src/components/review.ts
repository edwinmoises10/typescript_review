// types
type UserID = string | number;

let usernameID: UserID;
usernameID = "EdwinMoisesOña";
console.log(usernameID);

usernameID = 1234;
console.log(usernameID);

usernameID = "Luis Hernandez";
console.log(usernameID);

// Elementos del DOM (Simulados o existentes)
// Nota: Asumo que el HTML está presente en tu index.html

const userData = document.getElementById("userInformation") as HTMLInputElement;
const saveData = document.getElementById("saveInformation") as HTMLButtonElement;
const storeDataLS = document.getElementById("storeDataLS");

// Recuperación de datos
const storeData = localStorage.getItem("userInfo");

type user = string[];
let user_container: user = storeData ? JSON.parse(storeData) : [];

type Message = string;
console.log(`User Loaded : ${user_container}`);

// --- CORRECCIÓN 1: Definir la función ANTES de usarla ---
const result = () => {
  if (storeDataLS) {
    let message: Message = ""; // Es mejor inicializarla aquí para limpiar el buffer
    user_container.forEach((person) => {
      message += `
        <tr>
          <th> Name </th>
          <td>${person.charAt(0).toUpperCase() + person.slice(1).toLowerCase()} </td>
        </tr>
      `;
    });
    storeDataLS.innerHTML = message;
  }
};

// Event Listeners
if (userData && saveData) {
  saveData.onclick = () => {
    user_container.push(userData.value);
    console.log(user_container);
    userData.value = "";
    localStorage.setItem("userInfo", JSON.stringify(user_container));
    
    // Llamada reactiva al actualizar
    result(); 
  };
}

// --- CORRECCIÓN 2: Renderizado Inicial ---
// Ejecutamos esto para que al dar F5 aparezcan los datos guardados
result();