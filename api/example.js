import axios from "axios";

export async function getUser() {
        return await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
}