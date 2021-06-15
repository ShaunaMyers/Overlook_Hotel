
const retrieveData = (path) => {
    return fetch(path)
        .then(response => response.json())
        .catch(err => console.log(`Retrieve Data Error: ${err.message}`));
}

const updateData = (path, data) => {
    fetch(path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => checkForError(response))
        .then(response => console.log(response))
        .catch(err => console.log(`Update Data Error: ${err.message}`));
}

const checkForError = (response) => {
    if (!response.ok) {
        throw new Error('Something went wrong, please try again,')
    } else {
        return response.json()
    }
}


const fetchRequests = {

    getCustomerData: () => {
        return retrieveData('http://localhost:3001/api/v1/customers');
    },

    getBookingsData: () => {
        return retrieveData('http://localhost:3001/api/v1/bookings');
    },

    getRoomsData: () => {
        return retrieveData('http://localhost:3001/api/v1/rooms');
    },

    updateBookingsData: (data) => {
        updateData('http://localhost:3001/api/v1/bookings', data);
    }
}

function getData() {
    return Promise.all([fetchRequests.getCustomerData(), fetchRequests.getBookingsData(), fetchRequests.getRoomsData()])
}

export default { retrieveData, updateData, checkForError, fetchRequests, getData };
