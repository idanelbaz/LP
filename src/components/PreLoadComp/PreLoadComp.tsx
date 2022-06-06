import React, { useLayoutEffect } from "react";
import StarSettings from "../../style/images/star-settings.svg";
import BrokenImg from "../../style/images/broken-image.svg";
import MainImg from "../../style/images/mainImg.png";
import WhitePlus from "../../style/images/white-plus.png";
import AnniversaryImg from "../../style/images/Anniversary.jpg";
import BirthdayImg from "../../style/images/Birthday.jpg";
import MarriageImg from "../../style/images/Marriage.jpg";
import DocumentImg from "../../style/images/Document.jpg";
import OtherImg from "../../style/images/Other.jpg";
import OkImg from "../../style/images/ok.svg";
import WhiteReturn from "../../style/images/return.png";
import AnniversaryIcon from "../../style/images/anniversaryIcon.png";
import BirthdayIcon from "../../style/images/birthdayIcon.png";
import DocumentIcon from "../../style/images/documentIcon.png";
import MarriageIcon from "../../style/images/marriageIcon.png";
import OtherIcon from "../../style/images/otherIcon.png";
import FacebookLogo from "../../style/images/facebookLogo.png";
import GoogleLogo from "../../style/images/googleLogo.png";
import SliderImg1 from "../../style/images/homepageSlider/image1.jpg";
import SliderImg2 from "../../style/images/homepageSlider/image2.jpg";
import SliderImg3 from "../../style/images/homepageSlider/image3.jpg";
import SliderImg4 from "../../style/images/homepageSlider/image4.png";
import SliderImg5 from "../../style/images/homepageSlider/image5.jpg";
import SliderImg6 from "../../style/images/homepageSlider/image6.png";
import SliderImg7 from "../../style/images/homepageSlider/image7.jpg";
import InfoIcon from "../../style/images/info-icon.svg";
import BananasProfileSvg from "../../style/images/profileIcons/bananas.svg";
import BatProfileSvg from "../../style/images/profileIcons/bat.svg";
import CatProfileSvg from "../../style/images/profileIcons/cat.svg";
import ChickenProfileSvg from "../../style/images/profileIcons/chicken.svg";
import ConeCreamProfileSvg from "../../style/images/profileIcons/cone-cream.svg";
import CowProfileSvg from "../../style/images/profileIcons/cow.svg";
import DiggerProfileSvg from "../../style/images/profileIcons/digger.svg";
import DonutsProfileSvg from "../../style/images/profileIcons/donuts.svg";
import FishProfileSvg from "../../style/images/profileIcons/fish.svg";
import FoxProfileSvg from "../../style/images/profileIcons/fox.svg";
import FrogProfileSvg from "../../style/images/profileIcons/frog.svg";
import GiraffeProfileSvg from "../../style/images/profileIcons/giraffe.svg";
import HamburgerProfileSvg from "../../style/images/profileIcons/hamburger.svg";
import JokerProfileSvg from "../../style/images/profileIcons/joker.svg";
import OctopusProfileSvg from "../../style/images/profileIcons/octopus.svg";
import OwlProfileSvg from "../../style/images/profileIcons/owl.svg";
import PenguinProfileSvg from "../../style/images/profileIcons/penguin.svg";
import RobotProfileSvg from "../../style/images/profileIcons/robot.svg";
import Smile1ProfileSvg from "../../style/images/profileIcons/smile1.svg";
import Smile2ProfileSvg from "../../style/images/profileIcons/smile2.svg";
import Smile3ProfileSvg from "../../style/images/profileIcons/smile3.svg";
import Smile4ProfileSvg from "../../style/images/profileIcons/smile4.svg";
import SunProfileSvg from "../../style/images/profileIcons/sun.svg";



import { preloadImages } from "../../utils/utils";
import "./PreLoad.scss";

const ImagesLoaderComp: React.FC = () => {
  useLayoutEffect(() => {
    const appImages = [
      BananasProfileSvg,
      BatProfileSvg,
      CatProfileSvg,
      ChickenProfileSvg,
      ConeCreamProfileSvg,
      CowProfileSvg,
      DiggerProfileSvg,
      DonutsProfileSvg,
      FishProfileSvg,
      FoxProfileSvg,
      FrogProfileSvg,
      GiraffeProfileSvg,
      HamburgerProfileSvg,
      JokerProfileSvg,
      OctopusProfileSvg,
      OwlProfileSvg,
      PenguinProfileSvg,
      RobotProfileSvg,
      Smile1ProfileSvg,
      Smile2ProfileSvg,
      Smile3ProfileSvg,
      Smile4ProfileSvg,
      SunProfileSvg,
      SliderImg7,
      SliderImg6,
      SliderImg5,
      SliderImg4,
      SliderImg3,
      SliderImg2,
      SliderImg1,
      FacebookLogo,
      GoogleLogo,
      StarSettings,
      BrokenImg,
      MainImg,
      WhitePlus,
      AnniversaryImg,
      BirthdayImg,
      MarriageImg,
      DocumentImg,
      OtherImg,
      OkImg,
      WhiteReturn,
      AnniversaryIcon,
      BirthdayIcon,
      DocumentIcon,
      MarriageIcon,
      OtherIcon,
      InfoIcon
    ];

    preloadImages(appImages);
  }, []);

  return <></>;
};

export default ImagesLoaderComp;
