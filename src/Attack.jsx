import { useState } from "react";
const attacks = [
  { id: 1, name: "WaterGun", type: "special" },
  { id: 2, name: "FireGun", type: "status" },
  { id: 3, name: "LeafGun", type: "physical" },
  { id: 4, name: "RockGun", type: "special" },
  { id: 5, name: "SpiritGun", type: "status" },
];
const filteredAttacks = (special, status, physical) => {
  const specialAttacks = attacks.filter((attack) => attack.type === "special");
  const statusAttacks = attacks.filter((attack) => attack.type === "status");
  const physicalAttacks = attacks.filter(
    (attack) => attack.type === "physical"
  );
  let answer = [];
  if (special) answer = [...specialAttacks];
  if (status) answer = [...statusAttacks, ...answer];
  if (physical) answer = [...physicalAttacks, ...answer];
  return answer;
};
const Attack = () => {
  const [special, setSpecial] = useState(true);
  const [status, setStatus] = useState(true);
  const [physical, setPhysical] = useState(true);
  return (
    <>
      <div className="controls">
        <button
          type="button"
          onClick={() => setPhysical((physical) => !physical)}
          style={physical ? { color: "green" } : { color: "red" }}
        >
          {"Physical"}
        </button>
        <button
          type="button"
          onClick={() => setStatus((status) => !status)}
          style={status ? { color: "green" } : { color: "red" }}
        >
          {"Status"}
        </button>
        <button
          type="button"
          onClick={() => setSpecial((special) => !special)}
          style={special ? { color: "green" } : { color: "red" }}
        >
          {"Special"}
        </button>
      </div>
      <div className="attackList">
        {filteredAttacks(special, status, physical).map((attack) => (
          <p key={attack.id}>{attack.name}</p>
        ))}
      </div>
    </>
  );
};

export default Attack;
