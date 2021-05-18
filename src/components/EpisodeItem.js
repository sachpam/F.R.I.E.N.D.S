import React, { useState, useEffect } from "react";
import Episode from "./Episode";

const EpisodeItem = ({ item3, items4 }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="row">
      <table>
        <tbody>
          <tr>
            <td width="5%">
              <img src={item3.image.medium} alt="" />
            </td>
            <td width="60%">Season {item3.number}</td>
            <td width="30%">
              {" "}
              <button
                onClick={() => {
                  setShow(!show);
                }}
              >
                View
              </button>{" "}
            </td>
          </tr>
        </tbody>
      </table>
      {show && (
        <table className={show ? "hide" : null}>
          <tbody>
            {items4
              .filter((items4) => items4.season === item3.number)
              .map((filtereditem) => (
                <Episode key={filtereditem.id} filtereditem={filtereditem} />
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EpisodeItem;
