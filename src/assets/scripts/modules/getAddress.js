
const key = "AIzaSyCjQhpez-Yj1kN4n5lY4viJkZF6DSNRM0c";
const url = "https://maps.googleapis.com/maps/api/geocode/json?";

const address = async (pos) => {
    const response = await fetch(`${url}latlng=${pos.lat},${pos.long}&key=${key}`);
    const data = await response.json();
    const result = data;
    // console.log(data);

    return result;
}

export default address;