import getAddress from "./getAddress";


    const getLocationDetails = async  () => {
        if(navigator.geolocation) {
            let position, lat, long;
            position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            });        
            position = await position.coords;     
            lat = position.latitude;
            long = position.longitude;
            position = {lat, long}
            const response = await getAddress(position);
            const data = response.results[5];
            const placeId  = data.place_id;
            return {placeId, lat, long};
    } else {
        alert("Your browser not supporting");
        
    }


    


    
};

export default getLocationDetails;