function rgb(r, g, b) {
  r = Math.max(0, Math.min(r, 255));
  g = Math.max(0, Math.min(g, 255));
  b = Math.max(0, Math.min(b, 255));
  
  const hexValue = ((r << 16) | (g << 8) | b).toString(16).toUpperCase().padStart(6, '0')
  
  return hexValue
}
