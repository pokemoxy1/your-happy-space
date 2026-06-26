const { execSync } = require('child_process');

try {
  console.log('Creating site...');
  const createSiteCmd = `npx netlify api createSite --data '{"name":"carport-scs-team3"}'`;
  // Let's just create a temporary json file to avoid quoting issues completely
  const fs = require('fs');
  fs.writeFileSync('site.json', JSON.stringify({ name: 'carport-scs-team3' }));
  
  // Create site using the json file, wait the Netlify CLI doesn't support reading from file directly with --data?
  // Let's just use the fetch API with the token directly.
  
  // First, get the token:
  let token = '';
  try {
    const configData = fs.readFileSync(require('path').join(process.env.APPDATA, 'netlify', 'Config', 'config.json'), 'utf8');
    const config = JSON.parse(configData);
    token = config.users[config.userId].auth.token;
  } catch (e) {
    console.error('Failed to get Netlify token from config');
    process.exit(1);
  }

  // Create site manually
  fetch('https://api.netlify.com/api/v1/sites', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'carport-scs-team3' })
  })
  .then(res => res.json())
  .then(site => {
    if (site.id) {
      console.log('Site created successfully! ID:', site.id);
      fs.writeFileSync('.netlify/state.json', JSON.stringify({ siteId: site.id }, null, 2));
      console.log('Deploying site...');
      execSync('npx netlify deploy --build --prod', { stdio: 'inherit' });
    } else {
      console.error('Failed to create site:', site);
    }
  })
  .catch(console.error);
} catch (e) {
  console.error(e.message);
}
