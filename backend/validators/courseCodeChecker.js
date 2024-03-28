import z from "zod";

export default function courseCodeChecker(courseCode) {
  const courseCodeSchema = z.string().refine((value) => {
    // Custom validation function to check if courseCode matches the pattern
    const pattern = /^[A-Z]{3}\d{3}$/;
    return pattern.test(value);
  });

  try {
    courseCodeSchema.parse(courseCode);
    return true;
  } catch (error) {
    return false;
  }
}
