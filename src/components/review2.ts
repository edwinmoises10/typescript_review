import Swal from "sweetalert2";

/// INPUTS
const ispName = document.querySelector<HTMLInputElement>("#ispName");
const downloadSpeed =
  document.querySelector<HTMLInputElement>("#downloadSpeed");
const latencyMs = document.querySelector<HTMLInputElement>("#latencyMs");
///BUTTON
const getInformation =
  document.querySelector<HTMLButtonElement>("#getInformation");
const btClearDB = document.querySelector<HTMLButtonElement>("#btClearDB");

//ARRAY

// type arr = object[]; Caja negra vacia se que es obj pero no se que
//proiedades tiene

type arr = NetworkTest[]; // Sera un objeto pero con las siguientes
//caracteristicas

type NetworkTest = {
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

      let data: NetworkTest = {
        internetServiceProvider: getStrInput,
        downloadSpeedMbps: getDownloadInput,
        latencyMs: getLatencyInput,
      };
      coreDB.push(data);
      getTestData();
      localStorage.setItem("coredb", JSON.stringify(coreDB));

      // ¡Limpiamos los inputs!
      if (ispName && downloadSpeed && latencyMs) {
        ispName.value = "";
        downloadSpeed.value = "";
        latencyMs.value = "";
      }
    };
  }
};

const clearDB = () => {
  if (btClearDB) {
    btClearDB.onclick = () => {
      if (coreDB.length == 0) {
        Swal.fire("Core DB Clear");
        return;
      }

      console.log("Click DB ");

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure to delete DB Users?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("coredb");
            coreDB.length = 0;
            getTestData();
            coreDB = [];

            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your DB has been deleted.",
              icon: "success",
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your DB is safe :)",
              icon: "error",
            });
          }
        });
    };
  }
};

function getTestData() {
  type result = string;
  let result: result = "";

  const testData = document.querySelector<HTMLTableElement>("#testData");

  coreDB.forEach((test) => {
    result += `
    <tr>
        <td>${test.internetServiceProvider}</td>
        <td>${test.downloadSpeedMbps}</td>
        <td>${test.latencyMs}</td>
        <td>${getStatus(test.latencyMs)}</td>
    </tr>
        `;
  });
  if (testData) {
    testData.innerHTML = result;
  }
}

const getStatus = (latencyValue: number) => {
  type stable = "Stable Latency";
  type unstable = "Unstable Latency";
  type statusLatency = stable | unstable;

  if (latencyValue >= 50) {
    let statusLatencyMs: statusLatency = "Stable Latency";
    return statusLatencyMs;
  } else {
    let statusLatencyMs1: statusLatency = "Unstable Latency";
    return statusLatencyMs1;
  }
};

getInformationISP();
getTestData();
clearDB();
