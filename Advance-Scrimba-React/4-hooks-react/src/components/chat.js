export function createConnection(serverUrl, roomId) {
    return {
        connect() {
            console.log(
                `Connected to url: ${serverUrl} with Room Id: ${roomId}`,
            );
        },

        disconnect() {
            console.log(
                `Disconnected to url: ${serverUrl} with Room Id: ${roomId}`,
            );
        },
    };
}
