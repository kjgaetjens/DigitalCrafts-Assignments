class User {
    constructor(username, password) {
        this.username = username
        this.password = password
        this.trips = []
        this.deletedTrips = []
    }
}

module.exports = User