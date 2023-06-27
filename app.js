let array = [];

function DataArray(imgName, imgSource, imgAlt, pop, cap, reg) {
  let object = { imgName, imgSource, imgAlt, pop, cap, reg };
  array.push(object);
}
console.log(array);

function displaycard(response) {
  let display = document.getElementById("display");
  display.innerHTML = "";
  for (let i = 0; i < response.length; i++) {
    let divcontent = document.createElement("div");
    let divcontent1 = document.createElement("div");
    let image = document.createElement("img");
    let imageName = document.createElement("p");
    let populationValue = document.createElement("p");
    let capitalValue = document.createElement("p");
    let regionValue = document.createElement("p");
    let source = response[i]?.flags?.png ? response[i].flags.png : "";
    imageName.innerHTML = response[i]?.name?.common
      ? response[i]?.name?.common
      : "Error";

    populationValue.innerHTML = response[i].population;
    capitalValue.innerHTML = response[i].capital;
    regionValue.innerHTML = response[i].region;
    let name1 = response[i].name.common;
    let source1 = response[i].flags.png;
    let alt = response[i].flags.alt;
    let population = `Population :${response[i].population}`;
    let capital = response[i].capital;
    let region = response[i].region;

    DataArray(name1, source1, alt, population, capital, region);
    image.width = 250;
    image.height = 150;
    image.src = source;
    image.style.borderTopStyle = "10px";
    image.style.marginLeft = "40px";
    imageName.style.textAlign = "center";
    populationValue.style.textAlign = "center";
    capitalValue.style.textAlign = "center";
    regionValue.style.textAlign = "center";
    divcontent.style.border = "1px solid black";
    divcontent.style.borderRadius = "5px";
    divcontent.style.backgroundColor = "#00DFA2";
    divcontent.appendChild(image);
    divcontent.append(imageName);
    divcontent.append(populationValue);
    divcontent.append(capitalValue);
    divcontent.append(regionValue);
    divcontent1.appendChild(divcontent);
    display.appendChild(divcontent1);
  }
}

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  flagDetails();
});
const flagDetails = async () => {
  // console.log("hello");
  try {
    let responseData = await fetch("https://restcountries.com/v3.1/all");
    let response = await responseData.json();
    console.log("hie1");
    displaycard(response);
    console.log("hie");

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("input", (event) => {
  if (event.target == searchHere) {
    //console.log("hie2")
    displayUsers();
  }
});

const displayUsers = () => {
  let search = document.getElementById("searchHere");
  let searchValue = search.value;
  let load = array;
  let flagDisplay = load.filter((eventdata) => {
    if (eventdata.imgName.toLowerCase().includes(searchValue.toLowerCase())) {
      return eventdata;
    }
  });
  displaycard1(flagDisplay);
};
function displaycard1(data) {
  let display = document.getElementById("display");
  display.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let divcontent = document.createElement("div");
    let divcontent1 = document.createElement("div");
    let image = document.createElement("img");
    let imageName = document.createElement("p");
    let populationValue = document.createElement("p");
    let capitalValue = document.createElement("p");
    let regionValue = document.createElement("p");
    image.src = data[i].imgSource;
    imageName.innerHTML = data[i].imgName;
    populationValue.innerHTML = data[i].pop;
    capitalValue.innerHTML = data[i].cap;
    regionValue.innerHTML = data[i].reg;
    image.width = 200;
    image.height = 150;
    image.style.marginLeft = "55px";

    imageName.style.textAlign = "center";
    populationValue.style.textAlign = "center";
    capitalValue.style.textAlign = "center";
    regionValue.style.textAlign = "center";
    divcontent.style.border = "1px solid";
    divcontent.style.borderRadius = "20px";
    divcontent.style.backgroundColor = "grey";

    divcontent.appendChild(image);
    divcontent.append(imageName);

    divcontent.append(populationValue);
    divcontent.append(capitalValue);
    divcontent.append(regionValue);
    divcontent1.appendChild(divcontent);
    display.append(divcontent1);
  }
}

const displaycard2 = (response) => {
  let display = document.getElementById("display");
  display.innerHTML = "";
  for (let i = 0; i < response.length; i++) {
    let divcontent = document.createElement("div");
    let divcontent1 = document.createElement("div");
    let image = document.createElement("img");
    let imageName = document.createElement("p");
    let populationValue = document.createElement("p");
    let capitalValue = document.createElement("p");
    let regionValue = document.createElement("p");
    let source = response[i].imgSource;
    imageName.innerHTML = response[i].imgName;

    populationValue.innerHTML = response[i].pop;
    capitalValue.innerHTML = response[i].cap;
    regionValue.innerHTML = response[i].reg;

    image.width = 250;
    image.height = 150;
    image.src = source;
    image.style.marginLeft = "20px";
    imageName.style.textAlign = "center";
    populationValue.style.textAlign = "center";
    capitalValue.style.textAlign = "center";
    regionValue.style.textAlign = "center";
    divcontent.style.border = "1px solid";
    divcontent.style.borderRadius = "2px";
    divcontent.style.backgroundColor = "grey";
    divcontent.appendChild(image);
    divcontent.append(imageName);
    divcontent.append(populationValue);
    divcontent.append(capitalValue);
    divcontent.append(regionValue);
    divcontent1.appendChild(divcontent);
    display.appendChild(divcontent1);
  }
};

document.querySelector("#select-option").addEventListener("change", (event) => {
  event.preventDefault();
  console.log("kl");
  let sortValue = document.getElementById("select-option").value;
  switch (sortValue) {
    case "nameAsc":
      nameAsending(array);
      break;
    case "nameDesc":
      nameDescinding(array);
      break;
    case "populationAsc":
      populationAsending(array);
      break;
    case "populationDesc":
      populationDescinding(array);
      break;
    default:
      break;
  }
});
function nameAsending(array) {
  array.sort((a, b) => a.imgName.localeCompare(b.imgName));
  displaycard2(array);
}
function nameDescinding(array) {
  console.log("hello");

  array.sort((a, b) => b.imgName.localeCompare(a.imgName));
  displaycard2(array);
}
function populationAsending(array) {
  array.sort((a, b) => a.pop - b.pop);
  displaycard2(array);
}
function populationDescinding(array) {
  array.sort((a, b) => b.pop - a.pop);
  displaycard2(array);
}
