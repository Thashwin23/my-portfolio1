export const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (now.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0 && months === 0) return "just started";

  const yearString = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthString =
    months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  return [yearString, monthString].filter(Boolean).join(" and ");
};
