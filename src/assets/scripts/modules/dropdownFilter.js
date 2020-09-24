import showResults from "./showResults";

const dropdownFilter = async (obj) => {
  const response = await obj;
  const searchObject = response.exportObject;
  const filterDropdown = response.filterSDropdown;
  const resultElement = response.filterResultElement;

  const onChangeFilter = () => {
    const text = filterDropdown.options[filterDropdown.selectedIndex].text;
    let value;
    if (text === "indian") {
      value = ["North Indian", "Lebanese"];
    } else if (text === "china") {
      value = ["Fast Food", "Chinese"];
    } else {
      resultElement.innerHTML = showResults(searchObject);
    }

    let valueLower = value.map((item) => item.toLowerCase());
    const mappedObj = searchObject.map((item) => {
      let itemLower = item.restaurant.cuisines
        .toLowerCase()
        .split(",")
        .map((it) => it.trim());
      return itemLower;
    });

    const filteredObj = mappedObj.map((item) => {
      const as = item.filter((it) => {
        return valueLower.includes(it);
      });

      return as;
    });

    const removedEmptyArray = [];

    filteredObj.forEach((element) => {
      if (element.length > 0) {
        removedEmptyArray.push(element);
      }
    });

    const rt = removedEmptyArray.map((el) => {
      let inner = "";

      for (var i = 0; i < el.length; i++) {
        if (i === el.length - 1) {
          inner += ` ${el[i]}`;
        } else {
          inner += `${el[i]},`;
        }
      }

      return inner;
    });

    const mapping = rt.map((inn) => inn.trim());

    const duplicateArray = (arr) => {
      let newArr = [];
      let arrLength = arr.length;
      for (var i = 0; i < arrLength; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i]);
        }
      }

      return newArr;
    };

    const removeDuplicatItems = duplicateArray(mapping);

    const cuisinesListArray = searchObject.map((item) => {
      return item.restaurant.cuisines.toLowerCase();
    });

    let cuisinesListArrayOutput = [];
    removeDuplicatItems.forEach((items) => {
      const item = items;
      const output = cuisinesListArray.filter((val) => {
        return val.indexOf(item) !== -1;
      });
      cuisinesListArrayOutput = cuisinesListArrayOutput.concat(output);
    });
    console.log(cuisinesListArrayOutput);
    const concatedArray = duplicateArray(cuisinesListArrayOutput);
    console.log(concatedArray);

    const finalFilter = concatedArray.map((item) => {
      let itm = item.toLowerCase();
      const fn = searchObject.filter((items) => {
        const itemsLower = items.restaurant.cuisines.toLowerCase();

        return itemsLower === itm;
      });
      return fn;
    });

    const arr = [];
    finalFilter.forEach((item) => {
      if (item.length > 0) {
        item.forEach((item) => {
          arr.push(item);
        });
      }
    });

    resultElement.innerHTML = "";
    if (arr.length > 0) {
      resultElement.innerHTML = showResults(arr);
    } else {
      resultElement.textContent = "Please search another";
    }
  };

  filterDropdown.addEventListener("change", onChangeFilter);
};

export default dropdownFilter;
