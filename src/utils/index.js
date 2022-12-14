const showFormattedDate = (date, locale) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (locale !== "id") {
    return new Date(date).toLocaleDateString("en-US", options);
  }
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { showFormattedDate };
