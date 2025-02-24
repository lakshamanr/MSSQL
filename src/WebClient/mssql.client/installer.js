const electronInstaller = require('electron-installer-windows');
const path = require('path');

electronInstaller({
  src: path.join(__dirname, 'release-builds/mssql-win32-x64/'),
  dest: path.join(__dirname, 'release-builds/installer/'),
  authors: 'Your Name or Company',
  exe: 'mssql.exe'
}).then(() => console.log('✅ Installer created!'))
  .catch(err => console.error('❌ Error creating installer:', err));
