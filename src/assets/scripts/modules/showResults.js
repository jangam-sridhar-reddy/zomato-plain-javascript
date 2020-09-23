import ratingHtml from "./ratingHtml";
import image from "../../images/zomato-logo-2.png";

const showResults = (responses) => {
  const result = responses.map((response) => {
    return `<div class="result__item">
                    <div class="result__thumbnail">
                        <img src="${
                          response.restaurant.thumb === ""
                            ? image
                            : response.restaurant.thumb
                        }" alt="" class="result__photo">
                    </div>
                    <div class="result__content">
                        <h4 class="result__name">${
                          response.restaurant.name
                        }</h4>
                        <p class="result__cuisine">${
                          response.restaurant.cuisines
                        }</p>
                        <div class="result__description">
                            <div class="result__price">
                                <span>${
                                  response.restaurant.currency === "Rs."
                                    ? "&#8377;"
                                    : "&dollar;"
                                }</span>
                                <span>${
                                  response.restaurant.average_cost_for_two
                                }</span>
                            </div>
                            <div class="result__hours">
                                <!-- 6am – 11pm (Mon-Sun)-->
                                ${response.restaurant.timings}
                            </div>
                        </div>
                    </div>
                    <div class="result__rating">
                        ${ratingHtml(
                          response.restaurant.user_rating.aggregate_rating
                        )}  
                    </div>
                </div>`;
  });

  return result;
};


export default showResults;