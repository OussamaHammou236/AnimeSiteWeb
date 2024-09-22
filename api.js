const url = "https://api-anime-rouge.vercel.app/aniwatch/";


async function get_info(parm)
{
    // const res = await fetch(`https://api-anime-rouge.vercel.app/aniwatch/anime/${parm}`);
    // const data = await res.json();
    console.log(parm);
}


async function get_data() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.latestEpisodes[0]);
    for (let i in data.latestEpisodes)
    {
        document.getElementsByClassName("con1")[0].innerHTML += `
        <div class="anime">
            <img src=${data.latestEpisodes[i].img} style="width: 90%;height: 80%;  border-radius:20px;margin-top:5%;">
            <p>${data.latestEpisodes[i].name}</p> 
        </div>`;
    }
    for(let i in data.latestEpisodes)
        document.getElementsByClassName("anime")[i].addEventListener("click", () => get_info(data.latestEpisodes[i].id));

}   

get_data();

