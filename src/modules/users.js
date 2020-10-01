import axios from 'axios'

const users = {
    async fetchGHSearch() {
        let usersData = await axios.get("/data");
        return usersData.data.data;
    }
}

export default users;