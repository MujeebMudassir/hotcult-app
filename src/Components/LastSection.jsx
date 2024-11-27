import { motion, useScroll, useTransform  } from "framer-motion";
import Footer from "./Footer";
import ScrollWordAnimation from "./Slider/ScrollWordAnimation";
import ScrollSwiper from "./Slider/ScrollSwiper";

const LastSection = () => {
  const { scrollY } = useScroll(); // Hook to track scroll position
  const images = [
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    "https://cdn.pixabay.com/photo/2016/08/12/04/01/new-york-1587558_1280.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/images2/City-Wallpapers-HD.jpg"
  ]

  // Map scrollY to scale (1 to 1.2 for scaling effect)
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

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
          // paddingLeft: "50px",
          zIndex: 999,
        }}
      >
        {/* WHAT WE DO? */}
        <ScrollWordAnimation word="WHAT   WE   DO?" />
      </div>
      <div style={{ width: "100%", marginTop: "30px" }}>
        {/* <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "10%" }}>
                <motion.div
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div
                    style={{
                      height: "70vh",
                      background: `url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3')`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </motion.div>
              </td>
              <td style={{ width: "80%" }}>
                <motion.div
                  style={{ width: "100%" }}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
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
                        Our talented team knows the South Indian market inside
                        and out. We craft messages that resonate with audiences,
                        no matter the language. We don't just translate, we
                        amplify your unique brand voice.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </td>
              <td style={{ width: "10%" }}>
                <motion.div
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div
                    style={{
                      height: "70vh",
                      background: `url('https://www.pixelstalk.net/wp-content/uploads/images2/City-Wallpapers-HD.jpg')`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </motion.div>
              </td>
            </tr>
          </tbody>
        </table> */}
        <ScrollSwiper images={images} />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </section>
  );
};

export default LastSection;
