const BASE_TITLE = "Sour {>.<} Lemon";

export default function generateTitle(title) {
  if (!title) return BASE_TITLE;
  return `${title} — ${BASE_TITLE}`;
}
