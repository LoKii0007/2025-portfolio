import { useContext, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Keyboard } from "../models/Keyboard";
import toast from "react-hot-toast";
import axios from "axios";
import { GlobalContext } from "../context/globalContext";
import { Linkedin, Github, Mail, Loader2Icon } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "lokeshyadv8177@gmail.com",
    type: "email",
  },

  {
    icon: <Github size={20} />,
    label: "Github",
    value: "https://github.com/LoKii0007",
    type: "link",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/yadav-lokesh/",
    type: "link",
  },
];

export default function Contact() {
  const { darkTheme } = useContext(GlobalContext);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const typingTimeoutRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleData(e) {
    e.preventDefault();
    setIsTyping(true);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 300);
  }

  useState(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (!formData.name || !formData.email || !formData.message) {
        toast.error("please fill all fields");
        return;
      }
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/message`,
        formData
      );
      toast.success("message sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("some error occured");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        id="contact"
        className={` ${darkTheme ? "dark-theme-bg" : "light-theme-bg"
          } contact justify-between items-center min-h-[500px] pb-20 md:pb-12 w-screen p-4 md:p-12 z-60 relative flex overflow-hidden font-mono`}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 w-full h-full flex-1">
          <div
            className={`${darkTheme
              ? "dark-theme-shadow dark-theme-bg"
              : "light-theme-shadow light-theme-bg"
              } rounded-[16px] md:rounded-[32px] col-span-6 w-full h-full p-4 md:p-12`}
          >
            <div className="contact-top space-y-6">
              <div
                className={`touch text-left ${darkTheme ? "text-white" : "text-black"
                  }`}
              >
                Get in touch
              </div>
              <div
                className={`${darkTheme ? "dark-theme-text" : "light-theme-text"
                  } chat text-2xl font-bold `}
              >
                Let's <span className="text-(--color-design)">Chat</span>
              </div>
            </div>

            <div
              style={{
                height: "1px",
                width: "100%",
                margin: "10px 0px",
                backgroundColor: `${darkTheme ? "white" : "black"}`,
              }}
            ></div>
            <div
              className={`${darkTheme ? "dark-theme-text" : "light-theme-text"
                } contact-bottom`}
            >
              <form type="submit" className="contact-form">
                <div className=" flex flex-col gap-1 ">
                  <label
                    htmlFor="name"
                    className="custom-form items-start flex form-label text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    className={`${darkTheme
                      ? "bg-black/20 text-white focus:ring-black"
                      : "bg-white text-black/80 focus:outline-none"
                      } p-1 rounded-md resize-none`}
                    type="text"
                    required
                    onChange={(e) => handleData(e)}
                    value={formData.name}
                    name="name"
                    id="name"
                    placeholder="someone"
                  />
                </div>
                <div className="my-3 flex flex-col gap-1">
                  <label
                    htmlFor="Email"
                    className="custom-form items-start flex form-label text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    onChange={(e) => handleData(e)}
                    value={formData.email}
                    name="email"
                    className={`${darkTheme
                      ? "bg-black/20 text-white focus:ring-black"
                      : "bg-white text-black/80 focus:outline-none"
                      } p-1 rounded-md resize-none`}
                    id="email"
                    placeholder="someone@gmail.com"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="custom-form items-start flex form-label text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    required
                    onChange={(e) => handleData(e)}
                    value={formData.message}
                    name="message"
                    placeholder="Leave a message"
                    className={`${darkTheme
                      ? "bg-black/20 text-white focus:ring-black"
                      : "bg-white text-black/80 focus:outline-none"
                      } p-1 rounded-md `}
                    id="message"
                  />
                </div>

                <div className="text-center submit-btn py-5">
                  <button
                    disabled={loading}
                    onClick={(e) => handleSubmit(e)}
                    className={`px-8 py-3 rounded-full font-semibold transition-all transform w-40 hover:scale-105 ${darkTheme
                      ? "light-theme-shadow light-theme-bg text-black"
                      : "dark-theme-shadow dark-theme-bg text-white"
                      }`}
                  >
                    {loading ? <Loader2Icon /> : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="contact-right md:flex hidden rounded-[32px] flex-col col-span-6 w-full h-full space-y-12">
            <div
              className={` ${darkTheme
                ? "dark-theme-shadow dark-theme-bg"
                : "light-theme-shadow light-theme-bg"
                } contact-img rounded-[32px] flex justify-center items-center`}
            >
              
              <div className="model min-h-[300px]">
                <Canvas camera={{ fov: 16, position: [10, 10, 10] }}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[3, 2, 1]} />
                  <Keyboard isTyping={isTyping} />
                </Canvas>
              </div>
            </div>
            <div
              className={` ${darkTheme
                ? "dark-theme-shadow dark-theme-bg"
                : "light-theme-shadow light-theme-bg"
                } contact-info rounded-[32px] flex flex-col justify-evenly items-center w-full gap-2 p-4`}
            >
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (item.type === "email") {
                      window.open(`mailto:${item.value}`, "_blank");
                    } else if (item.type === "link") {
                      window.open(item.value, "_blank");
                    }
                  }}
                  className={`rounded-[16px] py-3 flex w-full ${!darkTheme ? "bg-gray-200 text-black" : "bg-black/20 text-white"
                    } items-center cursor-pointer`}
                >
                  <div className="icon px-4">{item.icon}</div>
                  <div className="info">
                    <b>{item.label}</b> <br />
                    <p className="link">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
