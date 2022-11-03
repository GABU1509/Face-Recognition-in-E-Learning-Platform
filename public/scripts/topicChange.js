let contents = document.querySelectorAll('#contents > ul > li');
let links = {
    "bfs" : "7ffDUDjwz5E&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=12",
    "a*" : "tvAh0JZF2YE&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=15",
    "ao*" : "u_TE42-uWD0&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=17",
    "minmax" : "Ntu8nNBL28o&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=19",
    "alphabeta" : "dEs_kbvu_0s&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=20",
    "statespacesearch" : "E5jVBqe59EE&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=3",
    "uninformedandinformed" : "gZpUcsB9TFc&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=4",
    "dfs" : "f8luGFRtshY&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=6",
    "fuzzylogic" : "vof2vhfqoBo&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=29",
    "nlp" : "bPpwZxasJo0&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=31",
    "cfs" : "AgyCSmDVk5s&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&index=34",
    "primarykey" : "Tp37HXfekNo&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=9",
    "candidatekey" : "mMxjKFiIKxs&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=8",
    "foreignkey" : "UyqpQ3D2yCw&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=10",
    "ermodel" : "gbVev8RuZLg&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=14",
    "normalization" : "5GDTIUVlHB8&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=20",
    "joins" : "zYH-e6tUYbw&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=38",
    "relationalalgebra" : "4YilEjkNPrQ&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=44",
    "sqlstatements" : "323H_mOOWQ4&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=52"
}

contents.forEach(content =>{
    content.addEventListener('click', ()=>{
        let topic = content.innerHTML.split(" ").join("").toLowerCase();
        let vid = document.getElementById('video');
        for(var i in links){
            if(i==topic){
                vid.src = 'https://www.youtube.com/embed/'+links[i].split("&")[0];
                
            }
        }
    })
})