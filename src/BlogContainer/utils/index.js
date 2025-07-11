import parse from "html-react-parser";

export const parseHTML = (htmlString) => {
  return htmlString ? parse(htmlString) : null;
};

export const formattedDate = (isoDate = "") => {
  return isoDate ? new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }) : "";
};

export const navigateAction = (route, navigate) => {
  if(navigate) navigate(route);
  window.scrollTo({ top: 20, behavior: "smooth" });
}