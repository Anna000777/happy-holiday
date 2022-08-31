import { useContext } from "react";
import { imgContext, ImgContextProvider } from "../../../context/imgContext";

const ImageCard = (props) => {
  const img = useContext(imgContext);
    return (
    <img scr={props.img} alt="background" width={840} height={520} />
  )
};

export default ImageCard;