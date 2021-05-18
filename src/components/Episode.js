import React from "react";
import { useEffect, useState } from "react";
import Tooltip from "react-simple-tooltip";

const Episode = ({ filtereditem }) => {
  const [show, setShow] = useState(false);
  // const str = {dangerouslySetInnerHTML={__html: filtereditem.summary}}

  return (
    <>
      <tr>
        {" "}
        <td width="20%">Episode {filtereditem.number}</td>
        <td>
          <Tooltip
            content={filtereditem.summary}
            style={{ placement: "bottom" }}
          >
            {filtereditem.name}
          </Tooltip>
        </td>
        <td width="10%">
          <a href={filtereditem.url}>+</a>
        </td>
        {/* {items4
        .filter((items4) => items4.season == sNo)
        .map((filtereditem) => (
          <li>{filtereditem.name}</li>
        ))} */}
      </tr>
    </>
  );
};

export default Episode;
