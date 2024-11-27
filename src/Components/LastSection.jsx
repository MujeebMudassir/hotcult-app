
import Footer from "./Footer";

const LastSection = () => {
  return (
    <section
      style={{
        background: "#fff",
        width: "100vw",
        height: "100vh",
        marginTop: "30px",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          fontSize: "210px",
          color: "#000",
          lineHeight: "0.7",
          textAlign: "center",
        }}
      >
        WHAT WE DO?
      </div>
      <div style={{ width: "100%", marginTop: "30px" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "10%" }}>
                <div
                  style={{
                    height: "70vh",
                    background: `url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3')`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </td>
              <td style={{ width: "80%" }}>
                <div
                  style={{
                    height: "70vh",
                    background: `url('https://cdn.pixabay.com/photo/2016/08/12/04/01/new-york-1587558_1280.jpg')`,
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      background: "rgba(0, 0, 0, 0.4)",
                      color: "#fff",
                      padding: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div style={{ fontSize: "44px" }}>Advertising</div>
                    <div style={{ fontSize: "18px" }}>
                      Our talented team knows the South Indian market inside and
                      out. We craft messages that resonate with audiences, no
                      matter the language. We don't just translate, we amplify
                      your unique brand voice.
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ width: "10%" }}>
                <div
                  style={{
                    height: "70vh",
                    background: `url('https://www.pixelstalk.net/wp-content/uploads/images2/City-Wallpapers-HD.jpg')`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </section>
  );
};

export default LastSection;
