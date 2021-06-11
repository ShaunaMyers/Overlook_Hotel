
const retrieveData = (path) => {
    return fetch(path)
        .then(response => response.json())
        .catch(err => console.log(`User API Error: ${err.message}`));
}

const updateData = (path, data) => {
    fetch(path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => checkForError(response))
        .catch(err => console.log(`User API Error: ${err.message}`));
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
        return retrieveData('http://localhost:3001/api/v1/users');
    },

    getBookingsData: () => {
        return retrieveData('http://localhost:3001/api/v1/ingredients');
    },

    getRoomsData: () => {
        return retrieveData('http://localhost:3001/api/v1/recipes');
    },
    // updateData functions will go here later...will invoke the updateData method (above)
    // and will pass in two args: the path and data
    updateBookingsData: (data) => {
        updateData('http://localhost:3001/api/v1/users', data);
    }

    updateCustomerData: (data) => {
        updateData('http://localhost:3001/api/v1/users', data);
    }
}

function getData() {
    return Promise.all([fetchRequests.getCustomerData(), fetchRequests.getBookingsData(), fetchRequests.getRoomsData()])
}

// Does checkForError need to be exported?

export default { retrieveData, updateData, checkForError, fetchRequests, getData };