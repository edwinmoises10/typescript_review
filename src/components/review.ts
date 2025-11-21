//types

type UserID = string | number;

let usernameID: UserID;
usernameID = "EdwinMoisesOña";
console.log(usernameID);

usernameID = 1234;
console.log(usernameID);

usernameID = "Luis Hernandez";
console.log(usernameID);

`
 <input id="userInformation" placeholder="Type your name" type="text">
 <button id="saveInformation" >Save Information</button>
`;

const userData = document.getElementById("userInformation") as HTMLInputElement;
const saveData = document.getElementById(
  "saveInformation"
) as HTMLButtonElement;

const storeData = localStorage.getItem("userInfo");

type user = string[];
let user_container: user = storeData ? JSON.parse(storeData) : [];
// user_container = ['Juan', 'Luis', 'Adrian']

if (userData && saveData) {
  saveData.onclick = () => {
    user_container.push(userData.value);
    console.log(user_container);
    userData.value = "";
    localStorage.setItem("userInfo", JSON.stringify(user_container));
  };
}

type Message = string;

console.log(`User Loaded : ${user_container}`);

const storeDataLS = document.getElementById("storeDataLS");

let message: Message;

if (storeDataLS) {
  message = "";
  user_container.forEach((person) => {
    message += `
        
        <tr>
        <th> Name </th>
        <td>${person.charAt(0).toUpperCase()+ person.slice(1).toLowerCase()} </td>
        </tr>

        `;
  });

  storeDataLS.innerHTML = message;
}
