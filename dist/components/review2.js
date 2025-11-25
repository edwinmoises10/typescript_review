"use strict";
/// INPUTS
const ispName = document.querySelector("#ispName");
const downloadSpeed = document.querySelector("#downloadSpeed");
const latencyMs = document.querySelector("#latencyMs");
///BUTTON
const getInformation = document.querySelector("#getInformation");
// let coreDB: arr = []
let getDbData = localStorage.getItem("coredb");
let coreDB = getDbData ? JSON.parse(getDbData) : [];
const getInformationISP = () => {
    if (getInformation) {
        getInformation.onclick = () => {
            let getStrInput = String(ispName === null || ispName === void 0 ? void 0 : ispName.value);
            let getDownloadInput = Number(downloadSpeed === null || downloadSpeed === void 0 ? void 0 : downloadSpeed.value);
            let getLatencyInput = Number(latencyMs === null || latencyMs === void 0 ? void 0 : latencyMs.value);
            let data = {
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
