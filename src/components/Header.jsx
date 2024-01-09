import { useState } from "react";
import { moneyFormat } from "../helpers";

/*css kodları----------------------*/
const header = {
  position: "sticky",
  top: 0,
  background: "linear-gradient(to bottom, #0d5a04d6, #94d235)",
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: 24,
  letterSpacing: 1,
};

const span = {
  margin: "0 10px",
  fontWeight: "bold",
  color: "pink",
};

function Header({ total, money }) {
  return (
    <>
      <div style={header}>
        {total > 0 && money - total !== 0 && (
          <div>
            Harcayacak $ <span style={span}>{moneyFormat(money - total)}</span>{" "}
            paranız kaldı.
          </div>
        )}
        {total === 0 && (
          <div>
            Harcamak için $ <span style={span}> {moneyFormat(money)} </span>
            paranız var.
          </div>
        )}
        {money - total === 0 && <div>Paran bitti.</div>}
      </div>
    </>
  );
}

export default Header;
