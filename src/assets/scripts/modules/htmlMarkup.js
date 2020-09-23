
import showResults from "./showResults";

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

                ${showResults(responses)}
                
              
                
                <!-- end of single item -->
                
            </div>

        </div>
    `


    return html;
}

export default resultHtml;