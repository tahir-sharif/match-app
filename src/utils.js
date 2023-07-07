export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedTime =
    hours > 12 ? `${hours - 12}:${minutes} PM` : `${hours}:${minutes} AM`;

  const formattedDate = `${year}/${month}/${day} - ${formattedTime}`;

  return formattedDate;
};

export const getStatusFromTimestamp = (timestamp) => {
  const currentTimestamp = Date.now();

  if (timestamp > currentTimestamp) {
    return "Upcoming";
  } else if (timestamp <= currentTimestamp) {
    return "In Progress";
  } else {
    return "";
  }
};
