export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const navRoot = document.getElementById("root"); // id del nav donde van los elemento ul y li
  const listUl = document.createElement("ul"); // creación de etiqueta ul
  data.forEach((vecino) => {
    const listLi = document.createElement("li"); // creación de etiqueta li
    listUl.appendChild(listLi);
    const divCard = document.createElement("div");
    divCard.className = "card";
    if (vecino.personality == "Gruñon") {
      divCard.classList.add("cardGrunon");
    }
    if (vecino.personality == "Deportista") {
      divCard.classList.add("cardDeportista");
    }
    if (vecino.personality == "Altanera") {
      divCard.classList.add("cardAltanera");
    }
    if (vecino.personality == "Dulce") {
      divCard.classList.add("cardDulce");
    }
    if (vecino.personality == "Perezoso") {
      divCard.classList.add("cardPerezoso");
    }
    if (vecino.personality == "Esnob") {
      divCard.classList.add("cardEsnob");
    }
    if (vecino.personality == "Vivaracha") {
      divCard.classList.add("cardVivaracha");
    }
    listLi.appendChild(divCard);

    const dl = document.createElement("dl");
    dl.setAttribute("itemscope", "");
    dl.setAttribute("itemtype", "https://schema.org/Game");
    divCard.appendChild(dl);

    const divHeader = document.createElement("div");
    divHeader.className = "headerCard";
    dl.appendChild(divHeader);

    const divBody = document.createElement("div");
    divBody.className = "bodyCard";
    dl.appendChild(divBody);

    const divFooter = document.createElement("div");
    divFooter.className = "footerCard";
    dl.appendChild(divFooter);

    // Cabecera
    const dtGender = document.createElement("dt");
    dtGender.innerText = "Genero";
    divHeader.appendChild(dtGender);

    const ddGender = document.createElement("dd");
    ddGender.setAttribute("itemprop", "gender");
    if (vecino.gender == "Femenino") {
      ddGender.classList.add("genderFemenino");
    } else {
      ddGender.classList.add("genderMasculino");
    }
    divHeader.appendChild(ddGender);

    const dtSign = document.createElement("dt");
    dtSign.innerText = "Signo";
    divHeader.appendChild(dtSign);

    const ddSign = document.createElement("dd");
    ddSign.setAttribute("itemprop", "zodiacSign");
    switch (vecino.facts.zodiacSign) {
      case "Libra":
        ddSign.classList.add("signLibra");
        break;
      case "Aries":
        ddSign.classList.add("signAries");
        break;
      case "Capricornio":
        ddSign.classList.add("signCapricornio");
        break;
      case "Acuario":
        ddSign.classList.add("signAcuario");
        break;
      case "Leo":
        ddSign.classList.add("signLeo");
        break;
      case "Virgo":
        ddSign.classList.add("signVirgo");
        break;
      case "Piscis":
        ddSign.classList.add("signPiscis");
        break;
      case "Cancer":
        ddSign.classList.add("signCancer");
        break;
      case "Sagitario":
        ddSign.classList.add("signSagitario");
        break;
      case "Escorpio":
        ddSign.classList.add("signEscorpio");
        break;
      case "Geminis":
        ddSign.classList.add("signLibra");
        break;
      case "Tauro":
        ddSign.classList.add("signTauro");
        break;
      default:
        break;
    }
    divHeader.appendChild(ddSign);

    // Body
    const image = document.createElement("img");
    image.setAttribute("alt", vecino.name);
    image.setAttribute("src", vecino.imageUrl);
    divBody.appendChild(image);

    // Footer
    const divInfo = document.createElement("div");
    divInfo.className = "information";
    divFooter.appendChild(divInfo);

    const dtSpecie = document.createElement("dt");
    dtSpecie.innerText = "Especie";
    divInfo.appendChild(dtSpecie);

    const ddSpecie = document.createElement("dd");
    ddSpecie.setAttribute("itemprop", "species");
    ddSpecie.innerText = vecino.species;
    divInfo.appendChild(ddSpecie);

    const dtName = document.createElement("dt");
    dtName.innerText = "Nombre";
    divInfo.appendChild(dtName);

    const ddName = document.createElement("dd");
    ddName.setAttribute("itemprop", "name");
    ddName.innerText = vecino.name;
    divInfo.appendChild(ddName);

    const dtPersonality = document.createElement("dt");
    dtPersonality.innerText = "Personalidad";
    divInfo.appendChild(dtPersonality);

    const ddPersonality = document.createElement("dd");
    ddPersonality.setAttribute("itemprop", "personality");
    let personality = vecino.personality;
    if (personality.length > 5) {
      personality = personality.substring(0, 5) + "..";
    }
    ddPersonality.innerText = personality;
    divInfo.appendChild(ddPersonality);

    const divDate = document.createElement("div");
    divDate.className = "date";
    divFooter.appendChild(divDate);

    const cake = document.createElement("img");
    cake.setAttribute("alt", "cake");
    cake.setAttribute("src", "./images/Pastel de cumple.png");
    divDate.appendChild(cake);

    const dtBirthday = document.createElement("dt");
    dtBirthday.innerText = "Cumpleaños";
    divDate.appendChild(dtBirthday);

    const ddBirthday = document.createElement("dd");
    ddBirthday.setAttribute("itemprop", "birthDate");
    ddBirthday.innerText = vecino.facts.birthDate;
    divDate.appendChild(ddBirthday);
  });
  return navRoot.appendChild(listUl);
};
