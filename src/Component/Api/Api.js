import axios from "axios";

export const fetchAllData = async() => {

    try {
        const res = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
            return res.data.data;
      } catch (err) {
        console.error('Error fetching data:', err);
        return [];
      }
}

