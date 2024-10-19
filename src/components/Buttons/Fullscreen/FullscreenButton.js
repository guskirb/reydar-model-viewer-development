import { useEffect, useState } from "react";
import { useConfig } from "../../../contexts/useConfig";

import ActionButtonStandard from "../Action/ActionButtonStandard";
import FullscreenIcon from "../../../assets/icons/fullscreen.png";
import CloseIcon from "../../../assets/icons/closeFullscreen.png";

export default function FullscreenButton() {
   const [config] = useConfig();
   const [isFullscreen, setIsFullscreen] = useState(false);
   const icon = isFullscreen ? CloseIcon : FullscreenIcon;

   const fullscreenAvailable =
      document.fullscreenEnabled || document.msFullScreenEnable || document.webkitFullscreenEnabled;

   function enableFullscreen() {
      document.body.requestFullscreen && document.body.requestFullscreen();
      document.body.msRequestFullscreen && document.body.msRequestFullscreen();
      document.body.webkitRequestFullscreen && document.body.webkitRequestFullscreen();
   }

   function exitFullscreen() {
      document.exitFullscreen && document.exitFullscreen();
      document.msExitFullscreen && document.msExitFullscreen();
      document.webkitExitFullscreen && document.webkitExitFullscreen();
   }

   const toggleFullscreen = () => {
      isFullscreen ? exitFullscreen() : enableFullscreen();
      setIsFullscreen(!isFullscreen);
   };

   function handleFullscreenChange() {
      document.fullscreenElement ? setIsFullscreen(true) : setIsFullscreen(false);
   }

   useEffect(() => {
      document.addEventListener("fullscreenchange", handleFullscreenChange);

      return function cleanup() {
         document.removeEventListener("fullscreenchange", handleFullscreenChange);
      };
   }, []);

   return (
      config.actions.fullscreen &&
      fullscreenAvailable && (
         <ActionButtonStandard
            className="fullscreen-button"
            iconImg={icon}
            handleClick={toggleFullscreen}
         />
      )
   );
}
