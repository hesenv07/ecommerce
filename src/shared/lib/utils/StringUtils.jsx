export const truncateText = (text, limit) => {
  if (!text) return "";
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};
