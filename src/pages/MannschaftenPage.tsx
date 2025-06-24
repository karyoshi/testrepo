// src/pages/MannschaftenPage.tsx
import erstemannschaft from "../../public/1. Mannschaft.png";
import Mannschaften from "./Mannschaften";

export default function MannschaftenPage() {
  return (
    <div className="app-container">
      <h1 className="main-title">TVB Fußball Mannschaften</h1>
      <div className="teams-grid">
        {/* First Row */}
        <Mannschaften
          pictureLink={erstemannschaft}
          pictureName="Herren - TV Bodenwöhr"
          badgeText="Spieler ➔"
        />
        <Mannschaften
          pictureLink={erstemannschaft}
          pictureName="Herren - TV Bodenwöhr II"
          badgeText="Spieler ➔"
        />
        <Mannschaften
          pictureLink={erstemannschaft}
          pictureName="E-Junioren - (SG) SV Alten-u. Neuenschwand"
          badgeText="Spieler ➔"
        />

        {/* Second Row */}
        <Mannschaften
          pictureLink={erstemannschaft}
          pictureName="E-Junioren - (SG) SV Alten-u. Neuenschwand II"
          badgeText="Spieler ➔"
        />
        <Mannschaften
          pictureLink={erstemannschaft}
          pictureName="F-Junioren - (SG) SV Alten-u. Neuenschwand"
          badgeText="Spieler ➔"
        />
        <Mannschaften
          pictureLink={erstemannschaft}
          pictureName="F-Junioren - (SG) SV Alten-u. Neuenschwand II"
          badgeText="Spieler ➔"
        />
      </div>
    </div>
  );
}
