import client from "./client.js";

const hostApp = "vvvd.surge.stevie.top";

async function requestLoginAccessExample() {
    try {
        const mySky = await client.loadMySky(hostApp, {
            // debug: true
        });

        const loggedIn = await mySky.checkLogin();

        // Add button action for login.
        if (!loggedIn) {
            document
                .body
                .addEventListener("click", (e) => {
                    mySky.requestLoginAccess();
                });
        }
    } catch (error) {
        console.log(error);
    }
}
requestLoginAccessExample()
