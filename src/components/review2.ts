/// INPUTS
const ispName = document.querySelector<HTMLInputElement>("#ispName");
const downloadSpeed =
  document.querySelector<HTMLInputElement>("#downloadSpeed");
const latencyMs = document.querySelector<HTMLInputElement>("#latencyMs");
///BUTTON
const getInformation =
  document.querySelector<HTMLButtonElement>("#getInformation");

//ARRAY

type arr = object[];

type getElements = {
  internetServiceProvider: string;
  downloadSpeedMbps: number;
  latencyMs: number;
};

// let coreDB: arr = []

let getDbData = localStorage.getItem("coredb");
let coreDB: arr = getDbData ? JSON.parse(getDbData) : [];

const getInformationISP = () => {
  if (getInformation) {
    getInformation.onclick = () => {
        
      let getStrInput = String(ispName?.value);
      let getDownloadInput = Number(downloadSpeed?.value);
      let getLatencyInput = Number(latencyMs?.value);

      let data: getElements = {
        internetServiceProvider: getStrInput,
        downloadSpeedMbps: getDownloadInput,
        latencyMs: getLatencyInput,
      };
      coreDB.push(data);
      localStorage.setItem("coredb", JSON.stringify(coreDB));
      console.log(coreDB);
    };
  }
};

getInformationISP();
