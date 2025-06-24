function FooterComp() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "0",
        backgroundColor: "#479dff",
        width: "100%",
        textAlign: "center",
        height: "15%",
        zIndex: "1",
        color: "white",
      }}
    >
      <b>
        <p>Kontaktperson: Franz Kaiser</p>
        <p>
          <a href="mailto:hege@example.com">franz.kaiser@tvb.com</a>
        </p>
      </b>
    </footer>
  );
}

export default FooterComp;
