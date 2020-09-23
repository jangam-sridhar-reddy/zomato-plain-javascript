import callApi from "./callApi";


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

        return getResults(value);


    }


    bannerButton.addEventListener("click", searching);
}

export default searchFood;