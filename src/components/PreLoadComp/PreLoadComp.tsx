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
import { preloadImages } from "../../utils/utils";
import "./PreLoad.scss";

const ImagesLoaderComp: React.FC = () => {
  useLayoutEffect(() => {
    const appImages = [
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
