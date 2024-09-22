const url = "https://api-anime-rouge.vercel.app/aniwatch/";

async function get_data() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.latestEpisodes[0]);
    for (let i in data.latestEpisodes)
    {
        document.getElementsByClassName("con1")[0].innerHTML += `
        <div class="anime">
            <img src=${data.latestEpisodes[i].img} style="width: 90%;height: 80%;">
            <h2></h2>
        </div>`;
    }
}

get_data();


