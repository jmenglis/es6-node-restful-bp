export default function() {
  switch(process.env.NODE_ENV) {
    case 'development':
      return require('./local.json');
    case 'production':
      return require('./production.json');
    default:
      return "Error";
  }
}
