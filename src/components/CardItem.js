import React from "react";

const CardItem = ({ item }) => {
  return (
    <div class="card1">
      <div class="face face1">
        <div class="content1">
          <div class="icon">
            <img src={item.person.image.medium} alt="" />
          </div>
        </div>
      </div>
      <div class="face face2">
        <div class="content1">
          <h2>{item.character.name}</h2>
          <h3>{item.person.name}</h3>
          <a target="_blank" href={item.person.url}>
            More info
          </a>
        </div>
      </div>
    </div>
    // <div className="card">
    //   <div className="imgbox">
    //     <img src={item.person.image.medium} alt="" />
    //   </div>
    //   <div className="content">
    //     <h2>{item.character.name}</h2>
    //     <h3>{item.person.name}</h3>

    //     <ul>
    //       <li>Birthday: {item.person.birthday}</li>
    //       <li>Country: {item.person.country.name}</li>
    //       <li>
    //         <a target="_blank" href={item.person.url}>
    //           More info
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default CardItem;
