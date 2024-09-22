
async function search_anime(anime) 
{
    const formattedAnime = anime.trim().replace(/\s+/g, '+');
    const url1 = `https://api-anime-rouge.vercel.app/aniwatch/search?keyword=${formattedAnime}`;
    const res = await fetch(url1);
    const data = await res.json();
    return data;
}

async function onsubmitw() {
    fname = document.forms[0].fname.value;
    try
    {
        const data = await search_anime(fname);
        document.getElementsByClassName("con1")[0].style.display = "none"; 
        document.getElementsByClassName("con")[0].style = "margin-top: 30px; margin-right: 5px;";
        for (let i = 0; i < data.animes.length; i++)
            document.getElementsByClassName("con")[0].innerHTML += `
            <img src="${data.animes[i].img}" class="anime-img"
            style="padding: 10px; border-radius: 30px;" >`;
    } 
    catch (error)
    {
        console.error('Error fetching anime data:', error);
    }
}
