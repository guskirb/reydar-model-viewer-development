import { useConfig } from "../../../contexts/useConfig";

import BuyIcon from "../../../assets/icons/buy.png";
import ActionButtonStandard from "../Action/ActionButtonStandard";

export default function BuyButton() {
   const [config] = useConfig();

   return config.actions.buy && <ActionButtonStandard label="Buy" iconImg={BuyIcon} />;
}
