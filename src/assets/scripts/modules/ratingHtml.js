// ${ratingHtml(response.restaurant.user_rating.aggregate_rating)} 

const ratingHtml = (rating) => {
    
    let html , full = [], empty = [];
    switch(true) {
        case (rating >= 0 && rating < 1):
            full.length = 0;
            empty.length = 4;
            html =  printStarHtml(rating,full, empty);
            // fun1
            break;
        case (rating >= 1 && rating < 2):
            full.length = 1;
            empty.length = 3;
            html = printStarHtml(rating,full, empty);
            // fun2
            break;
        case (rating >= 2 && rating < 3):
            full.length = 2;
            empty.length = 2;
            html = printStarHtml(rating,full, empty);
            // fun3
            break;
        case (rating >= 3 && rating < 4):
            full.length = 3;
            empty.length = 1;
            html = printStarHtml(rating,full, empty);
            // fun4
            break;
        case (rating >= 4 && rating < 5):
            full.length = 4;
            empty.length = 0;
            html = printStarHtml(rating,full, empty);
            // fun4
            break;
        
        default:
            full.length = 5;
            empty.length = 0;
            html = printStarHtml(rating,full, empty);
            // fun5
            break;
    }

    return html;

}

/*
0 - 1
1 - 2
2 - 3
3 - 4
4 - 5
*/

function printStarHtml (rat, full, empty) {
    let totalHTML = "";
    if(rat >= 0 && rat < 5) {

        let fullStarHtml = "", halfStarHtml = "", emptyStarHtml = "";
        let fullStarLength = full.length;
        let emptyStarLength = empty.length;
        let rating = rat;
        let splitted = rating.split(".");
        // let len = splitted[0];
        for(var i = 0; i < fullStarLength; i++){
            fullStarHtml += `<svg class="filter__icon">
                                <use xlink:href="#sprite_icon-star-full"></use>
                            </svg>` ;
        }
        
        for(var j = 0; j < emptyStarLength; j++ ) {
            emptyStarHtml +=  `<svg class="filter__icon">
                                <use xlink:href="#sprite_icon-star-empty"></use>
                            </svg>`;
        }



       
        if(splitted.length > 1 && splitted[1] > 0) {
            halfStarHtml += ` <svg class="filter__icon">
                            <use xlink:href="#sprite_icon-star-half"></use>
                        </svg>`;
        } else if(splitted.length > 1 && splitted[1] <= 0)  {
            emptyStarHtml +=  `<svg class="filter__icon">
                                <use xlink:href="#sprite_icon-star-empty"></use>
                            </svg>`;

        } else if(splitted.length === 1) {
            emptyStarHtml +=  `<svg class="filter__icon">
                                <use xlink:href="#sprite_icon-star-empty"></use>
                            </svg>`;
        }

        // emptyStar = `<svg class="filter__icon">
        //             <use xlink:href="#sprite_icon-star-empty"></use>
        //         </svg>`;
        
        totalHTML += `${fullStarHtml}${halfStarHtml}${emptyStarHtml}`;

        
    } else if(rat == 5) {
        totalHTML += `
                <svg class="filter__icon">
                    <use xlink:href="#sprite_icon-star-full"></use>
                </svg>
                <svg class="filter__icon">
                    <use xlink:href="#sprite_icon-star-full"></use>
                </svg>
                <svg class="filter__icon">
                    <use xlink:href="#sprite_icon-star-full"></use>
                </svg>
                <svg class="filter__icon">
                    <use xlink:href="#sprite_icon-star-full"></use>
                </svg>
                <svg class="filter__icon">
                    <use xlink:href="#sprite_icon-star-full"></use>
                </svg>
        
        `
    }


    return totalHTML;
    
    
}


export default ratingHtml;