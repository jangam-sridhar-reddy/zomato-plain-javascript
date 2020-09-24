import searchFood from "./searchFood";
import showResults from "./showResults";

const filterSearch = async (obj) => {
  const response = await obj;
  const searchObject = response.exportObject;
  const filterInputElement = response.filterSearchInput;
  const filterSearchButton = response.filterSearchButton;
  const resultElement = response.filterResultElement;

  const searchFunction = () => {
    const value = filterInputElement.value.trim();

    const filteredObj = searchObject.filter((item) => {
      let valueLower = value.toLowerCase();
      let itemLower = item.restaurant.name.toLowerCase();
      return itemLower === valueLower;
    });

    resultElement.innerHTML = "";
    if (filteredObj.length > 0) {
      resultElement.innerHTML = showResults(filteredObj);
    } else if (value === "" || value === undefined) {
      resultElement.innerHTML = showResults(searchObject);
    } else {
      resultElement.textContent = "Please search another";
    }
  };

  filterSearchButton.addEventListener("click", searchFunction);
};

export default filterSearch;
