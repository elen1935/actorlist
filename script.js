fetch('C:/Users/Usuario/Desktop/web_3/11_coding_visual/actorlist/actors.json')
            .then(res => res.json())
            .then(handleData)

function handleData(data) {
    console.log(data)
    data.forEach(showActors)
}

function showActors(actor) {
    console.log(actor)
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector("li").textContent = actor.fullname;
    //clone.querySelector(".brand").textContent = actor.bike_brand;

    document.querySelector("main").appendChild(clone);
}