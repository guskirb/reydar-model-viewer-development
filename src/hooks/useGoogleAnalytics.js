import ReactGA from "react-ga4";

export function useGoogleAnalytics() {
   function getTrackingID() {
      const params = new URLSearchParams(window.location.search);
      return params.get("ga_id");
   }

   function initGoogleAnalytics() {
      ReactGA.initialize(trackingID, {
         debug: true,
      });
      ReactGA.send("pageview");
   }

   const trackingID = getTrackingID();
   trackingID && initGoogleAnalytics();
}
