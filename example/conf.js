exports.config = {
  framework: 'jasmine2',
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  capabilities: {
	  browserName:'chrome'
  },
  
  specs: ['spec.js'],
  
}