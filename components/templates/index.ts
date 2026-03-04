import Annv001 from "./anniversary/Annv001";
import Annv002 from "./anniversary/Annv002";
import Val001 from "./valentine/Val001";
import Wed001 from "./wedding/Wed001";
import Bday001 from "./birthday/Bday001";
import Ty001 from "./thank_you/Ty001";
import Cong001 from "./congratulations/Cong001";
import Sea001 from "./seasonal/Sea001";
import Baby001 from "./baby_shower/Baby001";
import Grad001 from "./graduation/Grad001";
import Symp001 from "./sympathy/Symp001";

export const TEMPLATE_COMPONENTS: Record<string, React.ComponentType<any>> = {
  "annv-001": Annv001,
  "annv-002": Annv002,
  "val-001": Val001,
  "wed-001": Wed001,
  "bday-001": Bday001,
  "ty-001": Ty001,
  "cong-001": Cong001,
  "sea-001": Sea001,
  "baby-001": Baby001,
  "grad-001": Grad001,
  "symp-001": Symp001,
};

export {
  Annv001,
  Annv002,
  Val001,
  Wed001,
  Bday001,
  Ty001,
  Cong001,
  Sea001,
  Baby001,
  Grad001,
  Symp001,
};
