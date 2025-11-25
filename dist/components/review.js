"use strict";
let usernameID;
usernameID = "EdwinMoisesOña";
console.log(usernameID);
usernameID = 1234;
console.log(usernameID);
usernameID = "Luis Hernandez";
console.log(usernameID);
// Elementos del DOM (Simulados o existentes)
// Nota: Asumo que el HTML está presente en tu index.html
const userData = document.getElementById("userInformation");
const saveData = document.getElementById("saveInformation");
const storeDataLS = document.getElementById("storeDataLS");
// Recuperación de datos
const storeData = localStorage.getItem("userInfo");
let user_container = storeData ? JSON.parse(storeData) : [];
console.log(`User Loaded : ${user_container}`);
// --- CORRECCIÓN 1: Definir la función ANTES de usarla ---
const result = () => {
    if (storeDataLS) {
        let message = ""; // Es mejor inicializarla aquí para limpiar el buffer
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
const clearAll = document.getElementById("clearAll");
if (clearAll) {
    clearAll.onclick = () => {
        user_container.length = 0;
        result();
        console.log(`Sin data - Array:  ${user_container.length} Length`);
    };
}
