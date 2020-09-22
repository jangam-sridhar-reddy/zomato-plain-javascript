import ratingHtml from "./ratingHtml";
import image from "../../images/zomato-logo-2.png"

const resultHtml = (responses) => {
    const html = `
        <div class="output">
            <div class="filter">
                <div class="filter__search">
                    <input type="text" class="filter__search__input" placeholder="search food">
                    <button type="button" class="filter__search__button">search</button>
                </div>
                <div class="filter__cuisines border-top">
                    <select name="" class="filter__dropdown" id="">
                        <option value="0">select cuisine</option>
                        <option value="1">indian</option>
                        <option value="2">china</option>
                    </select>
                </div>
                <div class="filter__ratings border-top">
                    <h2 class="filter__heading">rating</h2>
                    <ul class="filter__list">
                        <li class="filter__item">
                            <input type="radio"class="filter__radio"  name="rating" value="five" id="">
                            <ul class="filter__star__list">
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                            </ul>
                        </li>
                        <li class="filter__item">
                            <input type="radio"class="filter__radio"  name="rating" value="four" id="">
                            <ul class="filter__star__list">
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                            </ul>
                        </li>
                        <li class="filter__item">
                            <input type="radio"class="filter__radio"  name="rating" value="three" id="">
                            <ul class="filter__star__list">
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                            </ul>
                        </li>
                        <li class="filter__item">
                            <input type="radio"class="filter__radio"  name="rating" value="two" id="">
                            <ul class="filter__star__list">
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                            </ul>
                        </li>
                        <li class="filter__item">
                            <input type="radio"class="filter__radio"  name="rating" value="one" id="">
                            <ul class="filter__star__list">
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-full"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                                <li class="filter__star__item">
                                    <svg class="filter__icon">
                                        <use xlink:href="#sprite_icon-star-empty"></use>
                                    </svg>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="result">
                <!-- single item -->
                
                ${responses.map(response => {
                    
                    return `<div class="result__item">
                                <div class="result__thumbnail">
                                    <img src="${(response.restaurant.thumb === "") ? image : response.restaurant.thumb }" alt="" class="result__photo">
                                </div>
                                <div class="result__content">
                                    <h4 class="result__name">${response.restaurant.name}</h4>
                                    <p class="result__cuisine">${response.restaurant.cuisines}</p>
                                    <div class="result__description">
                                        <div class="result__price">
                                            <span>${(response.restaurant.currency === "Rs.") ? "&#8377;" : "&dollar;"}</span>
                                            <span>${response.restaurant.average_cost_for_two}</span>
                                        </div>
                                        <div class="result__hours">
                                            <!-- 6am – 11pm (Mon-Sun)-->
                                            ${response.restaurant.timings}
                                        </div>
                                    </div>
                                </div>
                                <div class="result__rating">
                                    ${ratingHtml(response.restaurant.user_rating.aggregate_rating)} 
                                </div>
                            </div>`
                })}
                
                <!-- end of single item -->
                
            </div>

        </div>
    `


    return html;
}

export default resultHtml;