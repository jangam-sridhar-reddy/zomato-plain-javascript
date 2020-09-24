import axios from "axios";
import resultHtml from "./htmlMarkup";
import getLocationDetails from "./getLocationDetails";

const key = "c8b7517158b8cfd5ab52392f44c8a407";
const uri = "https://developers.zomato.com/api/v2.1/search?entity_id=";

const CallApi = async (serachValue) => {
  const response = await getLocationDetails();

  const fromUrl = await axios({
    method: "GET",
    url: `${uri}${response.placeId}&entity_type=subzone&q=${serachValue}&lat=${response.lat}&lon=${response.long}&radius=1000`,
    headers: {
      "user-key": key,
      "content-type": "application/json",
    },
  });

  const exportObject = fromUrl.data.restaurants;
  const ht = resultHtml(fromUrl.data.restaurants);

  const display = document.querySelector(".display");

  display.parentElement.removeChild(display);
  const container = document.querySelector("#container");

  container.innerHTML = ht;

  const filterSearchInput = container.querySelector(".filter__search__input");
  const filterSearchButton = container.querySelector(".filter__search__button");
  const filterSDropdown = container.querySelector(".filter__dropdown");
  const filterSRadioButtons = container.querySelectorAll(".filter__radio");
  const filterResultElement = container.querySelector(".result");

  return {
    filterSearchInput,
    filterSearchButton,
    filterSDropdown,
    filterSRadioButtons,
    exportObject,
    filterResultElement,
  };
};

export default CallApi;
