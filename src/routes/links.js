import PAGES from "./pageModel.js";
import {
  HOME_PAGE_LINK,
  ABOUT_PAGE_LINK,
  MEDIA_PAGE_LINK,
  FAQ_PAGE_LINK,
  CONTACT_PAGE_LINK,
  RETURN_TO_HOME_PAGE_LINK,
} from "../services/domService.js";
import { onChangePage } from "./router.js";
/********* האזנה לאירועים **********/

// ניתוב דפים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
MEDIA_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.MEDIA));
FAQ_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.FAQ));
CONTACT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.CONTACT));
RETURN_TO_HOME_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.HOME)
);
