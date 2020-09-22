import axios from "axios";
import resultHtml from "./htmlMarkup";
import getLocationDetails from "./getLocationDetails";
import address from "./getAddress";

const key = "c8b7517158b8cfd5ab52392f44c8a407";
const uri = "https://developers.zomato.com/api/v2.1/search?entity_id=";

const CallApi = async (serachValue) => {

    const response = await getLocationDetails();

    const fromUrl =  await  axios({
                        method: "GET",
                        url: `${uri}${response.placeId}&entity_type=subzone&q=${serachValue}&lat=${response.lat}&lon=${response.long}&radius=1000`,
                        headers: {
                        "user-key": key,
                        "content-type": "application/json"
                        }
                    })
    
      console.log(fromUrl.data.restaurants[0].restaurant);
      console.log(fromUrl.data.restaurants[1].restaurant);
      const ht = resultHtml(fromUrl.data.restaurants);

      const display = document.querySelector(".display");
    
      display.parentElement.removeChild(display);
    
      document.querySelector("#container").innerHTML = ht;
   
    

}


CallApi("chicken");
            // console.log(x);




