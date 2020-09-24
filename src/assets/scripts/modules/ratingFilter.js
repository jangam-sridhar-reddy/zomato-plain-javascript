import showResults from "./showResults";
const ratingFilter = async (obj) => {
  const response = await obj;
  const searchObject = response.exportObject;
  const radioButtons = response.filterSRadioButtons;
  const resultElement = response.filterResultElement;

  function radioButtonClicked() {
    const self = this;

    const elementValue = self.value.trim();
    let value;

    switch (true) {
      case elementValue === "five":
        value = "5";
        // value change
        break;
      case elementValue === "four":
        value = "4";
        // value change
        break;
      case elementValue === "three":
        value = "3";
        // value changed
        break;
      case elementValue === "two":
        value = "2";
        // value change
        break;
      case elementValue === "one":
        value = "1";
        // value change
        break;
    }

    const filterObj = searchObject.filter((item) => {
      const itemValue = item.restaurant.user_rating.aggregate_rating;
      if (value === "1") {
        return itemValue > "1" && itemValue < "2";
      } else if (value === "2") {
        return itemValue > "2" && itemValue < "3";
      } else if (value === "3") {
        return itemValue > "3" && itemValue < "4";
      } else if (value === "4") {
        return itemValue > "4" && itemValue < "5";
      } else if (value === "5") {
        return itemValue >= "5";
      }
    });

    resultElement.innerHTML = "";
    if (filterObj.length > 0) {
      resultElement.innerHTML = showResults(filterObj);
    } else {
      resultElement.textContent = "Please search another";
    }
  }

  radioButtons.forEach((element) =>
    element.addEventListener("click", radioButtonClicked)
  );
};

export default ratingFilter;
