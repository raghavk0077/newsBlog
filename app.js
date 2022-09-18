let source = 'bbc-news';
let apiKey = '4d5a020f7b6e4b988b1ed46b10ea4e17';
let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

let newAccordion = document.getElementById("newsAccordion");

function getNews(){
    fetch(url).then(response => {
        return response.json();
        
    }).then(json => {
        console.log(json["articles"]);

        let articles = json.articles;
        let newsStr = '';
        articles.forEach(function(element, index){
            let news = `<div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index + 1}: </b> ${element["title"]}
                        </button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                    data-parent="#newsAccordion">
                    <div class="card-body">
                    ${element["content"]} <a href="${element["url"]}" target="_blank" >Read More Here</a>
                    </div>
                </div>
            </div>`;

            newsStr += news;
        });
        newAccordion.innerHTML = newsStr;
    });
}

getNews();