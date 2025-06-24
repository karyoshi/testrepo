// src/components/Mannschaften.tsx
import "./Mannschaften.css";

interface MannschaftProps {
  pictureLink: string;
  pictureName: string;
  badgeText: string;
  className?: string;
}

export default function Mannschaften({
  pictureLink,
  pictureName,
  badgeText,
  className = "",
}: MannschaftProps) {
  return (
    <div
      className={`mannschaft-card ${className}`}
      onClick={() => (window.location.href = "/Spieler")}
    >
      <div className="card-badge">{badgeText}</div>
      <div className="card-image-container">
        <img
          src={pictureLink}
          alt={pictureName}
          className="team-image"
          loading="lazy"
        />
        <div className="image-overlay"></div>
      </div>
      <div className="card-footer">
        <h3 className="team-name">{pictureName}</h3>
      </div>
    </div>
  );
}
