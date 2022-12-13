import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
const Logo = dynamic(() => import("./icons/logo.js"), { ssr: false });
const FaceBook = dynamic(() => import("./icons/facebook.js"), { ssr: false });
const Linkedin = dynamic(() => import("./icons/linkedin.js"), { ssr: false });
const Youtube = dynamic(() => import("./icons/youtube.js"), { ssr: false });
const Twitter = dynamic(() => import("./icons/twitter.js"), { ssr: false });
const Instgram = dynamic(() => import("./icons/instgram.js"), { ssr: false });
const ArrowRight = dynamic(() => import("./icons/arrow-right.js"), {
  ssr: false
});
const Call = dynamic(() => import("./icons/call.js"), {
  ssr: false
});
const Icon = ({
  name,
  width = "100%",
  height = "100%",
  fill,
  animation,
  onClick
}) => {
  const getIcon = name => {
    switch (name) {
      case "logo":
        return <Logo width={width} height={height} fill={fill} />;
      case "facebook":
        return <FaceBook width={width} height={height} fill={fill} />;
      case "linkedin":
        return <Linkedin width={width} height={height} fill={fill} />;
      case "youtube":
        return <Youtube width={width} height={height} fill={fill} />;
      case "twitter":
        return <Twitter width={width} height={height} fill={fill} />;
      case "instgram":
        return <Instgram width={width} height={height} fill={fill} />;
      case "arrow-right":
        return <ArrowRight width={width} height={height} fill={fill} />;
      case "call":
        return <Call width={width} height={height} fill={fill} />;
      default:
        return null;
    }
  };
  const cursor = onClick ? "pointer" : "inherit";
  return (
    <span
      onClick={onClick}
      className={`${styles.icon_wrapper} ${styles[cursor]} ${animation
        ? styles[animation]
        : ""}`}
    >
      {getIcon(name)}
    </span>
  );
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  animation: PropTypes.string
};
export default Icon;
