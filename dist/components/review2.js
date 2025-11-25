import Swal from "sweetalert2";
/// INPUTS
const ispName = document.querySelector("#ispName");
const downloadSpeed = document.querySelector("#downloadSpeed");
const latencyMs = document.querySelector("#latencyMs");
///BUTTON
const getInformation = document.querySelector("#getInformation");
const btClearDB = document.querySelector("#btClearDB");
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
                }
                else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel) {
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
    let result = "";
    const testData = document.querySelector("#testData");
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
const getStatus = (latencyValue) => {
    if (latencyValue >= 50) {
        let statusLatencyMs = "Stable Latency";
        return statusLatencyMs;
    }
    else {
        let statusLatencyMs1 = "Unstable Latency";
        return statusLatencyMs1;
    }
};
getInformationISP();
getTestData();
clearDB();
