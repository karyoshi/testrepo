import CircularGallery from "../reactbit/CircularGallery";

type Spieler = {
  id: number;
  name: string;
};

let spielerlist: Spieler[] = [
  {
    id: 3,
    name: "Chris",
  },
];

const ersterpsieler: Spieler = {
  id: 1,
  name: "Stefan Kaiser",
};

const zweiterspieler: Spieler = {
  id: 2,
  name: "Daniel Leimenstal",
};

spielerlist.push(ersterpsieler, zweiterspieler);

spielerlist = spielerlist.sort((a, b) => {
  if (a.id > b.id) {
    return 1;
  } else if (a.id < b.id) {
    return -1;
  } else {
    return 0;
  }
});

export default function Spieler() {
  return (
    <>
      <h1>1. Mannschaft</h1>

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#fff" borderRadius={0.05} />
      </div>
    </>
  );
}
