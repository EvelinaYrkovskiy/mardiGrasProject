/* main js functions */
import PAGES from "./pageModel.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  MEDIA_PAGE,
  FAQ_PAGE,
  CONTACT_PAGE,
  ERROR404_PAGE,
} from "../services/domService.js";

export const onChangePage = page => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  MEDIA_PAGE.className = "d-none";
  FAQ_PAGE.className = "d-none";
  CONTACT_PAGE.className = "d-none";
  ERROR404_PAGE.className = "d-none";
  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.MEDIA) return (MEDIA_PAGE.className = "d-block");
  if (page === PAGES.FAQ) return (FAQ_PAGE.className = "d-block");
  if (page === PAGES.CONTACT) return (CONTACT_PAGE.className = "d-block");
  ERROR404_PAGE.className = "d-block";
};
