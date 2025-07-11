import createHttpError from "http-errors";
import { getEnvVar } from "./getEnvVar.js";
import { saveFileToLocal } from "./savedFileToLocal.js";
import { saveFileToCloudinary } from "./saveFileToCloudinary.js";

export const saveFile = async (file) => {
  const strategy = getEnvVar("SAVE_FILE_STRATEGY");
  switch (strategy) {
    case "cloudinary":
      return await saveFileToCloudinary(file);
    case "local":
      return await saveFileToLocal(file);
    default:
      throw createHttpError(500, `Unknown file saving strategy ${strategy}`);
  }
};
