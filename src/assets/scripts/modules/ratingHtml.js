

const ratingHtml = (rating) => {
    let html ;
    switch(true) {
        case (rating > 0 && rating <= 1):
            html =  printStarHtml(rating);
            // fun1
            break;
        case (rating > 1 && rating <= 2):
            html = printStarHtml(rating);
            // fun2
            break;
        case (rating > 2 && rating <= 3):
            html = printStarHtml(rating);
            // fun3
            break;
        case (rating > 3 && rating <= 4):
            html = printStarHtml(rating);
            // fun4
            break;
        case (rating > 4 && rating <= 5):
            html = printStarHtml(rating);
            // fun4
            break;
        default:
            html = printStarHtml(rating);
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

function printStarHtml (rating) {
    let totalHTML = "";
    if(rating > 0 && rating < 5) {
        let fullStar, halfStar = "", emptyStar;
        let num = rating;
        let splitted = num.split(".");
        let len = splitted[0];
        let arr = [];
        for(var i = 0; i < len;i++){
            arr.push("arr");
        };
        fullStar = arr.map(() => `<svg class="filter__icon">
                                    <use xlink:href="#sprite_icon-star-full"></use>
                                </svg>`);
        if(splitted.length > 1 && splitted[1] > 0) {
            halfStar += ` <svg class="filter__icon">
                            <use xlink:href="#sprite_icon-star-half"></use>
                        </svg>`;
        }
        emptyStar = `<svg class="filter__icon">
                        <use xlink:href="#sprite_icon-star-empty"></use>
                    </svg>`;
        
        totalHTML += `${fullStar.join(",")}${halfStar}${emptyStar}`;

        
    } else if(rating >= 5) {
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