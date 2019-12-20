export default function Initializer() {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`API_URL: ${process.env.VUE_APP_API_BASE_URL}`);
}
