export const timeFormat = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    const formattedMinutes = minutes.toString();
    const formattedSeconds = secs.toString().padStart(2, "0");
  
    if (hours > 0) {
      const formattedHours = hours.toString().padStart(2, "0");
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  
  export const timeFormatHMS = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    const formattedMinutes = minutes.toString();
    const formattedSeconds = secs.toString().padStart(2, "0");
  
    if (hours > 0) {
      const formattedHours = hours.toString();
      return `${formattedHours} hours ${formattedMinutes} min ${formattedSeconds} sec`;
    }
  
    return `${formattedMinutes} min ${formattedSeconds} sec`;
  };