import callApi from "./callApi";
import filterSearch from "./filterSearch";
import dropdownFilter from "./dropdownFilter";
import ratingFilter from "./ratingFilter";

const searchFood = () => {
  const bannerInput = document.querySelector(".banner__input");
  const bannerButton = document.querySelector(".banner__btn");

  const searching = (e) => {
    e.preventDefault();
    const value = bannerInput.value.trim();

    const getResults = async (val) => {
      const response = await callApi(val);
      const result = await response;
      return result;
    };
    const dataObject = getResults(value);

    filterSearch(dataObject);
    dropdownFilter(dataObject);
    ratingFilter(dataObject);
  };

  bannerButton.addEventListener("click", searching);
};

export default searchFood;
