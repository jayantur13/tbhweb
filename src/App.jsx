import "../src/App.css";
import { TbBrandFacebook, TbBrandTwitter, TbMailPlus } from "react-icons/tb";
import {
  FaLinkedin,
  FaPinterest,
  FaRedditAlien,
  FaCopy,
  FaWhatsapp,
  FaLine,
  FaViber,
  FaTelegram,
  FaSpinner,
  FaRandom,
  FaCheck,
  FaDownload,
} from "react-icons/fa";
import { GiFoxHead } from "react-icons/gi";
import {
  Icon,
  Button,
  Container,
  LoadingButton,
  IndicatorButton,
  DLButton,
  PBButton,
} from "tbh-buttons";
import {
  fbShare,
  twitterShare,
  shareToLinkedIn,
  shareToPinterest,
  shareToReddit,
  sendToTelegram,
  sendWAMessage,
} from "tbh-buttons";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const Pic = {
    dimg: "/wall.jpg",
  };
  const [Img, setImg] = useState(Pic);

  //Defaults
  const txtVariant = {
    text: "Doggie?",
    loading: false,
    loaded: false,
  };

  const iconVariant = {
    icon: <FaRandom />,
    loading: false,
    loaded: false,
  };

  const icontxtVariant = {
    icon: <GiFoxHead className="mr-2" />,
    text: "Fox?",
    loading: false,
    loaded: false,
  };

  const simSuccess = {
    loading: false,
    loaded: false,
    isSuccess: false,
  };

  const simFail = {
    loading: false,
    loaded: false,
    isSuccess: false,
  };

  const [simSData, setSSData] = useState(simSuccess);
  const [simFData, setSFData] = useState(simFail);

  const [txtLdbtn, setTxtLdbtn] = useState(txtVariant);
  const [iconLdbtn, setIconLdbtn] = useState(iconVariant);
  const [itLdtbn, setItLdbtn] = useState(icontxtVariant);

  const PBB = {
    l: false,
    ld: "/wall.jpg",
  };
  const [pb, setPbD] = useState(PBB);

  function generateFilename() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Add 1 to month because it's 0-based
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Combine the date, time, to create the filename
    const filename = `${year}${month}${day}_${hours}${minutes}${seconds}`;

    return filename;
  }

  async function fetchDoggieData() {
    await axios
      .get("https://random.dog/woof.json", {
        withCredentials: false,
      })
      .then((res) => {
        if (res.data.url.endsWith(".mp4")) {
          alert("MP4 file,try again");
        } else {
          setImg({ ...Img, dimg: res.data.url });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  let waifuCat = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "hug",
    "awoo",
    "kiss",
    "lick",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe",
  ];
  let waifu = waifuCat[Math.floor(Math.random() * waifuCat.length)];
  async function fetchRandData() {
    await axios
      .get(`https://waifu.pics/api/sfw/${waifu}`)
      .then((res) => {
        setImg({ ...Img, dimg: res.data.url });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function fetchFoxData() {
    await axios
      .get("https://randomfox.ca/floof/", {
        withCredentials: false,
      })
      .then((res) => {
        setImg({ ...Img, dimg: res.data.image });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function fetchFoxDataPB() {
    setPbD({ ...pb, l: true });
    await axios
      .get("https://randomfox.ca/floof/", {
        withCredentials: false,
      })
      .then((res) => {
        setPbD({ ...pb, l: false });
        setPbD({ ...pb, ld: res.data.image });
      })
      .catch((err) => {
        setPbD({ ...pb, l: false });
        console.error(err);
      });
  }

  // Simulated successful API call
  function simulateSuccessAPICall() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Success response data");
        setSSData({ ...simSData, loaded: true, isSuccess: true });
        setTimeout(() => {
          setSSData(simSData);
        }, 2000); // Adjust the delay as needed
      }, 1000); // Simulate a 1-second delay
    });
  }

  // Simulated failed API call
  function simulateFailedAPICall() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("API request failed"));
        setSFData({ ...simFData, loaded: true, isSuccess: false });
        setTimeout(() => {
          setSFData(simFData);
        }, 2000); // Adjust the delay as needed
      }, 1000); // Simulate a 1-second delay
    });
  }

  const handleFetchData = async () => {
    setTxtLdbtn({ ...txtLdbtn, loading: true });

    try {
      await fetchDoggieData();
      setTxtLdbtn({ ...txtLdbtn, loaded: true });

      // Introduce a delay (e.g., 2 seconds) before resetting the state
      setTimeout(() => {
        setTxtLdbtn(txtVariant);
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFetchData2 = async () => {
    setIconLdbtn({ ...iconLdbtn, loading: true });

    try {
      await fetchRandData();
      setIconLdbtn({ ...txtLdbtn, loaded: true });

      // Introduce a delay (e.g., 2 seconds) before resetting the state
      setTimeout(() => {
        setIconLdbtn(iconVariant);
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFetchData3 = async () => {
    setItLdbtn({ ...iconLdbtn, loading: true });

    try {
      await fetchFoxData();
      setItLdbtn({ ...txtLdbtn, loaded: true });

      // Introduce a delay (e.g., 2 seconds) before resetting the state
      setTimeout(() => {
        setItLdbtn(icontxtVariant);
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startToast = () => {
    toast(
      (t) => (
        <div>
          <h5 className="font-bold">Share</h5>
          <hr className="bg-black h-[2px]" />
          <Container className="flex flex-row gap-1 my-6">
            <Button
              type="button"
              onClick={() => {
                shareToPinterest(
                  "https://crunchyroll.com",
                  "https://w0.peakpx.com/wallpaper/736/818/HD-wallpaper-demon-slayer-anime-sword.jpg"
                );
              }}
              className="bg-red-600 hover:bg-red-200 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
            >
              <Icon
                iconComponent={FaPinterest}
                className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-red-600"
              />
            </Button>
            <Button
              type="button"
              onClick={() => {
                shareToReddit(
                  "https://github.com/jayantur13",
                  "Jayant Navrange"
                );
              }}
              className="bg-orange-600 hover:bg-orange-200 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
            >
              <Icon
                iconComponent={FaRedditAlien}
                className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-orange-600"
              />
            </Button>
            <Button
              type="button"
              onClick={() => {
                sendToTelegram(
                  "https://github.com/jayantur13",
                  "Jayant Navrange Github Profile"
                );
              }}
              className="bg-blue-400 hover:bg-blue-200 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
            >
              <Icon
                iconComponent={FaTelegram}
                className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-blue-400"
              />
            </Button>
            <Button
              type="button"
              onClick={() => {
                sendWAMessage("Check out this link at https://w3schools.com");
              }}
              className="bg-green-500 hover:bg-green-200 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
            >
              <Icon
                iconComponent={FaWhatsapp}
                className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-green-500"
              />
            </Button>
            <Button
              type="button"
              onClick={() => {
                alert("See Line Docs to setup");
              }}
              className="bg-green-600 hover:bg-green-300 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
            >
              <Icon
                iconComponent={FaLine}
                className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-green-600"
              />
            </Button>
            <Button
              type="button"
              onClick={() => {
                alert("See Viber Docs to setup");
              }}
              className="bg-purple-500 hover:bg-purple-200 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
            >
              <Icon
                iconComponent={FaViber}
                className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-purple-500"
              />
            </Button>
          </Container>
          <div className="float-right">
            <button
              type="button"
              className="bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center group"
              onClick={() => toast.dismiss(t.id)}
            >
              <span className="font-bold">Cancel</span>
            </button>
          </div>
        </div>
      ),
      {
        position: "bottom-center",
      }
    );
  };
  return (
    <>
      <Toaster />

      <Container className="sidebar fixed top-1/2 transform -translate-y-1/2">
        <Button
          type="button"
          title="pinbtn"
          onClick={() => {
            shareToPinterest(
              "https://crunchyroll.com",
              "https://w0.peakpx.com/wallpaper/736/818/HD-wallpaper-demon-slayer-anime-sword.jpg"
            );
          }}
          className="bg-red-600 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 group block text-center py-4  text-white text-lg"
        >
          <Icon
            iconComponent={FaPinterest}
            className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-red-600"
          />
        </Button>
        <Button
          type="button"
          title="sidereddit"
          onClick={() => {
            shareToReddit("https://github.com/jayantur13", "Jayant Navrange");
          }}
          className="bg-orange-600 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 group block text-center py-4 text-white text-lg"
        >
          <Icon
            iconComponent={FaRedditAlien}
            className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-orange-600"
          />
        </Button>
        <Button
          type="button"
          title="sidetele"
          onClick={() => {
            sendToTelegram(
              "https://github.com/jayantur13",
              "Jayant Navrange Github Profile"
            );
          }}
          className="bg-blue-400 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12  group block text-center py-4 text-white text-lg"
        >
          <Icon
            iconComponent={FaTelegram}
            className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-blue-400"
          />
        </Button>
        <Button
          type="button"
          title="sideWA"
          onClick={() => {
            sendWAMessage("Check out this link at https://w3schools.com");
          }}
          className="bg-green-500 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12  group block text-center py-4  text-white text-lg"
        >
          <Icon
            iconComponent={FaWhatsapp}
            className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-green-500"
          />
        </Button>
        <Button
          type="button"
          title="sideviber"
          onClick={() => {
            alert("See Line Docs to setup");
          }}
          className="bg-green-600 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 group block text-center py-4 text-white text-lg"
        >
          <Icon
            iconComponent={FaLine}
            className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-green-600"
          />
        </Button>
        <Button
          type="button"
          title="sideviber"
          onClick={() => {
            alert("See Viber Docs to setup");
          }}
          className="bg-purple-500 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 group block text-center py-4 text-white text-lg"
        >
          <Icon
            iconComponent={FaViber}
            className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-purple-500"
          />
        </Button>
      </Container>

      <div className="content text-center mx-16">
        <div className="heading">
          <h2 className="text-4xl font-semibold mt-4">tbh-buttons</h2>
          <ol className="max-w-md mt-4 mx-auto space-y-1 list-decimal list-inside text-xl text-justify font-thin">
            <li>Add any icon from react-icons,customise everything.</li>
            <li>
              Style component using tailwind css (recommended) or plain css.
            </li>
            <li>Demo for few supporting platform url share parameters.</li>
            <li>
              For more control over sharing use the platform related APIs.
            </li>
            <li>Use as footer,sidebar or social sign-in button.</li>
            <li>Make a toast or alert using packages like react-hot-toast.</li>
            <li>Custom Buttons for you, see the source.</li>
          </ol>
        </div>

        <Container className="holder block my-4 space-x-1 space-y-1">
          <p className="text-xl font-thin my-4">Rounded Button Style</p>
          <Button type="button" className="mail" title="mailbtn">
            <Icon
              iconComponent={TbMailPlus}
              className="mailicon"
              style={{ fontSize: "1rem" }}
            />
          </Button>
          <Button
            type="button"
            className="fb"
            title="fbbtn"
            onClick={() => {
              fbShare("https://github.com");
            }}
          >
            <Icon
              iconComponent={TbBrandFacebook}
              className="fbicon"
              style={{ fontSize: "1rem" }}
            />
          </Button>
          <Button
            type="button"
            className="tw"
            title="twbtn"
            onClick={() => {
              twitterShare(
                "Sharing my Github profile",
                "https://github.com/jayantur13",
                "share1,share2"
              );
            }}
          >
            <Icon
              iconComponent={TbBrandTwitter}
              className="twicon"
              style={{ fontSize: "1rem" }}
            />
          </Button>
          <Button
            type="button"
            className="lnkin"
            title="lnkinbtn"
            onClick={() => {
              shareToLinkedIn("https://github.com/jayantur13");
            }}
          >
            <Icon
              iconComponent={FaLinkedin}
              className="lnkinicon"
              style={{ fontSize: "1rem" }}
            />
          </Button>
          <Button
            type="button"
            title="pinbtn"
            onClick={() => {
              shareToPinterest(
                "https://crunchyroll.com",
                "https://w0.peakpx.com/wallpaper/736/818/HD-wallpaper-demon-slayer-anime-sword.jpg"
              );
            }}
            className="bg-red-600 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
          >
            <Icon
              iconComponent={FaPinterest}
              className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-red-600"
            />
          </Button>
          <Button
            type="button"
            title="redditbtn"
            onClick={() => {
              shareToReddit("https://github.com/jayantur13", "Jayant Navrange");
            }}
            className="bg-orange-600 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
          >
            <Icon
              iconComponent={FaRedditAlien}
              className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-orange-600"
            />
          </Button>
          <Button
            type="button"
            title="telebtn"
            onClick={() => {
              sendToTelegram(
                "https://github.com/jayantur13",
                "Jayant Navrange Github Profile"
              );
            }}
            className="bg-blue-400 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
          >
            <Icon
              iconComponent={FaTelegram}
              className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-blue-400"
            />
          </Button>
          <Button
            type="button"
            title="wabtn"
            onClick={() => {
              sendWAMessage("Check out this link at https://w3schools.com");
            }}
            className="bg-green-500 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
          >
            <Icon
              iconComponent={FaWhatsapp}
              className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-green-500"
            />
          </Button>
          <Button
            type="button"
            title="linebtn"
            onClick={() => {
              alert("See Line Docs to setup");
            }}
            className="bg-green-600 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
          >
            <Icon
              iconComponent={FaLine}
              className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-green-600"
            />
          </Button>
          <Button
            type="button"
            title="viberbtn"
            onClick={() => {
              alert("See Viber Docs to setup");
            }}
            className="bg-purple-500 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
          >
            <Icon
              iconComponent={FaViber}
              className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-purple-500"
            />
          </Button>
          <Button
            type="button"
            title="cpybtn"
            className="bg-gray-600 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
          >
            <Icon
              iconComponent={FaCopy}
              className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-gray-600"
            />
          </Button>
        </Container>
      </div>

      <Container className="button-holder my-4 text-center block space-x-1 space-y-1 mx-16">
        <p className="text-xl font-thin my-4">Button Style (Tailwind CSS)</p>
        <Button
          type="button"
          title="btnmail"
          className="bg-black hover:bg-white transition duration-300 ease-in-out font-bold py-2 px-4 ml-2 rounded inline-flex items-center group"
        >
          <span className="group-hover:text-black">Send an</span>{" "}
          <Icon
            iconComponent={TbMailPlus}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-black"
          />
        </Button>
        <Button
          type="button"
          title="btnfb"
          className="bg-blue-600 hover:bg-white transition duration-300 ease-in-out font-bold py-2 px-4 rounded inline-flex items-center group"
          onClick={() => {
            fbShare("https://github.com");
          }}
        >
          <span className="group-hover:text-blue-600">Share to</span>{" "}
          <Icon
            iconComponent={TbBrandFacebook}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-blue-600"
          />
        </Button>
        <Button
          type="button"
          title="btntw"
          className="bg-blue-500 hover:bg-white transition duration-300 ease-in-out font-bold py-2 px-4 rounded inline-flex items-center group"
          onClick={() => {
            twitterShare(
              "Sharing my Github profile",
              "https://github.com/jayantur13",
              "share1,share2"
            );
          }}
        >
          <span className="group-hover:text-blue-500">Share to</span>{" "}
          <Icon
            iconComponent={TbBrandTwitter}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-blue-500"
          />
        </Button>
        <Button
          type="button"
          title="btnlinkin"
          className="bg-blue-700 hover:bg-white transition duration-300 ease-in-out font-bold py-2 px-4 rounded inline-flex items-center group"
          onClick={() => {
            shareToLinkedIn("https://github.com/jayantur13");
          }}
        >
          <span className="group-hover:text-blue-700">Share to</span>{" "}
          <Icon
            iconComponent={FaLinkedin}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-blue-700"
          />
        </Button>
        <Button
          type="button"
          title="btnpin"
          className="bg-red-600 hover:bg-gray-100 transition duration-300 ease-in-out font-bold py-2 px-4 rounded inline-flex items-center group"
          onClick={() => {
            shareToPinterest(
              "https://crunchyroll.com",
              "https://w0.peakpx.com/wallpaper/736/818/HD-wallpaper-demon-slayer-anime-sword.jpg"
            );
          }}
        >
          <span className="group-hover:text-red-600">Share to</span>{" "}
          <Icon
            iconComponent={FaPinterest}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-red-600"
          />
        </Button>
        <Button
          type="button"
          title="btnreddit"
          onClick={() => {
            shareToReddit("https://github.com/jayantur13", "Jayant Navrange");
          }}
          className="bg-orange-600 hover:bg-gray-100 transition duration-300 ease-in-out font-bold py-2 px-4 rounded inline-flex items-center group"
        >
          <span className="group-hover:text-orange-600">Share to</span>{" "}
          <Icon
            iconComponent={FaRedditAlien}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-orange-600"
          />
        </Button>
        <Button
          type="button"
          title="btntele"
          className="bg-blue-400 hover:bg-gray-100 transition duration-300 ease-in-out font-bold py-2 px-4 rounded inline-flex items-center group"
          onClick={() => {
            sendToTelegram(
              "https://github.com/jayantur13",
              "Jayant Navrange Github Profile"
            );
          }}
        >
          <span className="group-hover:text-blue-400">Share to</span>{" "}
          <Icon
            iconComponent={FaTelegram}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-blue-400"
          />
        </Button>
        <Button
          type="button"
          title="btnwa"
          className="bg-green-500 hover:bg-gray-100 transition duration-300 ease-in-out font-bold py-2 px-4 rounded inline-flex items-center group"
          onClick={() => {
            sendWAMessage("Check out this link at https://w3schools.com");
          }}
        >
          <span className="group-hover:text-green-500">Share to</span>{" "}
          <Icon
            iconComponent={FaWhatsapp}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-green-500"
          />
        </Button>
        <Button
          type="button"
          title="btnline"
          className="bg-green-600 hover:bg-gray-100 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out group"
          onClick={() => {
            alert("See Line Docs to setup");
          }}
        >
          <span className="group-hover:text-green-600">Share to</span>{" "}
          <Icon
            iconComponent={FaLine}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-green-600"
          />
        </Button>
        <Button
          type="button"
          title="btnviber"
          className="bg-purple-500 hover:bg-gray-100 font-bold py-2 px-4 inline-flex items-center transition duration-300 ease-in-out rounded group"
          onClick={() => {
            alert("See Viber Docs to setup");
          }}
        >
          <span className="group-hover:text-purple-500">Share to</span>{" "}
          <Icon
            iconComponent={FaViber}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-purple-500"
          />
        </Button>
        <Button
          type="button"
          title="btncpy"
          className="bg-gray-600 hover:bg-gray-100 font-bold py-2 px-4 inline-flex items-center transition duration-300 ease-in-out rounded group"
        >
          <span className="group-hover:text-gray-600">Copy</span>{" "}
          <Icon
            iconComponent={FaCopy}
            className="fill-current w-4 h-4 px-1 transition-colors duration-300 ease group-hover:text-gray-600"
          />
        </Button>
      </Container>

      <div className="react-toast text-center">
        <p className="text-xl font-thin">Via React Hot Toast</p>
        <Button
          type="button"
          title="toastbtn"
          className="mt-4 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          onClick={() => {
            startToast();
          }}
        >
          React Toast
        </Button>
      </div>

      <div className="loading-button text-center mt-4">
        <p className="text-xl font-thin">Via Loading Button</p>

        <div className="flex justify-center mt-4">
          <img
            src={Img.dimg}
            alt="testing_img_ldbtn"
            width={200}
            height={300}
            className="rounded"
          />
        </div>

        <div className="flex flex-row align-middle justify-evenly mt-4">
          <LoadingButton
            variant="text"
            type="button"
            title="loadingbtn_1"
            text={txtLdbtn.text}
            loading={txtLdbtn.loading}
            loaded={txtLdbtn.loaded}
            loadingText="Changing"
            loadedText="Changed.."
            onClick={() => {
              handleFetchData();
            }}
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          />
          <LoadingButton
            variant="icon"
            type="button"
            title="loadingbtn_1"
            icon={iconLdbtn.icon}
            loadingIcon={<FaSpinner />}
            loadedIcon={<FaCheck />}
            loading={iconLdbtn.loading}
            loaded={iconLdbtn.loaded}
            onClick={() => {
              handleFetchData2();
            }}
            style={{ fontSize: "1rem" }}
            className="bg-blue-400 hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full flex items-center justify-center"
          />

          <LoadingButton
            variant="icontext"
            type="button"
            title="loadingbtn_1"
            icon={itLdtbn.icon} // Add margin-right for spacing
            loadingIcon={<FaSpinner className="mr-2" />} // Add margin-right for spacing
            loadedIcon={<FaCheck className="mr-2" />} // Add margin-right for spacing
            text={itLdtbn.text}
            loadingText="Loading..."
            loadedText="Loaded!"
            loading={itLdtbn.loading}
            loaded={itLdtbn.loaded}
            onClick={() => {
              handleFetchData3();
            }}
            className="flex items-center space-x-2 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          />
        </div>
      </div>

      <div className="react-toast text-center mt-4">
        <p className="text-xl font-thin">Via Indicator Button</p>
        <IndicatorButton
          type="button"
          title="indicatorbtn1"
          successBgColor="green"
          loading={simSData.loading}
          loaded={simSData.loaded}
          isSuccess={simSData.isSuccess}
          initialText="Test"
          successText="Test Pass"
          failureText="Failed"
          className="mt-4 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          onClick={() => {
            simulateSuccessAPICall();
          }}
        />

        <IndicatorButton
          type="button"
          title="indicatorbtn2"
          failureBgColor="red"
          loading={simFData.loading}
          loaded={simFData.loaded}
          isSuccess={simFData.isSuccess}
          initialText="Update"
          successText="Updated"
          failureText="Failed"
          className="mx-2 mt-4 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          onClick={() => {
            simulateFailedAPICall();
          }}
        />
      </div>
      <div className="downloadbtn text-center mt-4">
        <p className="text-xl font-thin">Via Download Button</p>
        <div className="flex space-x-1 justify-center mt-4">
          <DLButton
            type="button"
            title="btn_with_dl_%"
            buttonText="File 1"
            showProgress={false}
            progressText={"%"} // %r
            fileUrl="https://sabnzbd.org/tests/internetspeed/50MB.bin"
            fileName={generateFilename() + ".bin"}
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          />

          <DLButton
            buttonText="File 2"
            type="button"
            title="btn_with_dl%_prg_bar"
            showProgress={false}
            progressText="Downloading"
            fileUrl="https://sabnzbd.org/tests/internetspeed/50MB.bin"
            fileName={generateFilename() + ".bin"}
            color="warning"
            className="bg-transparent hover:bg-orange-300 text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded"
          />

          <DLButton
            buttonText="File 3"
            type="button"
            title="btn_with_dl%_prgbar_top"
            showProgress={true}
            placeProgress="top"
            progressText="Downloading"
            fileUrl="https://sabnzbd.org/tests/internetspeed/50MB.bin"
            fileName={generateFilename() + ".bin"}
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          />

          <DLButton
            buttonText="File 4"
            type="button"
            title="btn_with_dl%_prgbar_bottom"
            showProgress={true}
            placeProgress="bottom"
            progressText={"%"}
            color="warning"
            fileUrl={`https://sabnzbd.org/tests/internetspeed/50MB.bin`}
            fileName={generateFilename() + ".bin"}
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          />
        </div>
      </div>
      <div className="progressbtn text-center mt-4">
        <p className="text-xl font-thin">
          <a href="https://mui.com/material-ui/react-progress/">
            Via Progress Button (MUI)
          </a>
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={pb.ld}
            alt="testing_img_pbbtn"
            width={200}
            height={300}
            className="rounded"
          />
        </div>

        <div className="flex flex-row align-middle justify-evenly mt-4">
          <PBButton
            onClick={() => {
              fetchFoxDataPB();
            }}
            type="button"
            title="circle_btn_prgbar"
            icon={<FaDownload className="text-black" />}
            useType="circular"
            color="warning"
            size={24}
            loading={pb.l}
            style={{ fontSize: "1rem" }}
            className="bg-white hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full flex items-center justify-center"
          />

          <PBButton
            buttonText="Change#1"
            color="primary"
            type="button"
            title="linear_btn_prgbar_bottom"
            onClick={() => {
              fetchFoxDataPB();
            }}
            useType="linear"
            loading={pb.l}
            progressText="Loading.."
            placeProgress="bottom"
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          />

          <PBButton
            buttonText="Change#2"
            color="warning"
            type="button"
            title="linear_btn_prgbar_top"
            onClick={() => {
              fetchFoxDataPB();
            }}
            useType="linear"
            loading={pb.l}
            progressText="Loading.."
            placeProgress="top"
            disabled={pb.l}
            className="bg-transparent hover:bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          />
        </div>
      </div>
    </>
  );
}
